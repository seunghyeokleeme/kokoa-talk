import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import chatRouter from "./routers/chatRouter";
import friendRouter from "./routers/friendRouter";
import settingRouter from "./routers/settingRouter";
import userRouter from "./routers/userRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home, globalRouter);
app.use(routes.chats, chatRouter);
app.use(routes.friends, friendRouter);
app.use(routes.settings, settingRouter);
app.use(routes.users, userRouter);

export default app;

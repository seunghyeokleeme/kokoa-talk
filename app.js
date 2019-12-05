import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import globalRouter from "./routers/globalRouter";
import chatRouter from "./routers/chatRouter";
import friendRouter from "./routers/friendRouter";
import settingRouter from "./routers/settingRouter";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/friend", friendRouter);
app.use("/chat", chatRouter);
app.use("/setting", settingRouter);

export default app;

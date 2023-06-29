import express from "express";
import routes from "../routes";
import { home } from "../controllers/chatController";
import { search } from "../controllers/friendController";
import { join, login, logout } from "../controllers/userController";
import { more } from "../controllers/settingController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);
globalRouter.get(routes.more, more);

export default globalRouter;

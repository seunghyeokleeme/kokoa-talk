import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => res.send("Hi from home!"));
globalRouter.get(routes.join, (req, res) => res.send("Hi from join"));
globalRouter.get(routes.login, (req, res) => res.send("Hi from login"));
globalRouter.get(routes.logout, (req, res) => res.send("Hi from logout"));
globalRouter.get(routes.search, (req, res) => res.send("Hi from search"));
globalRouter.get(routes.more, (req, res) => res.send("Hi from more"));

export default globalRouter;

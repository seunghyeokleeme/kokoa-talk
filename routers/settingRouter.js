import express from "express";
import routes from "../routes";

const settingRouter = express.Router();

settingRouter.get(routes.settings, (req, res) => res.send("Settings"));
settingRouter.get(routes.friendSetting, (req, res) =>
  res.send("Setting Friend")
);
settingRouter.get(routes.chatSetting, (req, res) => res.send("Setting Chat"));
settingRouter.get(routes.profileSetting, (req, res) =>
  res.send("Setting Profile")
);

export default settingRouter;

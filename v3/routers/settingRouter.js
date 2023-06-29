import express from "express";
import routes from "../routes";
import {
  settings,
  friendSetting,
  profileSetting,
  chatSetting
} from "../controllers/settingController";

const settingRouter = express.Router();

settingRouter.get(routes.settings, settings);
settingRouter.get(routes.friendSetting, friendSetting);
settingRouter.get(routes.chatSetting, chatSetting);
settingRouter.get(routes.profileSetting, profileSetting);

export default settingRouter;

import express from "express";
import routes from "../routes";
import {
  friends,
  addFriend,
  friendDetail,
  editFriend,
  deleteFriend
} from "../controllers/friendController";

const friendRouter = express.Router();

friendRouter.get(routes.friends, friends);
friendRouter.get(routes.addFriend, addFriend);
friendRouter.get(routes.friendDetail, friendDetail);
friendRouter.get(routes.editFriend, editFriend);
friendRouter.get(routes.deleteFriend, deleteFriend);

export default friendRouter;

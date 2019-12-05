import express from "express";
import routes from "../routes";
import {
  chats,
  addChat,
  chatDetail,
  editChat,
  deleteChat
} from "../controllers/chatController";

const chatRouter = express.Router();

chatRouter.get(routes.chats, chats);
chatRouter.get(routes.addChat, addChat);
chatRouter.get(routes.chatDetail, chatDetail);
chatRouter.get(routes.editChat, editChat);
chatRouter.get(routes.deleteChat, deleteChat);

export default chatRouter;

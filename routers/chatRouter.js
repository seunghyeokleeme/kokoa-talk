import express from "express";
import routes from "../routes";

const chatRouter = express.Router();

chatRouter.get(routes.chats, (req, res) => res.send("Chats"));
chatRouter.get(routes.addChat, (req, res) => res.send("Add Chat"));
chatRouter.get(routes.chatDetail, (req, res) => res.send("Chat Detail "));
chatRouter.get(routes.editChat, (req, res) => res.send("Edit Chat"));
chatRouter.get(routes.deleteChat, (req, res) => res.send("Delete Chat"));

export default chatRouter;

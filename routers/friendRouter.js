import express from "express";
import routes from "../routes";

const friendRouter = express.Router();

friendRouter.get(routes.friends, (req, res) => res.send("Hi from Friends"));
friendRouter.get(routes.addFriend, (req, res) => res.send("Hi from AddFriend"));
friendRouter.get(routes.friendDetail, (req, res) =>
  res.send("Hi from FriendDetail")
);
friendRouter.get(routes.editFriend, (req, res) =>
  res.send("Hi from EditFriend")
);
friendRouter.get(routes.deleteFriend, (req, res) =>
  res.send("Hi from DeleteFriend")
);

export default friendRouter;

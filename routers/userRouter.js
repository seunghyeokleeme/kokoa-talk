import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("Hi from Users"));
userRouter.get(routes.userDetail, (req, res) => res.send("Hi from UserDetail"));
userRouter.get(routes.editProfile, (req, res) =>
  res.send("Hi from EditProfile")
);
userRouter.get(routes.changePassword, (req, res) =>
  res.send("Hi from ChangePassword")
);

export default userRouter;

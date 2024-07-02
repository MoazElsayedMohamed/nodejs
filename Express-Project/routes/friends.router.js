const express = require("express");
const frinedscontroller = require("../controllers/friends.controller");

const friendsRouter = express.Router();

friendsRouter.use((res, req, next) => {
  console.log("ip address:", req.ip);
  next();
});
friendsRouter.post("/", frinedscontroller.postFriends);
friendsRouter.get("/", frinedscontroller.getFriends);
friendsRouter.get("/:friendId", frinedscontroller.getFriend);

module.exports = friendsRouter;

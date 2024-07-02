const express = require("express");
const frinedscontroller = require("./controllers/friends.controller");
const messagesController = require("./controllers/messages.controller");
const app = express();
const port = 8888;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post("/friends", frinedscontroller.postFriends);
app.get("/friends", frinedscontroller.getFriends);
app.get("/friends/:friendId", frinedscontroller.getFriend);

app.get("/messages", messagesController.getMessages);
app.post("/messages", messagesController.postMessages);

app.listen(port, () => console.log(`Listening on ${port}`));

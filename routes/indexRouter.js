const express = require("express");

const indexRouter = express.Router();

indexRouter.use(express.Router());

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("pages/index", { messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("pages/form");
});

indexRouter.get("/msg/:massagesIndex", (req, res) => {
  const msgIndex = req.params.massagesIndex;
  res.render("pages/msg", { messages, msgIndex });
  // console.log(req.params.massagesIndex);
  // res.send(messages[req.params.massagesIndex].text);
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.senderName,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = indexRouter;

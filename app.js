const express = require("express");

const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

const indexRouter = require("./routes/indexRouter");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

// Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => {
  console.error(err);
  res.status(401).send("oops! wrong way!");
});

app.listen(PORT, () => {
  console.log(`app open at port ${PORT}`);
});

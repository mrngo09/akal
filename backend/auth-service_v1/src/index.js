import express from "express";

const app = express();

app.get("/api/users", (req, res) => {
  return res.json({
    message: "User",
  });
});

app.get("/", (req, res) => {
  res.end("<h1>Hello World!</h1><hr>");
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});

const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req,res) => {
  res.send("Hello, world!");
});

app.post("/", (req, res) => {
  res.status(200).send("Hello, I am a response to your post request");
});

app.listen(PORT, () => {
  console.log("My server is listening to ${PORT");
});

// In Postman, to make a GET or POST request: http://localhost:3000/
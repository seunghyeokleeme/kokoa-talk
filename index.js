import express from "express";
const app = express();

const PORT = 4002;

function handleListening() {
  console.log(`✅  Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
  res.send("Hi from home!");
}

app.get("/", handleHome);

app.listen(PORT, handleListening);

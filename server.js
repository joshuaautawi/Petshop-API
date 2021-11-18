const express = require("express");
const app = express();
const router = require("./routers/index");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const http = require("http");
const server = http.createServer(app);
const socketio = require("socket.io");
const io = socketio(server);
dotenv.config();

try {
  mongoose.connect("mongodb://localhost:27017/petshop", () => {
    console.log("Mongoose connected !");
  });
} catch (e) {
  console.log(e);
}
io.on("connection", (socket) => {
  socket.emit("message", "Welcome to ChatCord");
  socket.broadcast.emit("message", "A user has join the chat");
  socket.on("disconnect", () => {
    io.emit("message", "A user has left the chat!");
  });
  socket.on('chatMessage',msg=>{
      io.emit('message',msg)
  })
});
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", router);

server.listen(4000, () =>
  console.log(`Server has been started , and listen to port 4000`)
);

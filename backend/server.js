const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const connectDB = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

const server = http.createServer(app);

const io = new Server(server,{
  cors:{origin:"*"}
});

require("./socket/socketHandler")(io);

server.listen(5000,()=>{
 console.log("Server running on port 5000");
});

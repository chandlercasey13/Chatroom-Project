const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const cors = require('cors')
const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173"
    }
  });

const port = process.env.PORT ? process.env.PORT : '3000';


app.use(cors())

//to setup event listeners, io.on must be wrapping socket.on methods
 io.on('connection', (socket) => {
    console.log('a user connected');

  socket.on('message', (arg) => {
    console.log(arg)
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });


});

server.listen(port, () => {
  console.log(`listening on ${port}`);
});
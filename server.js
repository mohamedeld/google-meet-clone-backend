const fs =require("fs");

const express = require("express");
const http = require('http')
const {Server} = require("socket.io")
const app = express();
const appointementRoute = require("./expressRouter");

app.use(express.json());
app.use(express.static(__dirname+"/public"));
app.use("/",appointementRoute)


const server = http.createServer(app)

const io =  new Server(server,{
  cors:['http://localhost:3000','http://localhost:3001','http://localhost:3002']
})

server.listen(9000,()=>{
  console.log(`server is running on port ${9000}`)
})

module.exports = {server,io,app}
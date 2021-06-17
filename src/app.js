const express = require("express")
const ws = require("./wss")
const live = require("./Live_Server_Config")
const app = express()
const port = 3000

ws.StartWS()
live.Start_LiveServer();

app.use(express.static('public'))

app.get("/",(req,res)=>{
    res.send("<h1 style='font-size: 80px;'>Service Satrt</h1>")
})

app.listen(port,()=>{
    console.log("All Service Satrt")
})
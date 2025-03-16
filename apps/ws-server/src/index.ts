import { WebSocketServer,WebSocket } from "ws";

const wss = new WebSocketServer({port:3002});

wss.on('connection',(ws:WebSocket)=>{
    console.log('new user connected')
    ws.on('message',(data)=>{
        console.log(data.toString);
    })
})
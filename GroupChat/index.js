const express = require('express');
const app = express();
const server = app.listen(8000 ,console.log("listening on http://localhost:8000"));
const io = require('socket.io')(server);
var counter = 0;
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('static'));


app.get('/' , (req , res)=>{
  res.render('index')
});



io.on('connection' , (socket) =>{
    socket.on("message" ,(data)=>{
        socket.emit("send" , {
            name: data.name,
            message: data.message
        });
        socket.broadcast.emit("send" , {
            name: data.name,
            message: data.message,
        });
    });
});
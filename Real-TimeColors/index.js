const express = require('express');
const app = express();
const server = app.listen(8000 ,console.log("listening on http://localhost:8000"));
const io = require('socket.io')(server);
var counter = 0;
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



app.get('/' , (req , res)=>{
  res.render('index')
});



io.on('connection' , (socket) =>{
    socket.on('green' , (color)=>{
        socket.emit('send' , {color: "green"});
        socket.broadcast.emit('send' , {color: "green"});
    });
    socket.on('blue' , (color)=>{
        socket.emit('send' , {color: "blue"});
        socket.broadcast.emit('send' , {color: "blue"});

    });
    socket.on('pink' , (color)=>{
        socket.emit('send' , {color: "pink"});
        socket.broadcast.emit('send' , {color: "pink"});

    });
});
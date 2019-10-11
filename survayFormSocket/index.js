const express = require('express');
const app = express();
const server = app.listen(1337 ,console.log("listening on port 1337"));
const io = require('socket.io')(server);
var counter = 0;
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



app.get('/' , (req , res)=>{
  res.render('index')
});
    
io.on('connection', function (socket) { //2
  
  socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
  socket.on('thankyou', function (data) { //7
    console.log(data.locs); //8 (note: this log will be on your server's terminal)
    var ran = Math.floor(Math.random() * 1000)
    socket.emit('fromBack' ,{
     name: data.names,
     loc: data.locs,
     lan: data.lans,
     comment:data.comments,
     rand: ran
    });
  });
    
});

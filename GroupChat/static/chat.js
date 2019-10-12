
var socket = io(); //1

$(document).ready(function () {
    $("#send").click(()=>{
        var name  = $("#handle").val();
        var msj = $("#message").val();
        socket.emit("message" , {
            name : name,
            message: msj,
        });
        $("#message").val("")
    });

    socket.on("send",(data)=>{
        // console.log(data.message);
        // console.log(data.name);
        $("#output").append(`<p> ${data.name}: <span>${data.message} </p>`)
    });
}); //6

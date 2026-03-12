module.exports = (io)=>{

 io.on("connection",(socket)=>{

   console.log("User connected");

   socket.on("join-room",(roomId)=>{
     socket.join(roomId);
   });

   socket.on("draw",(data)=>{
     socket.to(data.roomId).emit("draw",data.line);
   });

   socket.on("disconnect",()=>{
     console.log("User disconnected");
   });

 });

};

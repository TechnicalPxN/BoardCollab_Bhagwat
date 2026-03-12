const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
 roomId:String,
 elements:[],
 users:[]
});

module.exports = mongoose.model("Room",RoomSchema);

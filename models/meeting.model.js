const mongoose = require("mongoose");
const {Schema} = mongoose;

const meeting = mongoose.model(
    "Meeting",
    mongoose.Schema({
        hostId : {
            type: String,
            require: true,
        },
        hostName: {
            type: String,
            require: true,
        },
        startTime :{
            type: Date,
            require: true,
        },
        meetingUser : [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: "MeetingUser"
        }
    ]
    },{
        toJSON: {
            transform: function (doc, ret){
                ret.id = ret._id.toString(),
                delete ret._id;
                delete ret._v;
            }
        }
    },{
        timestaps: true
    })
);

module.exports = {
    meeting
}
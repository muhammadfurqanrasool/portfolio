import {Schema, model} from "mongoose";

const messageSchema = new Schema({
    fullName : {
        type:String,
        required: [true, "Provide Full name"],
        min: 7,
        max: 30
    },
    email : {
        type:String,
        required: [true, "Provide Email"],
        unique: true,
    },
    phoneNumber : {
        type:String,
        required: false,
        min: 10
    },
    message: {
        type:String,
        required : [true, "Provide a message"],
        min : 10
    }

},{timestamps: true});


const Message = model("Message",messageSchema);

export default Message;
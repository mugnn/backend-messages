import { Mongoose, Schema } from "mongoose";
const mongoose: Mongoose = require('../config/mongodb');

const message = new Schema({
  time: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'userSession',
    required: true
  }
}, { collection: 'realtime' })

const MessageModel = mongoose.model('messageModel', message);

export default MessageModel;
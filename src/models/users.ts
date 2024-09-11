import { Mongoose, Schema } from "mongoose";
const mongoose: Mongoose = require('../config/mongodb');

const userSession = new Schema({
  name: {
    type: String,
    required: true
  },
  alias: {
    type: String,
    required: false
  },
  icon_color: {
    type: String,
    required: true
  }
}, { collection: 'users' })

const UserSessionModel = mongoose.model('userSession', userSession);

export default UserSessionModel;
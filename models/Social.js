const mongoose = require('mongoose');

const { Schema } = mongoose;

const socialSchema = new Schema(
  {
    idzone: { type: String, required: true },
    comments: { type: String },
    date: { type: String, required: true },
    userid: { type: Schema.ObjectId, ref: "username" }
  }

const Social = mongoose.model('Social', socialSchema)

module.exports = Social;
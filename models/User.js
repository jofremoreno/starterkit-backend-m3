const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    lastname: { type: String, required: true },
    email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, 'is invalid'],
    },
    avatar: { type: String, default: '/images/avatar/avatar.svg' },
    hashedPassword: { type: String, required: true },
    idzone: { type: String },
    favsData: [
      {
        id: String,
        name: String,
      },
    ],
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

const User = mongoose.model('User', userSchema);

module.exports = User;

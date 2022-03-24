const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, 'Please add a title'],
      unique:true
    },
    description: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  module.exports = mongoose.model('Post', PostSchema);
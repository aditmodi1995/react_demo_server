import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postData = new Schema({
  name: {
    type: String,
    match: /^[a-z0-9]+$/i,
    required: true
  },
  emp_id: {
    type: String,
    match: /^[a-z0-9]+$/i,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    match: /\s[0-1]{1}[0-9]{0,2}/,
  },
  dept: {
    type: String,
    match: /^[A-z]+$/,
    required: true
  },
  phone: {
    type: Number,
    regex: /^[0-9]+$/
  },
  gender: {
    type: String,
    required: true
  }
})

export default mongoose.model('postData', postData);


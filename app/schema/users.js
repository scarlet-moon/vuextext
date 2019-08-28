const mongoose = require("mongoose")

// 替换 mongoose 自实现的 Promise
mongoose.Promise = global.Promise

// 把 Schema 取出来
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  password: String,
  age: Number
})

module.exports = mongoose.model('Users', userSchema)
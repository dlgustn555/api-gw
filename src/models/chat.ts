import mongoose from 'mongoose'

const chatSchema = new mongoose.Schema({
  type: String,
  nickname: String,
  message: String,
  regDate: { type: Date, default: Date.now },
})

export default mongoose.model('chat', chatSchema)

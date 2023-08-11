import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: String,
  nickname: String,
  profileImage: String,
})

export default mongoose.model('user', userSchema)

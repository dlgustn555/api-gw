import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  regDate: { type: Date, default: Date.now },
  updateDate: { type: Date, default: Date.now },
})

export default mongoose.model('blog', blogSchema)

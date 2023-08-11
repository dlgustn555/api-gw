import dotenv from 'dotenv'
import * as mongoose from 'mongoose'

dotenv.config()

const uri = `mongodb://${process.env.DB_IP}:${process.env.DB_PORT}/next-playground`

async function connectDb() {
  try {
    await mongoose.connect(uri)
    console.log('SUCCESS mongoose Connect!! 🤩🌴🌵 ')
  } catch (error) {
    console.log('FAIL mongoose Connect!! 🥶👻🐙')
    console.dir(error)
  }
}

export default connectDb

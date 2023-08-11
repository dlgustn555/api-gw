import app from './app'
import errorHandler from './error_handler'
import connectDb from './mongdb'

const PORT = Number(process.env.PORT)

connectDb()

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`🎉Server is Running ON ${PORT}!!🎈`)
})

import Router from '@koa/router'
import UserModel from '../models/user'

const userRouter = new Router()

userRouter.get('/', async (ctx) => {
  const users = await UserModel.find({})
  ctx.body = users
})

userRouter.get('/:id', async (ctx) => {
  const [user] = await UserModel.find({ _id: ctx.params.id })
  ctx.body = user
})

userRouter.post('/', async (ctx) => {
  const { name, profileImage, nickname } = ctx.request.body as any

  const newUser = new UserModel({ name, profileImage, nickname })
  const savedUser = await newUser.save()
  ctx.body = savedUser
})

export default userRouter

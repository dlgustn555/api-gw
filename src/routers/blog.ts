import Router from '@koa/router'
import BlogModel from '../models/blog'

const blogRouter = new Router()

blogRouter.get('/', async (ctx) => {
  const blogs = await BlogModel.find({})
  ctx.body = blogs
})

blogRouter.get('/:id', async (ctx) => {
  const [blog] = await BlogModel.find({ _id: ctx.params.id })
  ctx.body = blog
})

blogRouter.post('/', async (ctx) => {
  const { title, content } = ctx.request.body as any
  const newBlog = new BlogModel({ title, content })
  const savedBlog = await newBlog.save()

  ctx.body = savedBlog
})

export default blogRouter

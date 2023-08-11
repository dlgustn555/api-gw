import Router from '@koa/router'

import blogRouter from './blog'
import userRouter from './user'

const apiRouter = new Router()

apiRouter.use('/blog', blogRouter.routes())
apiRouter.use('/user', userRouter.routes())

export default apiRouter

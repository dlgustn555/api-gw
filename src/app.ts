import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import serve from 'koa-static'
import mount from 'koa-mount'

import websockify from 'koa-websocket'

import apiRouter from './routers'
import chatRoutes from './routers/chat'

const app = websockify(new Koa())

app.ws.use(chatRoutes(app))

app.use(bodyParser())
app.use(mount('/public', serve('./src/public')))
app.use(mount('/api', apiRouter.routes())).use(apiRouter.allowedMethods())

export default app

import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import serve from 'koa-static'
import mount from 'koa-mount'
import route from 'koa-route'
import websockify from 'koa-websocket'

import apiRouter from './routers'

const app = websockify(new Koa())

app.ws.use(
  route.all('/ws', (ctx) => {
    ctx.websocket.send('Hello World')

    ctx.websocket.on('message', (message) => {
      ctx.websocket.send(message)
    })
  }),
)

app.use(bodyParser())
app.use(mount('/public', serve('./src/public')))
app.use(mount('/api', apiRouter.routes())).use(apiRouter.allowedMethods())

export default app

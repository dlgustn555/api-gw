import route from 'koa-route'
import ChatModel from '../models/chat'

const chatRoutes = (app) =>
  route.all('/ws', async (ctx) => {
    const chats = await ChatModel.find({})

    if (chats.length > 0) {
      ctx.websocket.send(JSON.stringify({ type: 'sync', payload: chats }))
    }

    ctx.websocket.on('message', (data) => {
      const { server } = app.ws

      if (typeof data.toString() !== 'string' || !server) {
        return
      }

      const {
        type,
        payload: [{ nickname, message }],
      } = JSON.parse(data.toString())

      if (type !== 'intro') {
        const newChat = new ChatModel({ type, nickname, message })
        newChat.save()
      }
      const newChat = new ChatModel({ type, nickname, message })
      newChat.save()

      server.clients.forEach((client) => {
        client.send(data.toString())
      })
    })
  })

export default chatRoutes

import supertest from 'supertest'
import app from './app'

const request = supertest(app)

test('[GET] /user/:id API', async () => {
  const result = await request
    .get('/user/dlgustn555')
    .accept('application/json')

  expect(result.body).toMatchObject({ id: 'dlgustn555' })
})

test('[GET] /user/:id API', async () => {
  const result = await request.get('/user/dlgustn555').accept('text/html')

  expect(result.text).toMatch(/^<html>.*<\/html>$/)
})

test('[POST] /user/:id API', async () => {
  const res = await request
    .post('/user/dlgustn555')
    .send({ nickname: 'GodSent85' })

  expect(res.status).toBe(200)
  expect(res.text).toBe(`User Nickname GodSent85`)
})

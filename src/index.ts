import { Hono } from 'hono'
import {cors} from 'hono/cors'
import usersRoute from './routes/users'
import loginRoute from './routes/login'

const app = new Hono()

app.use(cors())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/users', usersRoute)
app.route('/login', loginRoute)

export default app

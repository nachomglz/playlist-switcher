import express from 'express'
import cors from 'cors'
import mainRouter from './routers'

const app = express()

// configure cors and middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// configure routers
app.use(mainRouter)


export default app

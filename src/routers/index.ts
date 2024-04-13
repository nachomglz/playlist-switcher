import { Router } from 'express'
import userRouter from "./user";


const mainRouter = Router()

mainRouter.use('/api/user/', userRouter)

export default mainRouter

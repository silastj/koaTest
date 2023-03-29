import express, { Request, Response } from 'express'
import path from 'path'
import dontenv from 'dotenv'
import apiRoutes from './routes/api'

dontenv.config()


const server = express()

server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({extended: true}))

server.use(apiRoutes)

server.use((req: Request, res: Response ) =>  {
  res.status(404)
  res.json({error: "Endpoint não encontrada"})
})

server.listen(process.env.PORT)
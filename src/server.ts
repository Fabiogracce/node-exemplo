// importando biblioteca
import express,{Request, Response} from "express"
import {Server} from 'http'
import mainRoutes from './routes/index'



// usando express
const server = express()

server.use(mainRoutes)







// gerando servidor na porta 3000
server.listen(3000)


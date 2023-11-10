// importando biblioteca
import express,{Request, Response} from "express"
import {Server} from 'http'
import mainRoutes from './routes/index'
import path from 'path'
//importando mustache
import mustache from 'mustache-express'


// usando express
const server = express()


// configurando mustache

server.set('view engine', 'mustache')

server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())

//configurando caminho da pasta publica

server.use(express.static(path.join(__dirname,'../public')))



server.use(mainRoutes)


// criando a pagina nao encontrada

server.use((req:Request, res:Response) =>{
    res.status(404).send('Pagina nao encontrada')
})




// gerando servidor na porta 3000
server.listen(3000)


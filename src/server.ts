//importando biblioteca EXPRESS
import express, {Request, Response} from "express"
import path from "path"
//importando nosso arquivo index.ts
import mainRoutes from './routes/index'
import mustache from 'mustache-express'

//usando EXPRESS
const server = express()

//configurando o mustache
server.set('view engine', 'mustache')
//configurando caminho da pasta view
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())
//configurando caminho da pasta public
server.use(express.static(path.join(__dirname, '../public')))
//configurando o POST
server.use(express.urlencoded({extended: true}))

server.use(mainRoutes)

//criando a página não encontrada
server.use((req:Request, res:Response) => {
    res.status(404).send('Página não encontrada')
})

//gerando o servidor na porta 3000
server.listen(3000)
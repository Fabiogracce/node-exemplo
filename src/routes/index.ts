import {Router, Request, Response} from "express"

const router = Router()





// criando a primeira rota
router.get("/",(req,res)=>{
    res.send("Ola Mundo")
})

router.get('/contatos',(req:Request,res:Response)=>{
    res.send("Esta é a pagina de contato")
})

//rota estatica

router.get('/noticias/titulo-da-noticia',(req:Request,res:Response)=>{
    res.send("Noticia aparcendo na tela")
})

//rota dinamica

router.get("/noticia/:slug", (req:Request,res:Response)=>{
    let slug: string = req.params.slug
    res.send(`Noticia ${slug}`)
})

router.get('/voo/:origem-:destino',(req:Request,res:Response)=>{
    let {origem,destino} = req.params
    res.send(`Procurando voos de ${origem} até ${destino}`)
})


export default router
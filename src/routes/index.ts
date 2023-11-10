import {Router, Request, Response} from "express"

const router = Router()





// criando a primeira rota
router.get("/",(req,res)=>{

    /*let user = {

        name:" jose",
        age: 46

    }
    */
        let idade: number = 18
        let mostrarIdade: boolean = false
        
        if (idade >= 18){
            mostrarIdade =  true
        }
        



    //let user: string = "fabio"
    res.render('home',{
      //  user
        name:'Joao',
        lastname:'Silva',
        mostrarIdade  
            
      

        

        
        
    })
})

router.get('/contatos',(req:Request,res:Response)=>{
    res.render("contato")
})

//rota estatica

router.get('/sobre',(req:Request,res:Response)=>{
    res.render("sobre")
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
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
    res.render('pages/home',{
      //  user
        name:'Joao',
        lastname:'Silva',
        mostrarIdade,  
            
    produtos: [

        {titulo: 'produtos x', preco:200},
        {titulo: 'produtos y', preco:500},
        {titulo: 'produtos z', preco:450}

    ],
      frases:[
        'frases do dia 1',
        'frases do dia 2',
        'frases do dia 3'
        
      ]


        
        
    })
})

router.get('/contatos',(req:Request,res:Response)=>{
    res.render("pages/contato")
})

//rota estatica

router.get('/sobre',(req:Request,res:Response)=>{
    res.render("pages/sobre")
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


router.get('/nome',(req:Request,res:Response)=>{

    let nome: string = req.query.nome as string
    let idade:number = parseInt(req.query.idade as string)
    let telefone: number = parseInt(req.query.telefone as string)
    let endereco: string = req.query.nome as string

    res.render("pages/nome",{
        nome,
        idade,
        telefone,
        endereco
        
    })
})

router.get('/idade',(req:Request,res:Response)=>{

    res.render("pages/idade")

    
})

router.post('/idade',(req:Request,res:Response)=>{

    let idade: number = new Date().getFullYear() - parseInt(req.body.idade as string)    
    console.log(idade)
    res.render("pages/idade", {idade})
})



export default router
import express from  'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const prisma = new PrismaClient()

const app = express()
app.use(express.json()) // avisa o express que será utilizado  o formato json
app.use(cors()) //em ambiente empresarial, necessario configurar a rota correta dentro do cors para evitar qualquer tipo de acesso
app.post('/users', async (req, res) => { //async
    
   await prisma.user.create ({ // sempre que utiliz o await, que serve para o js "esperar", precisa usar um async
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.name
            
            
        }
    })
    
    res.status(201).json(req.body)

})

app.get('/users', async(req, res) => {

    const users = await prisma.user.findMany()
    res.status(200).json (users)
})

app.put('/users/:id', async (req, res) => { //:id cria a variavel id com o ":"
    
    await prisma.user.update ({ // sempre que utiliz o await, que serve para o js "esperar", precisa usar um async
         where: {
            id: req.params.id
         },
        data: {
             name: req.body.name,
             age: req.body.age,
             email: req.body.email
             
             
         }
     })
     
     res.status(201).json(req.body)
 
 })

 app.delete('/users/:id', async (req, res) => {

    await prisma.user.delete ({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({message: "Usuario deletado com sucesso!"})
 })
 

app.listen(3000)

/*app.post('/users') //criar usuarios

app.put('/users') //editar usuarios

app.patch('/users') //editar um usuarios

app.delete('/users') //deletar usuarios

/*
 1) tipo de rota/ Metodo http como get,post,delete
 2) Endereço url

*/

//Criar nossa api de usuarios
// criar um usuario
//listar todos usuarios
//editar um usuario
// deletar um usuario

//username: matheus senha: 123 mongodb
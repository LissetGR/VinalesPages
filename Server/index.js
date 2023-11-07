const express = require("express")
const app = express()
const {createServer}= require("http")
const Http= createServer(app)
const {Client}= require("pg")
const {Server}= require("socket.io")
const cors= require("cors")
const { Console } = require("console")

const BD={
    user: 'postgres',
    database:'BDVinnales',
    password:'li',
    host:'localhost',
    port:5432
}



const io = new Server(Http)

const Servidor= new Client(BD) 

Servidor.connect()

app.get('/Hospedajes',cors(),async (request,response)=>{
   await Servidor.query(`Select * from hospedaje`)
    .then(resp=>{
        response.json(resp.rows)
    })
    .catch(error=>{
        response.status(404).end()
    })
})


app.get('/Busqueda/:nombreABuscar/:estrellasABuscar', cors(), async(request,response)=>{
 await Servidor.query(`Select * from buscarhospedajes('${request.params.nombreABuscar}',${request.params.estrellasABuscar})`)
       .then(resp=>{
         response.json(resp.rows)
       })
       .catch(error=>{
         response.status(404).end()
       })
})



// app.get('/revisarCapacidades/:id_hospedaje', cors(), async (request,resolve)=>{
//   await Servidor.query(`Select * from revisarCapacidades(${request.params.id_hospedaje})`)
//                 .then(resp=>{
//                     resolve.json(resp.rows)  
//                     console.log(resp.rows)
//                 })
//                 .catch(error=>{
//                     resolve.status(404).end()
//                 })
// })

io.on("connection", (socket)=>{
    
})

Http.listen(3000)
console.log("Listen on port 3000")

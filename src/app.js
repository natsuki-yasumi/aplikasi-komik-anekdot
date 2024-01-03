import express from 'express'
import { TestHandler } from './controller/testHandler.js'
import path from 'path'
import { fileURLToPath } from 'url'
import { db } from './database/connection.js'
import bodyParser from 'body-parser'
import { GuruController } from './controller/guru.controller.js'
import { AuthController } from './controller/auth.controller.js'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")
app.set("views",path.join(__dirname,'/public/views'))
app.use(express.static(__dirname + '/public'))

/* Routes */
app.get("/test", TestHandler)
app.post("/guru/create",GuruController.Create)
app.get("/guru/create", GuruController.test)

app.post("/login", AuthController.login)


try{
    await db.authenticate();
    console.log("Terhubung ke databases")
} catch (error){
    console.error("Tidak terkoneksi ke database : ", error)
}

app.listen(3000, ()=>{
    console.log("Server berjalan di port 3000")
})
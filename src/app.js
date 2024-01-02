import express from 'express'
import { TestHandler } from './controller/testHandler.js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()

app.set("view engine", "ejs")
app.set("views",path.join(__dirname,'/public/views'))
app.use(express.static(__dirname + '/public'))

app.get("/test", TestHandler)

app.listen(3000, ()=>{
    console.log("Server berjalan di port 3000")
})
import express, { Response } from "express";
import { Boostrap, authController,guruController } from "./config/bootstrap.js";
import dotenv from "dotenv"
import { CreateGuruDTO } from "./dto/Guru/CreateGuru.DTO.js";
import { AuthController } from "./Controller/auth.controller.js";
dotenv.config()
export const app = express();
const port = process.env.PORT_SERVER || 3000;

Boostrap()

// app.post("/guru/create", guruController.Create)
app.get("/login", authController.LoginPage)

app.listen(port, function(){
    console.log(`server ini berjalan di port ${port}`);
})
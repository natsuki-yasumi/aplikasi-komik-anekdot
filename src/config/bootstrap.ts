import { StartConnection } from "./database.js";
import {app} from '../main.js'
import express from 'express'
import bodyParser from "body-parser";
import path from "path";
import { URL } from "url";
import { AuthController } from "../Controller/auth.controller.js";
import { GuruService } from "../services/guru.service.js";
import { GuruController } from "../Controller/guru.controller.js";

//  const __dirname = new URL('.',import.meta.url).pathname;
export const authController = new AuthController()
const guruService = new GuruService()
export const guruController = new GuruController(guruService)
export function Boostrap(){
    StartConnection()
    app.use(bodyParser.urlencoded({extended:true}));
    app.set("view engine","ejs");
    app.set("views", './public/views')
    app.use(express.static('public'))
    

}
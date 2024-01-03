import { AuthService } from "../services/auth.service.js"
import { GuruService } from "../services/guru.service.js"

export const AuthController = {
    login: (req,res)=>{
        AuthService.login(req.body,res)
    }
}
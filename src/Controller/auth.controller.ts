import { Request, Response } from "express";

export class AuthController {

    public LoginPage(req: Request,res: Response){
        res.render("login")
    }
}
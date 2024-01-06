import { Request, Response } from "express"
// import { Guru } from "../Entity/guru.entity"
// import { AppDataSource } from "../Config/database"
// import { CreateGuruDTO } from "../dto/Guru/CreateGuru.DTO"
import { GuruService } from "../services/guru.service.js"


export class GuruController {
    
    constructor(private service: GuruService){
        
    }

     public async Create(req : Request, res: Response){
        // const service = new GuruService()
        const Guru = await this.service.CreateGuru(req.body)
        console.log(Guru)
        res.status(200).json({
            message: "Guru berhasil di tambahkan",
            data: Guru
        })
    }


}

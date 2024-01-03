import { name } from "ejs";
import { GuruEntity } from "../entities/guru.entity.js";
import { GuruService } from "../services/guru.service.js";
import bcrypt from 'bcrypt'

export const GuruController = {
    Create: async (req,res) => {

        const data = {
            nama: req.body.name,
            nip: req.body.nip,
            password: req.body.password,
            alamat: req.body.alamat,
            ttl: req.body.ttl,
        }

        data.password = await bcrypt.hash(data.password,10);
        
        GuruService.createOne(data)

        res.status(200).json({
            message: "sucessfully created guru",
        })
    },
    test : (req,res) =>{
        res.send("test")
    }
}
import { GuruEntity } from "../entities/guru.entity.js"
import bcrypt from "bcrypt"
import { SiswaEntity } from "../entities/siswa.entity.js"

export const AuthService = {
    Login: (data,res)=>{
        const pass = ""
        if(data.nip != null){
            const guru = GuruEntity.findOne({where:{nip: data.nip}})
            if(guru != null)
                pass = bcrypt.compare(data.password, guru.password)

            if(pass)
                res.render("guru-page/dashboard")

        } else if(data.nis != null) {
            const siswa = SiswaEntity.findOne({where:{nis: data.nis}})
            if(siswa != nulll)
                pass = bcrypt.compare(data.password, siswa.password)

            if(pass)
                res.render("siswa-page/dashboard")
        }

        res.render("/login")
    }
}
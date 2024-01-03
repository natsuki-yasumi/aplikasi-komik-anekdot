import { GuruEntity } from "../entities/guru.entity.js";
import { SiswaEntity } from "../entities/siswa.entity.js"

export const GuruService = {
    createOne: async (data) =>{
        const nama = data.nama;
        const nip = data.nip;
        const password = data.password;
        const alamat = data.alamat;
        const ttl = data.ttl;

        await GuruEntity.create({
            nama, nip, password, alamat, ttl
        })
    },
    findOne : (nip)=>{
       return SiswaEntity.findOne({where: {nip: nip}})

    }
}
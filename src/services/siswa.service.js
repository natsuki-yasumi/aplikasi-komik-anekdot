import { SiswaEntity } from "../entities/siswa.entity"

export const SiswaService = {
    findAll : ()=>{
       return SiswaEntity.findAll()

    }
}
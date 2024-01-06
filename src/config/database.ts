import { DataSource } from "typeorm";
import { Guru } from "../Entity/guru.entity.js";
import { Siswa } from "../Entity/siswa.entity.js";
import { Kelas } from "../Entity/kelas.entity.js";
import { Tugas } from "../Entity/tugas.entity.js";

export const AppDataSource = new DataSource({
    type: "mysql",
    host:"localhost",
    port: 3306,
    username: "root",
    password: "feri123",
    database: "db_app_anekdot",
    entities: [Guru,Siswa,Kelas,Tugas],
    synchronize: true
})

export function StartConnection(){
    
    AppDataSource.initialize()
    .then(()=>{
        console.log("Database berhasil terhubung")
    })
    .catch((err)=>{
        console.log("Teradi error : " + err)
    })
    
}
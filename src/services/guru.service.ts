import { AppDataSource } from "../config/database.js";
import { CreateGuruDTO } from "../dto/Guru/CreateGuru.DTO.js";

export class GuruService {
    
    public async CreateGuru(GuruRepo: CreateGuruDTO){
        const guru = await AppDataSource
        .createQueryBuilder()
        .insert()
        .into('Guru')
        .values(GuruRepo).execute();

        return guru
    }
}
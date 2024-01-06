import { Request } from "express"

export interface CreateGuruDTO extends Request {

    nama: string
    nip: number
    password: string
    alamat: string
    ttl: Date

}
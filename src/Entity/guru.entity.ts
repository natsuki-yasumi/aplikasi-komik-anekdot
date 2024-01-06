import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Kelas } from "./kelas.entity.js";

@Entity()
export class Guru {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar')
    nama: string

    @Column('int')
    nip: number

    @Column('varchar')
    password: string

    @Column('varchar')
    alamat: string

    @Column('date')
    ttl: Date

    @Column('varchar',{
        nullable: true
    })
    image: string

    @OneToMany(()=> Kelas, (kelas)=> kelas.guru)
    kelas: Relation<Kelas>[];
}
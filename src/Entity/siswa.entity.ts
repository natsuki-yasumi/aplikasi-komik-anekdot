import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, Relation } from "typeorm";
import { Kelas } from "./kelas.entity.js";

@Entity()
export class Siswa {
    @PrimaryColumn('varchar')
    id: number

    @Column('varchar')
    nama: string

    @Column('int')
    nis: number

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

    @OneToOne(()=> Kelas, (kelas)=> kelas.id)
    @JoinColumn()
    kelas: Relation<Kelas>
}
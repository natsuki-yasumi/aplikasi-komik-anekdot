import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, Relation } from "typeorm";
import { Kelas } from "./kelas.entity.js";
import { Siswa } from "./siswa.entity.js";

@Entity()
export class Tugas {
    @PrimaryColumn('varchar')
    id: number

    @Column('varchar')
    nama: string

    @OneToOne(()=> Kelas, (kelas)=> kelas.id)
    @JoinColumn()
    kelas: Kelas

    @OneToMany(()=> Siswa, (siswa)=> siswa.id)
    @JoinColumn()
    siswa: Relation<Siswa>[];

    @Column('int')
    nilai: number

    @Column('varchar')
    masukan: string

    @Column('date')
    batas_pengumpulan: Date

    @Column('bool')
    status: boolean

    @Column('date')
    created_at: Date
}
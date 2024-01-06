import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, Relation } from "typeorm";
import { Guru } from "./guru.entity.js";

@Entity()
export class Kelas {
    @PrimaryColumn('varchar')
    id: number

    @Column('varchar')
    kelas: string

    @OneToOne(()=> Guru, (guru)=> guru.id)
    @JoinColumn()
    guru: Relation<Guru>;
}
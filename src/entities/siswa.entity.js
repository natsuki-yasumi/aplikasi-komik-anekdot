import DataTypes from 'sequelize'
import { db } from "../database/connection.js";

export const SiswaEntity = db.define('Siswa',{
    nama:{
        type: DataTypes.STRING,
        allowNull: false
    },
    nis: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    alamat: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ttl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    foto_profile: {
        type: DataTypes.STRING,
        allowNull: true
    },
    id_kelas: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

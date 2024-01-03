import DataTypes from 'sequelize'
import { db } from "../database/connection.js";

export const GuruEntity = db.define('Guru',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama:{
        type: DataTypes.STRING,
        allowNull: false
    },
    nip: {
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
        allowNull: false
    },
    ttl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    foto_profile: {
        type: DataTypes.STRING,
        allowNull: true
    },
})

await GuruEntity.sync({alter: true});
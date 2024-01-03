import DataTypes from 'sequelize'
import { db } from "../database/connection.js";
import { GuruEntity } from './guru.entity.js';

export const KelasEntity = db.define('Kelas',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    kelas:{
        type: DataTypes.STRING,
        allowNull: false
    },
    id_guru: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

GuruEntity.hasMany(KelasEntity,{
    foreignKey: 'guru_id'
});
KelasEntity.belongsTo(GuruEntity)

await KelasEntity.sync({alter: true});
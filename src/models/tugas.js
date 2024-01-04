'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tugas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tugas.init({
    name: DataTypes.STRING,
    id_siswa: DataTypes.INTEGER,
    id_kelas: DataTypes.INTEGER,
    nilai: DataTypes.INTEGER,
    masukan: DataTypes.STRING,
    batas_pengumpulan: DataTypes.DATE,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Tugas',
  });

  Tugas.associate = models =>{
    Tugas.hasMany(models.Siswa)
    Tugas.belongsTo(models.Kelas)
  }

  return Tugas;
};
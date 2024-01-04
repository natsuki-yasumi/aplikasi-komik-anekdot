'use strict';
const {
  Model
} = require('sequelize');
const siswa = require('./siswa');
module.exports = (sequelize, DataTypes) => {
   class Kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kelas.init({
    kelas: DataTypes.STRING,
    id_guru: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Kelas',
  });

  Kelas.associate = models =>{
    Kelas.hasMany(models.Siswa)
    Kelas.belongsTo(models.Guru)
  }

  return Kelas;
};
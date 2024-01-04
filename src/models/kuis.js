'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kuis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kuis.init({
    soal: DataTypes.STRING,
    id_siswa: DataTypes.INTEGER,
    nilai: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Kuis',
  });

  Kuis.associate = models =>{
    Kuis.hasMany(models.siswa)
  }

  return Kuis;
};
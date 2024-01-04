'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guru extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Guru.init({
    nama: DataTypes.STRING,
    nip: DataTypes.INTEGER,
    password: DataTypes.STRING,
    alamat: DataTypes.STRING,
    ttl: DataTypes.DATE,
    foto_profile: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Guru',
  });

  Guru.associate = models =>{
    Guru.hasMany(models.Kelas)
  }

  return Guru;
};
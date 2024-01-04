'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tugas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      id_siswa: {
        type: Sequelize.INTEGER,
        refrences: {
          model: 'Siswa',
          key: 'id'
        }
      },
      id_kelas: {
        type: Sequelize.INTEGER,
        refrences: {
          model: 'Kelas',
          key: 'id'
        }
      },
      nilai: {
        type: Sequelize.INTEGER
      },
      masukan: {
        type: Sequelize.STRING
      },
      batas_pengumpulan: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tugas');
  }
};
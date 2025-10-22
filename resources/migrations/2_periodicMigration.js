/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { BaseModelFields } = require('../baseModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('periodics', {
      ...BaseModelFields,
      periodic_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      periodic_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      periodic_category: {
        type: DataTypes.ENUM(
          'TINGGI_TANAMAN',
          'JUMLAH_DAUN',
          'DIAMETER_BATANG',
          'SPAD',
          'UMUR_BERBUNGA',
          'PANJANG_BUNGA_JANTAN',
          'PANJANG_DAUN',
          'LEBAR_DAUN'
        ),
        allowNull: false
      },
      periodic_data: {
        type: DataTypes.JSON,
        allowNull: false
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('periodics')
  }
}

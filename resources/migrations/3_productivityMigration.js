/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { BaseModelFields } = require('../baseModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('productivities', {
      ...BaseModelFields,
      productivity_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      productivity_data: {
        type: DataTypes.JSON,
        allowNull: false
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('productivities')
  }
}

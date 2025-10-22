/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { BaseModelFields } = require('../baseModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('destructives', {
      ...BaseModelFields,
      destructive_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      destructive_data: {
        type: DataTypes.JSON,
        allowNull: false
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('destructives')
  }
}

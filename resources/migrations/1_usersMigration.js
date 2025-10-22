/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { BaseModelFields } = require('../baseModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('users', {
      ...BaseModelFields,
      user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      user_password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      user_role: {
        type: DataTypes.ENUM('admin', 'superAdmin', 'user'),
        allowNull: false,
        defaultValue: 'user'
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('users')
  }
}

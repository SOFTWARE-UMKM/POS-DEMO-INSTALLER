/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

/** @type {import('sequelize-cli').Seeder} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        user_name: 'Pegawai 1',
        user_password: '4f783ae3ae3b13b3208df00d11b356d5ac21dd6e',
        user_whatsapp_number: '6281234567891',
        user_role: 'user',
        user_device_id: 'RP1A.200720.012.A105GDXS8CVL5'
      },
      {
        user_name: 'Pegawai 2',
        user_password: 'cf7c906bfbb48e72288fc016bac0e6ed58b0dc2a',
        user_whatsapp_number: '6281234567892',
        user_role: 'user',
        user_device_id: 'device_user_002'
      },
      {
        user_name: 'Admin Toko',
        user_password: 'cf7c906bfbb48e72288fc016bac0e6ed58b0dc2a',
        user_whatsapp_number: '6281234567893',
        user_role: 'admin',
        user_device_id: '_'
      },
      {
        user_name: 'Super Admin',
        user_password: 'cf7c906bfbb48e72288fc016bac0e6ed58b0dc2a',
        user_whatsapp_number: '6281234567894',
        user_role: 'superAdmin',
        user_device_id: '_'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const sequelize_1 = require("sequelize");
const BaseModelFields_1 = require("../entities/BaseModelFields");
const database_1 = require("../configs/database");
exports.ProductModel = database_1.initializeDB.define('Product', {
    ...BaseModelFields_1.BaseModelFields,
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    code: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    barcode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'products',
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
});

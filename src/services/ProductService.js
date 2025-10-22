"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const sequelize_1 = require("sequelize");
const response_1 = require("../utilities/response");
const pagination_1 = require("../utilities/pagination");
const ProductModel_1 = require("../models/ProductModel");
class ProductService {
    static async create(payload) {
        const result = await ProductModel_1.ProductModel.create(payload);
        return result;
    }
    static async getByDate(date) {
        const start = new Date(`${date}T00:00:00.000Z`);
        const end = new Date(`${date}T23:59:59.999Z`);
        const data = await ProductModel_1.ProductModel.findAll({
            where: {
                createdAt: {
                    [sequelize_1.Op.gte]: start,
                    [sequelize_1.Op.lte]: end
                }
            }
        });
        return data;
    }
    static async getAll({ pagination, queryPage, querySize, search, barcode }) {
        const page = new pagination_1.Pagination(Number(queryPage) || 0, Number(querySize) || 10);
        const whereCondition = {
            deleted: 0
        };
        if (search) {
            whereCondition.name = { [sequelize_1.Op.like]: `%${search}%` };
        }
        console.log('barcode:');
        console.log(barcode);
        console.log(barcode === undefined);
        console.log(barcode === 'undefined');
        if (Boolean(barcode)) {
            whereCondition.barcode = barcode;
        }
        console.log('whereCondition', whereCondition);
        const result = await ProductModel_1.ProductModel.findAndCountAll({
            where: whereCondition,
            order: [['id', 'desc']],
            ...(pagination === true && {
                limit: page.limit,
                offset: page.offset
            })
        });
        const response = response_1.ResponseData.success({ data: result });
        response.data = page.formatData(result);
        return response;
    }
}
exports.ProductService = ProductService;

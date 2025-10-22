"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllProduct = void 0;
const http_status_codes_1 = require("http-status-codes");
const ProductService_1 = require("../../services/ProductService");
const getQueryString_1 = require("../../services/helper/getQueryString");
const findAllProduct = async (req, res, next) => {
    const queryPage = (0, getQueryString_1.getQueryString)(req.query.queryPage, '0');
    const querySize = (0, getQueryString_1.getQueryString)(req.query.querySize, '10');
    const search = (0, getQueryString_1.getQueryString)(req.query.search);
    const barcode = (0, getQueryString_1.getQueryString)(req.query.barcode);
    try {
        const result = await ProductService_1.ProductService.getAll({
            pagination: req.query.pagination === 'true',
            queryPage,
            querySize,
            search,
            barcode
        });
        return res.status(http_status_codes_1.StatusCodes.OK).json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.findAllProduct = findAllProduct;

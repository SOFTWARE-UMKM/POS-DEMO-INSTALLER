"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = require("../controllers/products");
const ProductRoute = (0, express_1.Router)();
ProductRoute.get('/', products_1.ProductController.findAllProduct);
exports.default = ProductRoute;

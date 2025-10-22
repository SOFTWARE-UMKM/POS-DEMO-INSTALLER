"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppCheck_1 = __importDefault(require("./AppCheck"));
const Auth_1 = __importDefault(require("./Auth"));
const Product_1 = __importDefault(require("./Product"));
const RoutesRegistry = {
    AppCheckRoutes: AppCheck_1.default,
    AuthRoutes: Auth_1.default,
    ProductRoute: Product_1.default
};
exports.default = RoutesRegistry;

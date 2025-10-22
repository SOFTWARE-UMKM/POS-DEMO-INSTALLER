"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appInfo = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const appInfo = async (req, res, next) => {
    try {
        const data = {
            status: http_status_codes_1.StatusCodes.OK,
            isMaintenance: false,
            maintenanceMessage: ''
        };
        const response = response_1.ResponseData.success({ data });
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        next(error);
    }
};
exports.appInfo = appInfo;

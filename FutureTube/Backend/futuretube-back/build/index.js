"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./presentation/index"));
const dotenv_1 = __importDefault(require("dotenv"));
const lbn_lambda_express_1 = require("lbn-lambda-express");
dotenv_1.default.config();
const server = index_1.default.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
exports.handler = lbn_lambda_express_1.createLambdaHandler(index_1.default);

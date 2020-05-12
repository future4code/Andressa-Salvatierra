"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const createUser_1 = require("../../../business/usecase/user/createUser");
const userDB_1 = require("../../../data/userDB");
const jwtAuthorizer_1 = require("../../../services/jwtAuthorizer");
const bcryptService_1 = require("../../../services/bcryptService");
exports.createUserEndpoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const uc = new createUser_1.CreateUserUC(new userDB_1.UserDB(), new jwtAuthorizer_1.JwtAuthorizer(), new bcryptService_1.BcryptService());
        const result = yield uc.execute({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            birthDate: req.body.birthDate,
            picture: req.body.picture
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(err.status || 400).send({
            errMessage: err.message
        });
    }
});

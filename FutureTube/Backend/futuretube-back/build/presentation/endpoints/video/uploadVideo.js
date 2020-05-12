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
const uploadVideo_1 = require("../../../business/usecase/video/uploadVideo");
const videoDB_1 = require("../../../data/videoDB");
const jwtAuthorizer_1 = require("../../../services/jwtAuthorizer");
exports.uploadVideoEndpoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const uc = new uploadVideo_1.UploadVideoUC(new videoDB_1.VideoDB(), new jwtAuthorizer_1.JwtAuthorizer());
        const result = yield uc.execute({
            token: req.headers.Authorization,
            url: req.body.url,
            title: req.body.title,
            description: req.body.description
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(err.status || 400).send({
            errorMessage: err.message
        });
    }
});

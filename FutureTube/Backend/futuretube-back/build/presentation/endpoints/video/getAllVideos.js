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
const getAllVideos_1 = require("../../../business/usecase/video/getAllVideos");
const videoDB_1 = require("../../../data/videoDB");
exports.GetAllVideosEndpoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const uc = new getAllVideos_1.GetAllVideosUC(new videoDB_1.VideoDB());
        const result = yield uc.execute(Number(req.query.page));
        if (result === []) {
            throw new Error("No videos to show");
        }
        res.status(200).send({
            result
        });
    }
    catch (err) {
        res.status(err.status || 400).send({
            errorMessage: err.message
        });
    }
});

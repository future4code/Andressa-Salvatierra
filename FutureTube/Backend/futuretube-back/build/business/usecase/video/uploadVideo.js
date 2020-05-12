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
const uuid_1 = require("uuid");
const video_1 = require("../../entities/video");
class UploadVideoUC {
    constructor(db, authenticationGateway) {
        this.db = db;
        this.authenticationGateway = authenticationGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!input.token) {
                throw new Error("Missing authorization token, please log in to continue");
            }
            if (!input.url) {
                throw new Error("Please provide a video URL");
            }
            if (!input.title) {
                throw new Error("Please provide a video title");
            }
            const id = uuid_1.v4();
            const userIdFromToken = this.authenticationGateway.getUserInfoFromToken(input.token);
            const userId = userIdFromToken.userId;
            const video = new video_1.Video(id, input.url, input.title, input.description, userId);
            yield this.db.uploadVideo(video);
            return {
                message: "Video uploaded successfully"
            };
        });
    }
}
exports.UploadVideoUC = UploadVideoUC;

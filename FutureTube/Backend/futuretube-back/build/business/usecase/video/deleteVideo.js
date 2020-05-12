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
class DeleteVideoUC {
    constructor(db, authenticationGateway) {
        this.db = db;
        this.authenticationGateway = authenticationGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!input.token) {
                throw new Error("Missing authorization token, please log in to continue");
            }
            const usersInfo = this.authenticationGateway.getUserInfoFromToken(input.token);
            const id = usersInfo.userId;
            if (!id) {
                throw new Error("Please log in to continue");
            }
            if (!input.videoId || input.videoId.length !== 36) {
                throw new Error("Please select video to delete");
            }
            yield this.db.deleteVideo(input.videoId);
            return {
                message: "Video deleted succesfully"
            };
        });
    }
}
exports.DeleteVideoUC = DeleteVideoUC;

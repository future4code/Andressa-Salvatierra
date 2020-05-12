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
class GetVideoByUserIdUC {
    constructor(db, authenticationGateway) {
        this.db = db;
        this.authenticationGateway = authenticationGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            let id;
            if (input.userId) {
                id = input.userId;
            }
            else if (input.token) {
                const usersInfo = this.authenticationGateway.getUserInfoFromToken(input.token);
                id = usersInfo.userId;
            }
            else {
                throw new Error("User not found");
            }
            const videos = yield this.db.getVideoByUserId(id);
            if (!videos) {
                throw new Error("Could not get videos");
            }
            return videos;
        });
    }
}
exports.GetVideoByUserIdUC = GetVideoByUserIdUC;

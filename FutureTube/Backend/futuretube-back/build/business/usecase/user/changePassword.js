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
class ChangePasswordUC {
    constructor(db, authenticationGateway, cryptographyGateway) {
        this.db = db;
        this.authenticationGateway = authenticationGateway;
        this.cryptographyGateway = cryptographyGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!input.token) {
                throw new Error("Missing authorization token, please log in to continue");
            }
            const usersInfo = this.authenticationGateway.getUserInfoFromToken(input.token);
            const id = usersInfo.userId;
            const user = yield this.db.getUserById(id);
            if (!user) {
                throw new Error("User not found");
            }
            if (user.getEmail() !== input.email) {
                throw new Error("Incorrect information");
            }
            const isPasswordCorrect = yield this.cryptographyGateway.compare(input.oldPassword, user.getPassword());
            if (!isPasswordCorrect) {
                throw new Error("Incorrect information");
            }
            const pass = yield this.cryptographyGateway.encrypt(input.newPassword);
            yield this.db.updatePassword(user.getId(), pass);
            const token = this.authenticationGateway.generateToken({
                userId: user.getId()
            });
            return {
                token
            };
        });
    }
}
exports.ChangePasswordUC = ChangePasswordUC;

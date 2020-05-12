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
class LoginUserUC {
    constructor(db, authenticationGateway, cryptographyGateway) {
        this.db = db;
        this.authenticationGateway = authenticationGateway;
        this.cryptographyGateway = cryptographyGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.db.getUserByEmail(input.email);
            if (!user) {
                throw new Error("User not found");
            }
            if (!(yield this.cryptographyGateway.compare(input.password, user.getPassword()))) {
                throw new Error("Wrong email or password");
            }
            const token = this.authenticationGateway.generateToken({
                userId: user.getId()
            });
            return {
                message: "User logged in succesfully",
                token,
                name: user.getName(),
                email: user.getEmail(),
                picture: user.getPicture()
            };
        });
    }
}
exports.LoginUserUC = LoginUserUC;

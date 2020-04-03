import { UserGateway } from "../../gateways/userGateway"
import * as bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"

export class LoginUC {
    constructor(private userGateway: UserGateway) { }

    public async execute(input: LoginUCInput) {

        const user = await this.userGateway.login(input.email)

        if (!user) {
            throw new Error("Email incorreto")
        }

        const isPaswordCorrect = await bcrypt.compare(input.password, user.getPassword())

        if (!isPaswordCorrect) {
            throw new Error("Senha incorreta")
        }

        const token = jwt.sign({userId: user.getId(), email: user.getEmail()}, "lalala", {
            expiresIn: "1h"
        })

        return token 
    }

}
export interface LoginUCInput {
    email: string
    password: string
}

import { v4 } from "uuid"
import { User } from "../../entities/user";
import * as bcrypt from "bcrypt"
import { UserGateway } from "../../gateways/userGateway";
import * as jwt from "jsonwebtoken"

export class CreateUserUC {
    constructor(private userGateway: UserGateway) { }
  
    public async execute(input: CreateUserUCInput): Promise<CreateUserUCOutput> {
  
      try {
        const id = v4();
        const SALT_ROUNDS = 10
        const hashPassword = await bcrypt.hash(input.password, SALT_ROUNDS)
        const user = new User(
          id,
          input.email,
          input.name,
          hashPassword
        )
  
        await this.userGateway.createUser(user)
        const token = jwt.sign({userId: user.getId(), email: user.getEmail()}, "lalala", {
          expiresIn: "1h"
      })

      return {
        message: "Usuário criado com sucesso",
        token
      }

      } catch (e) {
        console.log(e)
        throw new Error("Houve um problema em criar o usuario");
        
      }
    }
  
  }
  export interface CreateUserUCInput {
    email: string,
    name: string,
    password: string
  }
  
  export interface CreateUserUCOutput {
    message: string,
    token: string
  }
  
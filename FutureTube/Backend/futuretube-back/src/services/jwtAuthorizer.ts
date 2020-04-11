import {
  AuthenticationGateway,
  UserInfoForToken
} from "../business/gateways/authenticationGateway";
import * as jwt from "jsonwebtoken";

export class JwtAuthorizer implements AuthenticationGateway {
  private SECRET_KEY = "BATATINHA";
  private expiresIn = "10h";

  public generateToken(input: UserInfoForToken): string {
    const token = jwt.sign(
      {
        userId: input.userId
      },
      this.SECRET_KEY,
      {
        expiresIn: this.expiresIn
      }
    );

    return token;
  }

  public getUserInfoFromToken(token: string): UserInfoForToken {
    const result = jwt.verify(token, this.SECRET_KEY) as UserInfoForToken; 
    return {
      userId: result.userId
    };
  }
}

export interface AuthenticationGateway {
  generateToken(input: UserInfoForToken): string;
  getUserInfoFromToken(token: string): UserInfoForToken;
}

export interface UserInfoForToken {
  userId: string;
}

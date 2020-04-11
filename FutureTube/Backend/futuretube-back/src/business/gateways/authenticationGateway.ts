

export interface AuthenticationGateway {
  generateToken(input: UsersInfoForToken): string;
  // getUsersInfoFromToken(token: string): UsersInfoForToken;
}

// userId, type

export interface UsersInfoForToken {
  userId: string;
}

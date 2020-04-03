import { UserGateway } from "../../gateways/userGateway";

export class AddFriendUC {
  constructor(private usergateway: UserGateway) {}

  async execute(input: AddFriendUCInput) {
    await this.usergateway.addFriend(
      input.userId,
      input.friendId
    );
  }
}

export interface AddFriendUCInput {
  userId: string;
  friendId: string;
}

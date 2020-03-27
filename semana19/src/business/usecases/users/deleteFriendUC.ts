import { UserGateway } from "../../gateways/userGateway";

export class DeleteFriendUC {
  constructor(private usergateway: UserGateway) {}

  async execute(input: DeleteFriendUCInput) {
    await this.usergateway.deleteFriend(
      input.userId,
      input.friendId
    );
  }
}

export interface DeleteFriendUCInput {
  userId: string;
  friendId: string;
}

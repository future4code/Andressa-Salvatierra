import { BaseDB } from "./baseDB";
import { User } from "../business/entities/user";
import { UserGateway } from "../business/gateways/userGateway";

export class UserDB extends BaseDB implements UserGateway {
    private userTableName = "futureBookUsers"
    private relationTableName = "futureBookFriendsList"

    async createUser(user: User) {
        await this.connection
            .insert({
                id: user.getId(),
                email: user.getEmail(),
                name: user.getName(),
                password: user.getPassword()
            })
            .into(this.userTableName);
    }

    async login(email: string): Promise<User | undefined> {
        const user = await this.connection
            .select("*")
            .from(this.userTableName)
            .where({ email });

        if (!user[0]) {
            return undefined;
        }

        return new User(user[0].id, user[0].email, user[0].name, user[0].password);
    }

    async addFriend(userId: string, friendId: string): Promise<void> {
        await this.connection.raw(`INSERT INTO ${this.relationTableName} VALUES 
        ("${userId}", "${friendId}"),
        ("${friendId}","${userId}")`
        );
    }
    async deleteFriend(userId: string, friendId: string): Promise<void> {
        await this.connection.raw(`DELETE FROM ${this.relationTableName} WHERE 
        (userID = "${userId}" AND friendID = "${friendId}") OR 
        (friendId = "${userId}" AND userId = "${friendId}")
        `);
    } 
}

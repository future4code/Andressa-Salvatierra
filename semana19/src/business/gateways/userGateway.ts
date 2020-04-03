import { User } from "../entities/user";

export interface UserGateway {
    createUser(user:User): Promise<void>
    login(email: string): Promise<User | undefined>
    addFriend(userId: string, friendId: string): Promise<void>;
    deleteFriend(userId: string, friendId: string): Promise<void>;
}
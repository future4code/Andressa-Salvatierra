import { UserGateway } from "../business/gateways/userGateway";
import { User } from "../business/entities/user";
import { BaseDB } from "./baseDB";

export class UserDB extends BaseDB implements UserGateway  {

  private userTableName = "users_futuretube"

  public async createUser(user: User): Promise<void> {
    await this.connection.raw(`
    INSERT INTO ${this.userTableName} (id, name, email, password, birthDate, picture)
    VALUES(
      '${user.getId()}',
      '${user.getName()}',
      '${user.getEmail()}',
      '${user.getPassword()}',
      '${user.getBirthDate()}',
      '${user.getPicture()}'
    )
  `);
  }

  public async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.userTableName} WHERE email = '${email}'
    `);

    if (!result[0][0]) {
      return undefined;
    }

    return new User(
      result[0][0].id,
      result[0][0].name,
      result[0][0].email,
      result[0][0].password,
      result[0][0].birthDate,
      result[0][0].picture
    );
  }


  // public async getAllStudents(): Promise<User[]> {
  //   const res = await this.connection.raw(`
  //     SELECT * FROM ${this.usersTable} WHERE type = "Students"
  //   `);

  //   return res[0].map((r: any) => {
  //     return new User(
  //       r.id,
  //       r.name,
  //       r.email,
  //       this.mapTypeToUserType(r.type),
  //       r.password
  //     );
  //   });
  // }

  // public async getUserById(id: string): Promise<User | undefined> {
  //   const result = await this.connection.raw(`
  //     SELECT * FROM ${this.usersTable} WHERE id = '${id}'
  //   `);

  //   if (!result[0][0]) {
  //     return undefined;
  //   }

  //   return new User(
  //     result[0][0].id,
  //     result[0][0].name,
  //     result[0][0].email,
  //     this.mapTypeToUserType(result[0][0].type),
  //     result[0][0].password
  //   );
  // }

  // public async updatePassword(
  //   userId: string,
  //   newPassword: string
  // ): Promise<void> {
  //   await this.connection.raw(`
  //     UPDATE ${this.usersTable}
  //     SET password = '${newPassword}'
  //     WHERE id = '${userId}'
  //   `);
  // }
}

import { UserGateway } from "../business/gateways/userGateway";
import { User } from "../business/entities/user";
import knex from "knex";

export class UserDatabase implements UserGateway {
  private connection = knex({
    client: "mysql",
    connection: {
      host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
      port: 3306,
      user: "teachers",
      password: "f443Bya!095dmmN",
      database: "professores"
    }
  });

  private usersTable = "USERS_AULA_PAGINACAO";


  public async createUser(user: User): Promise<void> {
    await this.connection.raw(`
    INSERT INTO ${this.usersTable} (id, name, email, type, password)
    VALUES(
      '${user.getId()}',
      '${user.getName()}',
      '${user.getEmail()}',
      '${user.getPassword()}'
    )
  `);
  }

  public async getAllStudents(): Promise<User[]> {
    const res = await this.connection.raw(`
      SELECT * FROM ${this.usersTable} WHERE type = "Students"
    `);

    return res[0].map((r: any) => {
      return new User(
        r.id,
        r.name,
        r.email,
        this.mapTypeToUserType(r.type),
        r.password
      );
    });
  }

  public async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.usersTable} WHERE email = '${email}'
    `);

    if (!result[0][0]) {
      return undefined;
    }

    return new User(
      result[0][0].id,
      result[0][0].name,
      result[0][0].email,
      this.mapTypeToUserType(result[0][0].type),
      result[0][0].password
    );
  }

  public async getUserById(id: string): Promise<User | undefined> {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.usersTable} WHERE id = '${id}'
    `);

    if (!result[0][0]) {
      return undefined;
    }

    return new User(
      result[0][0].id,
      result[0][0].name,
      result[0][0].email,
      this.mapTypeToUserType(result[0][0].type),
      result[0][0].password
    );
  }

  public async updatePassword(
    userId: string,
    newPassword: string
  ): Promise<void> {
    await this.connection.raw(`
      UPDATE ${this.usersTable}
      SET password = '${newPassword}'
      WHERE id = '${userId}'
    `);
  }
}

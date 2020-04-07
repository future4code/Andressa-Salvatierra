import knex from "knex";
require('dotenv').config()

export abstract class BaseDatabase {
  private connectionData = {
    host: "ec2-52-203-80-81.compute-1.amazonaws.com",
    port: 3306,
    user: "andressa",
    password: "@c3ssd@t@b@s3",
    database: "andressa_db"
  };

  protected connection = knex({
    client: "mysql",
    connection: this.connectionData
  });
}

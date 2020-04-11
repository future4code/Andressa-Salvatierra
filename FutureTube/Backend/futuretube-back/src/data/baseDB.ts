import knex from "knex";

export abstract class BaseDB {
  protected connection = knex({
    client: "mysql",
    connection: {
      host: "ec2-52-203-80-81.compute-1.amazonaws.com",
      port: 3306,
      user: "andressa",
      password: "@c3ssd@t@b@s3",
      database: "andressa_db"
    }
  });
}

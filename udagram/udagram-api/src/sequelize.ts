import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize(
  "postgres://postgres:postgres@database-1.c9vprnfr30qe.us-east-1.rds.amazonaws.com:5432/postgres"
);
// console.log("11111111111111111111", config)
// export const sequelize = new Sequelize({
//     username: config.username,
//     password: config.password,
//     database: config.database,
//     host: config.host,
  
//     dialect: "postgres",
//     storage: ":memory:",
//   });

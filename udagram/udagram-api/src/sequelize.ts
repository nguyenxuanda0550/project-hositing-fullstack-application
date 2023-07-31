import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize("postgres://postgres:Postgrespassword@database-2.c9vprnfr30qe.us-east-1.rds.amazonaws.com:5432/database-1");

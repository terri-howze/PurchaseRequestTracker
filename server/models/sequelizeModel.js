
import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(process.env.DB, process.env.DB_UNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mssql',
    port: 1433,
    dialectOptions: {
        options: { "requestTimeout": 300000 }
    }

});

export default sequelize
import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(process.env.DB, process.env.DB_UNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mssql',
    port: 1433,
    dialectOptions: {
      options: { "requestTimeout": 300000 }
    }
});

const fileStreamModel = sequelize.define('fileTable', {
    fileName: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    fileStream:{
        type: DataTypes.BLOB('MAX'),
        allowNull: false
    },
    prNumber:{
        type: DataTypes.CHAR,
        allowNull: false
    }
},
{
  freezeTableName: true
})

export default fileStreamModel
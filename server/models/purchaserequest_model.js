import mysql from 'mysql2/promise';
import sql from "mssql";
import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(process.env.DB, process.env.DB_UNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mssql',
  port: 1433,
  dialectOptions: {
    options: { "requestTimeout": 300000 }
  }

});
const addPurchaseRequest = sequelize.define('purchaseRequest', {
  prNumber: {
    type: DataTypes.CHAR,
    allowNull: false
  },
  dep_num: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cardType: {
    type: DataTypes.CHAR,
    allowNull: false
  },
  cardNumber: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  datePurchaseRequest: {
    type: DataTypes.DATE,
    allowNull: false
  },
  purchaseRequestAmount: {
    type: DataTypes.DECIMAL(19, 4),
    allowNull: false
  },
  poNumber: {
    type: DataTypes.CHAR,
    allowNull: true
  }, chrisApproval: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0
  },
  jasonApproval: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0
  },
  tonyaApproval: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0
  }
}, {
  freezeTableName: true
})

export default addPurchaseRequest;
import 'dotenv/config'
import { Sequelize, DataTypes, where } from "sequelize";
import addPurchaseRequest from "../models/purchaserequest_model.js";

const getPrsCount = async (req, res) => {
    const sequelize = new Sequelize(process.env.DB, process.env.DB_UNAME, process.env.DB_PASSWORD, {
      host: process.env.DB_HOST,
      dialect: 'mssql',
      port: 1433,
      dialectOptions: {
        options: { "requestTimeout": 300000 }
      }
    });
    try {
      await sequelize.authenticate();
      await sequelize.sync();
      const results = await addPurchaseRequest.findAll({
        where: {
          date: req.query.data
        },
  
      })
      return results
    } catch (err) {
      console.log(err)
    }
  
  }
import 'dotenv/config'
import {dayjs} from 'dayjs'
import { Sequelize, DataTypes, where } from "sequelize";
import addPurchaseRequest from "../models/purchaserequest_model.js";
import {Op} from "sequelize";

const purchaseOrderGenerator = async (req) => {
  const sequelize = new Sequelize(process.env.DB, process.env.DB_UNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mssql',
    port: 1433,
    dialectOptions: {
      options: { "requestTimeout": 300000 }
    }
  
  });
  const year = dayjs(req.body.datePurchaseRequest).format('YYYY')
  console.log(year)
  const daymonth = dayjs(req.body.datePurchaseRequest).format('MMDD')
  console.log(daymonth)

  try {
    await sequelize.authenticate();
    await sequelize.sync();
    const results = await addPurchaseRequest.findAll({
      where: {
        dep_num: req.body.department,
        datePurchaseRequest: req.body.datePurchaseRequest,
        poNumber:{
            [Op.not]: null
        }
      }
    })
    console.log(results.length)
    const resultslength = results.length + 1
    if (req.body.chrisApproval && req.body.jasonApproval && req.body.tonyaApproval == true) {
      let purchaseorderNumber = year + "." + daymonth + "." + req.body.department + "." + resultslength
      return purchaseorderNumber
    }


  } catch (err) {

  }

}

export default purchaseOrderGenerator
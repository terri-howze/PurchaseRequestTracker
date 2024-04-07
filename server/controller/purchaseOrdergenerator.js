import axios from "axios"
import 'dotenv/config'
import dayjs from 'dayjs'
import { Sequelize, DataTypes, where } from "sequelize";
import addPurchaseRequest from "../models/purchaserequest_model.js";
import sequelize from "../models/sequelizeModel.js";


const purchaseOrderGenerator = async (req) => {
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
        datePurchaseRequest: req.body.datePurchaseRequest
      }
    })
    console.log(results.length)
    console
    const resultslength = results.length
    if (req.body.chrisApproval && req.body.jasonApproval && req.body.tonyaApproval == true) {
      let purchaseorderNumber = year + "." + daymonth + "." + req.body.department + "." + resultslength
      console.log(purchaseorderNumber)
      return purchaseorderNumber
    }


  } catch (err) {

  }

}

export default purchaseOrderGenerator
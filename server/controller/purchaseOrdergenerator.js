import axios from "axios"
import 'dotenv/config'
import dayjs from 'dayjs'
import mysql from 'mysql2/promise';
import sql from "mssql";
import { Sequelize, DataTypes, where } from "sequelize";
import {addPurchaseRequest, sequelize} from "../models/purchaserequest_model.js";


const purchaseOrderGenerator = async (req) =>{
    const year = dayjs(req.body.datePurchaseRequest).format('YYYY')
    const daymonth = dayjs(req.body.datePurchaseRequest).format('MMDD')
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        const results = await addPurchaseRequest.findAll({
            where: {
              dep_num: req.query.department,
              datePurchaseRequest: req.body.datePurchaseRequest
            }
          })
          const resultslength = results.data.length
        if(results.chrisApproval && results.jasonApproval && results.tonyaApproval === true){
            const purchaseorderNumber = year + "." + daymonth + req.body.department + "." + resultslength
        }
        
    }catch(err){

    }

}

export default purchaseOrderGenerator
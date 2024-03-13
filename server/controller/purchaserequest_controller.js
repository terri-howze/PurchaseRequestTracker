import axios from "axios"
import 'dotenv/config'
import dayjs from 'dayjs'
import mysql from 'mysql2/promise';
import sql from "mssql";
import { Sequelize, DataTypes } from "sequelize";
import addPurchaseRequest from "../models/purchaserequest_model.js";




const purchaseRequest = async(req,res) => {
    console.log("made it to controller")
    //const dayofMonth = dayjs(req.body.datePurchaseRequest).format('MMDD')
    //const prString = (req.body.datePurchaseRequest.$y + "." + department + "." + dayofMonth)
    
        // const config = {
        //     user: process.env.DB_UNAME,
        //     password: process.env.DB_PASSWORD,
        //     server: process.env.DB_HOST,
        //     port: 1433,
        //     database: process.env.DB,
        //     dialectOptions: {
        //         options: { "requestTimeout": 300000 }
        //       },
        //     pool: {

        //         max: 10,
            
        //         min: 0,
            
        //         idleTimeoutMillis: 30000
            
        //       },
            
        //       options: {
            
        //         encrypt: true, // for azure
            
        //         trustServerCertificate: false // change to true for local dev / self-signed certs
            
        //       },
        //     authentication: {
        //         type: 'default'
        //     }
        // }

        const sequelize = new Sequelize(process.env.DB, process.env.DB_UNAME, process.env.DB_PASSWORD, {
          host: process.env.DB_HOST,
          dialect: 'mssql',
          port: 1433,
          dialectOptions: {
            options: { "requestTimeout": 300000 }
          }

        });
        const purchaseRequest = sequelize.define('purchaseRequest',{
          prNumber:{
          type: DataTypes.CHAR,
          allowNull: false
          },
          dep_num:{
            type: DataTypes.INTEGER,
            allowNull: false
          },
          cardType:{
            type: DataTypes.CHAR,
            allowNull: false
          },
          cardNumber:{
            type: DataTypes.INTEGER,
            allowNull: false
          },
          datePurchaseRequest:{
            type: DataTypes.DATE,
            allowNull: false
          },
          purchaseRequestAmount:{
            type: DataTypes.DECIMAL(19,4),
            allowNull: false
          },
          poNumber:{
            type: DataTypes.CHAR,
            allowNull: true
          }
        },{
          freezeTableName: true
        })
        
        try{
          await sequelize.authenticate();
          console.log('Connection has been established successfully.');
          await sequelize.sync();
          const prrequest = await purchaseRequest.create({
            prNumber: req.body.prNumber,
            dep_num: req.body.department,
            cardType: req.body.cardType,
            cardNumber: req.body.cardNumber,
            datePurchaseRequest: req.body.datePurchaseRequest,
            purchaseRequestAmount: req.body.purchaseRequestAmount
          })
          console.log(req.body)
            
        }catch(err){
            console.log(err)
        }
     
        
        
        

}


const getDep20prs = async(req,res) =>{
  const sequelize = new Sequelize(process.env.DB, process.env.DB_UNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mssql',
    port: 1433,
    dialectOptions: {
      options: { "requestTimeout": 300000 }
    }
  });
  try{
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync();
    console.log(req.query.data)
     const results = await addPurchaseRequest.findAll({
      where:{
        dep_num: req.query.data
      },
      
    })
    const copyItems = [];
    for(let i = 0; i < results.length, i++;){
      copyItems.push(results[i])
    }
    results.forEach((results) =>{
      copyItems.push(results)
    })
    return copyItems
  }catch(err){
      console.log(err)
  }
}

export {purchaseRequest, getDep20prs}; 
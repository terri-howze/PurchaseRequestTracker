
import 'dotenv/config'
import { Sequelize, DataTypes, where } from "sequelize";
import addPurchaseRequest from "../models/purchaserequest_model.js";
import purchaseOrderGenerator from "./purchaseOrdergenerator.js";
// import { MsSqlDialect } from '@sequelize/mssql'
// import {Sequelize} from '@sequelize/core';




const purchaseRequest = async (req, res) => {
  console.log("made it to controller")

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
    console.log('Connection has been established successfully.');
    await sequelize.sync();
    await addPurchaseRequest.create({
      prNumber: req.body.prNumber,
      dep_num: req.body.department,
      cardType: req.body.cardType,
      cardNumber: req.body.cardNumber,
      datePurchaseRequest: req.body.datePurchaseRequest,
      purchaseRequestAmount: req.body.purchaseRequestAmount,
      chrisApproval: false,
      jasonApproval: false,
      tonyaApproval: false
    })

  } catch (err) {
    console.log(err)
  }





}



const getDep20prs = async (req, res) => {
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
        dep_num: req.query.data
      },

    })
    return results
  } catch (err) {
    console.log(err)
  }

}

const searchBar = async (req, res) => {
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
    console.log('Connection has been established successfully.');
    await sequelize.sync();
    const results = await addPurchaseRequest.findOne({
      where: {
        prNumber: req.query.data
      },

    })
    return results
  } catch (err) {
    console.log(err)
  }
}

const updatePurchaseRequest = async (req, res) => {
  console.log("made it to controller")

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
    console.log('Connection has been established successfully.');
    await sequelize.sync();

    await addPurchaseRequest.update({
      prNumber: req.body.prNumber,
      dep_num: req.body.department,
      cardType: req.body.cardType,
      poNumber: req.body.poNumber,
      cardNumber: req.body.cardNumber,
      datePurchaseRequest: req.body.datePurchaseRequest,
      purchaseRequestAmount: req.body.purchaseRequestAmount,
      chrisApproval: req.body.chrisApproval,
      jasonApproval: req.body.jasonApproval,
      tonyaApproval: req.body.tonyaApproval
    }, {
      where: {
        id: req.body.id
      }
    }
    )
    if (req.body.poNumber === null) {
      const purchaseOrder = await purchaseOrderGenerator(req)
      await addPurchaseRequest.update({
        poNumber: purchaseOrder
      }, {
        where: {
          id: req.body.id
        }
      }
      )
    }
    const results = await addPurchaseRequest.findOne({
      where: {
        prNumber: req.body.prNumber
      },

    })
    return results
  } catch (err) {
    console.log(err)
  }

}
const deletePurchaseRequest = async (req, res) => {
  console.log("made it to controller")

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
    console.log('Connection has been established successfully.');
    await sequelize.sync();
    await addPurchaseRequest.destroy({
      where: {
        id: req.query.data
      }
    }
    )

  } catch (err) {
    console.log(err)
  }
}


export { purchaseRequest, getDep20prs, searchBar, updatePurchaseRequest, deletePurchaseRequest }; 
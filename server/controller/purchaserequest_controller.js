
import 'dotenv/config'
import { Sequelize, DataTypes, where } from "sequelize";
import addPurchaseRequest from "../models/purchaserequest_model.js";
import purchaseOrderGenerator from "./purchaseOrdergenerator.js";
// import { MsSqlDialect } from '@sequelize/mssql'
// import {Sequelize} from '@sequelize/core';




const purchaseRequest = async (req, res) => {
  console.log("made to controller")
const sequelize = new Sequelize("postgresql://postgres.sgwtlwzxzxjcubtjauzd:a2C2WlK6RzMDMcmUXjAW@aws-0-us-east-2.pooler.supabase.com:5432/postgres");
    console.log("sequelize set up")

  try {
  await sequelize.sync(); // Avoid force: true
  console.log("Synced successfully");
} catch (err) {
  console.error("Sync error:", err);
}

try {
  await addPurchaseRequest.create({
    prNumber: req.body.prNumber,
    dep_num: req.body.department,
    cardType: req.body.cardType,
    cardNumber: req.body.cardNumber,
    datePurchaseRequest: req.body.datePurchaseRequest,
    purchaseRequestAmount: req.body.purchaseRequestAmount,
    admin1Approval: false,
    admin2Approval: false,
    admin3Approval: false
  });
  console.log("Create successful");
} catch (err) {
  console.error("Create error:", err);
}





}



const departmentPr = async (req, res) => {
  console.log("made to controller")
  // const sequelize = new Sequelize(process.env.DB, process.env.DB_UNAME, process.env.DB_PASSWORD, {
  //   host: process.env.DB_HOST,
  //   dialect: 'postgres',
  //   port: process.env.DB_PORT,
  //   dialectOptions: {
  //     options: {
  //       requestTimeout: 300000,
  //       encrypt: true,
  //     },

  //   }
  

  // });
const sequelize = new Sequelize(process.env.DB_CONNECT, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Supabase needs this
    }
  }
});
    console.log("sequelize set up")
  try {
    await sequelize.authenticate();
    console.log("Authenticated")
    await sequelize.sync({force: true});
    const results = await addPurchaseRequest.findAll({
      where: {
        dep_num: 20
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
    port: 5432,
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
    port: process.env.DB_PORT,
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
      admin1Approval: req.body.admin1Approval,
      admin2Approval: req.body.admin2Approval,
      admin3Approval: req.body.admin3Approval
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
    port: 5432,
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

const orderByDate = async (req) => {
  const sequelize = new Sequelize(process.env.DB, process.env.DB_UNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mssql',
    port: 5432,
    dialectOptions: {
      options: { "requestTimeout": 300000 }
    }

  });
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    if (req.body.orderDirection == 1) {
      const results = await addPurchaseRequest.findAll({
        where: {
          dep_num: req.body.departmentState
        },
        order: [
          ['datePurchaseRequest', 'DESC']
        ]

      })
      return results
    } else {
      const results = await addPurchaseRequest.findAll({
        where: {
          dep_num: req.body.departmentState
        },
        order: [
          ['datePurchaseRequest', 'ASC']
        ]

      })
      return results
    }

  } catch (err) {
    return err
  }
}

export { purchaseRequest, departmentPr, searchBar, updatePurchaseRequest, deletePurchaseRequest, orderByDate }; 
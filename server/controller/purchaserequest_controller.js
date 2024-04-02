import axios from "axios"
import 'dotenv/config'
import dayjs from 'dayjs'
import mysql from 'mysql2/promise';
import sql from "mssql";
import { Sequelize, DataTypes, where } from "sequelize";
import addPurchaseRequest from "../models/purchaserequest_model.js";




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
  const purchaseRequest = sequelize.define('purchaseRequest', {
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
    },
    chrisApproval:{
      type: DataTypes.BOOLEAN,
      allowNull: True
    },
    jasonApproval:{
      type: DataTypes.BOOLEAN,
      allowNull: True
    },
    tonyaApproval:{
      type: DataTypes.BOOLEAN,
      allowNull: True
    }
  }, {
    freezeTableName: true
  })

  try {
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
    console.log('Connection has been established successfully.');
    await sequelize.sync();
    console.log(req.query.data)
    const results = await addPurchaseRequest.findAll({
      where: {
        dep_num: req.query.data
      },

    })
    console.log(results)
    return results
  } catch (err) {
    console.log(err)
  }
  // const anime = await axios.get('https://jsonplaceholder.typicode.com/users')
  // return anime.data

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
    console.log(req.query.data)
    const results = await addPurchaseRequest.findOne({
      where: {
        prNumber: req.query.data
      },

    })
    console.log(results)
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
  const purchaseRequest = sequelize.define('purchaseRequest', {
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
    }
  }, {
    freezeTableName: true
  })

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync();
    await purchaseRequest.update({
      prNumber: req.body.prNumber,
      dep_num: req.body.department,
      cardType: req.body.cardType,
      cardNumber: req.body.cardNumber,
      datePurchaseRequest: req.body.datePurchaseRequest,
      purchaseRequestAmount: req.body.purchaseRequestAmount
    }, {
      where: {
        id: req.body.id
      }
    }
    )
    console.log(req.body)

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
  const purchaseRequest = sequelize.define('purchaseRequest', {
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
    }
  }, {
    freezeTableName: true
  })

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync();
    await purchaseRequest.destroy({
      where: {
        id: req.query.data
      }
    }
    )
    console.log(req.body)

  } catch (err) {
    console.log(err)
  }
}


export { purchaseRequest, getDep20prs, searchBar, updatePurchaseRequest, deletePurchaseRequest }; 
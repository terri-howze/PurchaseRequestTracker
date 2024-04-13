import { Sequelize, DataTypes } from "sequelize";

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

export default addPurchaseRequest
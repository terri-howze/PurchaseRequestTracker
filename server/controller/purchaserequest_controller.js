
import 'dotenv/config'
import purchaseOrderGenerator from "./purchaseOrdergenerator.js";
import supabase from '../clients/supabaseClient.js';



const purchaseRequest = async (req, res) => {
  console.log("made to controller")
  



try {
  const { data,error } = await supabase
  .from('purchaseRequests')
  .insert([
    {
    purchaseRequest: req.body.prNumber,
    department_num: req.body.department,
    cardType: req.body.cardType,
    cardNumber: req.body.cardNumber,
    purchaseRequestDate: req.body.datePurchaseRequest,
    purchaseRequestAmount: req.body.purchaseRequestAmount,
    admin1Approval: false,
    admin2Approval: false,
    admin3Approval: false
    }
  ])
  .select()
    
  

  console.log(error)
} catch (error) {
  console.error("Create error:", error);
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

  try {
   

    }
  
   catch (err) {

  }

}

const searchBar = async (req, res) => {
  // const sequelize = new Sequelize(process.env.DB, process.env.DB_UNAME, process.env.DB_PASSWORD, {
  //   host: process.env.DB_HOST,
  //   dialect: 'mssql',
  //   port: 5432,
  //   dialectOptions: {
  //     options: { "requestTimeout": 300000 }
  //   }
  // });
  // try {
  //   await sequelize.authenticate();
  //   console.log('Connection has been established successfully.');
  //   await sequelize.sync();
  //   const results = await addPurchaseRequest.findOne({
  //     where: {
  //       prNumber: req.query.data
  //     },

  //   })
  //   return results
  // } catch (err) {
  //   console.log(err)
  // }
}

const updatePurchaseRequest = async (req, res) => {
  // console.log("made it to controller")

  // const sequelize = new Sequelize(process.env.DB, process.env.DB_UNAME, process.env.DB_PASSWORD, {
  //   host: process.env.DB_HOST,
  //   dialect: 'mssql',
  //   port: process.env.DB_PORT,
  //   dialectOptions: {
  //     options: { "requestTimeout": 300000 }
  //   }

  // });
  // try {
  //   await sequelize.authenticate();
  //   console.log('Connection has been established successfully.');
  //   await sequelize.sync();

  //   await addPurchaseRequest.update({
  //     prNumber: req.body.prNumber,
  //     dep_num: req.body.department,
  //     cardType: req.body.cardType,
  //     poNumber: req.body.poNumber,
  //     cardNumber: req.body.cardNumber,
  //     datePurchaseRequest: req.body.datePurchaseRequest,
  //     purchaseRequestAmount: req.body.purchaseRequestAmount,
  //     admin1Approval: req.body.admin1Approval,
  //     admin2Approval: req.body.admin2Approval,
  //     admin3Approval: req.body.admin3Approval
  //   }, {
  //     where: {
  //       id: req.body.id
  //     }
  //   }
  //   )
  //   if (req.body.poNumber === null) {
  //     const purchaseOrder = await purchaseOrderGenerator(req)
  //     await addPurchaseRequest.update({
  //       poNumber: purchaseOrder
  //     }, {
  //       where: {
  //         id: req.body.id
  //       }
  //     }
  //     )
  //   }
  //   const results = await addPurchaseRequest.findOne({
  //     where: {
  //       prNumber: req.body.prNumber
  //     },

  //   })
  //   return results
  // } catch (err) {
  //   console.log(err)
  // }

}
const deletePurchaseRequest = async (req, res) => {
  // console.log("made it to controller")

  // const sequelize = new Sequelize(process.env.DB, process.env.DB_UNAME, process.env.DB_PASSWORD, {
  //   host: process.env.DB_HOST,
  //   dialect: 'mssql',
  //   port: 5432,
  //   dialectOptions: {
  //     options: { "requestTimeout": 300000 }
  //   }

  // });
  // try {
  //   await sequelize.authenticate();
  //   console.log('Connection has been established successfully.');
  //   await sequelize.sync();
  //   await addPurchaseRequest.destroy({
  //     where: {
  //       id: req.query.data
  //     }
  //   }
  //   )

  // } catch (err) {
  //   console.log(err)
  // }
}

const orderByDate = async (req) => {
  // const sequelize = new Sequelize(process.env.DB, process.env.DB_UNAME, process.env.DB_PASSWORD, {
  //   host: process.env.DB_HOST,
  //   dialect: 'mssql',
  //   port: 5432,
  //   dialectOptions: {
  //     options: { "requestTimeout": 300000 }
  //   }

  // });
  // try {
  //   await sequelize.authenticate();
  //   await sequelize.sync();
  //   if (req.body.orderDirection == 1) {
  //     const results = await addPurchaseRequest.findAll({
  //       where: {
  //         dep_num: req.body.departmentState
  //       },
  //       order: [
  //         ['datePurchaseRequest', 'DESC']
  //       ]

  //     })
  //     return results
  //   } else {
  //     const results = await addPurchaseRequest.findAll({
  //       where: {
  //         dep_num: req.body.departmentState
  //       },
  //       order: [
  //         ['datePurchaseRequest', 'ASC']
  //       ]

  //     })
  //     return results
  //   }

  // } catch (err) {
  //   return err
  // }
}

export { purchaseRequest, departmentPr, searchBar, updatePurchaseRequest, deletePurchaseRequest, orderByDate }; 
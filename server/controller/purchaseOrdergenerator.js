import 'dotenv/config'
import dayjs from 'dayjs'

const purchaseOrderGenerator = async (req) => {
  // const sequelize = new Sequelize(process.env.DB, process.env.DB_UNAME, process.env.DB_PASSWORD, {
  //   host: process.env.DB_HOST,
  //   dialect: 'mssql',
  //   port: 5432,
  //   dialectOptions: {
  //     options: { "requestTimeout": 300000 }
  //   }

  // });
  // const year = dayjs(req.body.datePurchaseRequest).format('YYYY')
  // console.log(year)
  // const daymonth = dayjs(req.body.datePurchaseRequest).format('MMDD')
  // console.log(daymonth)

  // try {
  //   await sequelize.authenticate();
  //   await sequelize.sync();
  //   const results = await addPurchaseRequest.findAll({
  //     where: {
  //       dep_num: req.body.department,
  //       datePurchaseRequest: req.body.datePurchaseRequest,
  //       poNumber: {
  //         [Op.not]: null
  //       }
  //     }
  //   })
  //   console.log(results.length)
  //   const resultslength = results.length + 1
  //   if (req.body.admin1Approval && req.body.admin2Approval && req.body.admin3Approval == true) {
  //     let purchaseorderNumber = year + "." + daymonth + "." + req.body.department + "." + resultslength
  //     return purchaseorderNumber
  //   }


  // } catch (err) {

  // }

}

export default purchaseOrderGenerator
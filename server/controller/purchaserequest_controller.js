import axios from "axios"
import 'dotenv/config'
import addPurchaseRequest from '../models/purchaserequest_model.js'
import dayjs from 'dayjs'
import mysql from 'mysql2/promise';
import sql from "mssql";



const purchaseRequest = async(req,res) => {
    console.log("made it to controller")
    //const dayofMonth = dayjs(req.body.datePurchaseRequest).format('MMDD')
    //const prString = (req.body.datePurchaseRequest.$y + "." + department + "." + dayofMonth)
    //const date = dayjs(req.body.datePurchaseRequest).format('MM-DD-YYYY')
        

        // const newPR = new addPurchaseRequest({
        //     prNumber: req.body.prString,
        //     department: req.body.department,
        //     cardType: req.body.cardType,
        //     purchaseRequestAmount: req.body.purchaseRequestAmount,
        //     cardNumber: req.body.cardNumber,
        //     datePurchaseRequest: req.body.datePurchaseRequest
        // })
        // await mongoose.connect(process.env.ATLAS_URI).then(() => {
        //     console.log("Connected to Database");
        // }).catch((err) => {
        //     console.log("Not Connected to Database ERROR! ", err);
        // });
        // await newPR.save();
        // await mongoose.connection.close();
        const config = {
            user: process.env.DB_UNAME,
            password: process.env.DB_PASSWORD,
            server: process.env.DB_HOST,
            port: 1433,
            database: process.env.DB,
            dialectOptions: {
                options: { "requestTimeout": 300000 }
              },
            pool: {

                max: 10,
            
                min: 0,
            
                idleTimeoutMillis: 30000
            
              },
            
              options: {
            
                encrypt: true, // for azure
            
                trustServerCertificate: false // change to true for local dev / self-signed certs
            
              },
            authentication: {
                type: 'default'
            }

        }
        try{
            await sql.connect(config);
            console.log('connected')
            const tables = await sql.query('SELECT * FROM dbo.department')
            console.log(tables)
        }catch(err){
            console.log(err)
        }
     
        
        
        

}




const getAllPrs = async(req,res) =>{

}

export default purchaseRequest; 
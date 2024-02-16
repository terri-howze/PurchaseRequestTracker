import axios from "axios"
import 'dotenv/config'
import mongoose from "mongoose"
import addPurchaseRequest from '../models/purchaserequest_model.js'

// const makePRNumber = () =>{
//     const date = new Date();
// }

const purchaseRequest = async(req,res) => {
    try{

        const newPR = new addPurchaseRequest({
            prNumber: req.body.prNumber,
            department: req.body.department,
            cardType: req.body.cardType,
            purchaseRequestAmount: req.body.purchaseRequestAmount,
            cardNumber: req.body.cardNumber
        })
        await mongoose.connect(process.env.ATLAS_URI).then(() => {
            console.log("Connected to Database");
        }).catch((err) => {
            console.log("Not Connected to Database ERROR! ", err);
        });
        await newPR.save();
        await mongoose.connection.close();
    }catch(err){
        return err
    }

}

export default purchaseRequest;
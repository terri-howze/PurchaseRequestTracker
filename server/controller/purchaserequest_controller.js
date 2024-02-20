import axios from "axios"
import 'dotenv/config'
import mongoose from "mongoose"
import addPurchaseRequest from '../models/purchaserequest_model.js'
import dayjs from 'dayjs'

const purchaseRequest = async(req,res) => {
    console.log("made it to controller")
    const dayofMonth = dayjs(req.body.datePurchaseRequest).format('MMDD')
    //const prString = (req.body.datePurchaseRequest.$y + "." + department + "." + dayofMonth)
    //const date = dayjs(req.body.datePurchaseRequest).format('MM-DD-YYYY')
        

        const newPR = new addPurchaseRequest({
            prNumber: req.body.prString,
            department: req.body.department,
            cardType: req.body.cardType,
            purchaseRequestAmount: req.body.purchaseRequestAmount,
            cardNumber: req.body.cardNumber,
            datePurchaseRequest: req.body.datePurchaseRequest
        })
        await mongoose.connect(process.env.ATLAS_URI).then(() => {
            console.log("Connected to Database");
        }).catch((err) => {
            console.log("Not Connected to Database ERROR! ", err);
        });
        await newPR.save();
        await mongoose.connection.close();

}

const getAllPrs = async(req,res) =>{

}

export default purchaseRequest; 
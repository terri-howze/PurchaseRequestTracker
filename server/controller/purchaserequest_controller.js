import axios from "axios"
import 'dotenv/config'
import mongoose from "mongoose"
import addPurchaseRequest from '../models/purchaserequest_model.js'


const purchaseRequest = async(req,res) => {
    try{
        console.log("made it")
        const newPR = new addPurchaseRequest({
            prNumber: req.body.prNumber,
            department: req.body.department
        })
        console.log(process.env.ATLAS_URI)
        await mongoose.connect(process.env.ATLAS_URI);
        console.log("connected")
        await newPR.save();
        await mongoose.connection.close();
    }catch(err){
        return err
    }

}

export default purchaseRequest;
var router = express.Router();

// import path from 'path';
// const PRAPI = path.resolve('./api/purchaseorderapi');

// router.get('/PR', PRAPI)
import 'dotenv/config';
import express from 'express';
var router = express.Router();
import { purchaseRequest } from '../controller/purchaserequest_controller.js'
import { getDep20prs } from '../controller/purchaserequest_controller.js';

router.get('/PR/get20/', async (req,res) =>{
    try{
        console.log(req.query)
    const twentydata = await getDep20prs(req)
    console.log(twentydata)
    res.status(200).json(twentydata)
    }catch(err){
        res.status(500).json(err)
    }
})

router.post('/PR/addPR', async (req,res) =>{
    const newPR = await purchaseRequest(req).then(() => {
        console.log("made it")
    }).catch((err) => {
        console.log("Not Connected ERROR! ", err);
    })
    
    res.status(200).json(newPR);
})


export default router;
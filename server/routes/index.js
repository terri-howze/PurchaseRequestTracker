var router = express.Router();

// import path from 'path';
// const PRAPI = path.resolve('./api/purchaseorderapi');

// router.get('/PR', PRAPI)
import 'dotenv/config';
import express from 'express';
var router = express.Router();
import { purchaseRequest } from '../controller/purchaserequest_controller.js'
import { getDep20prs } from '../controller/purchaserequest_controller.js';

router.get('/PR/get20', async (req,res) =>{
    const dep20prs = await getDep20prs(req).then(() =>{
   
    })
    res.status(200).json(dep20prs)
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
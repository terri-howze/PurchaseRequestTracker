var router = express.Router();

// import path from 'path';
// const PRAPI = path.resolve('./api/purchaseorderapi');

// router.get('/PR', PRAPI)
import 'dotenv/config';
import express from 'express';
var router = express.Router();
import purchaseRequest from '../controller/purchaserequest_controller.js'

router.get('/PR', (req,res) =>{
    res.send('hit router');
})
router.post('/PR/addPR', async (req,res) =>{
    const newPR = await purchaseRequest(req);
    res.status(200).json(newPR);
})


export default router;
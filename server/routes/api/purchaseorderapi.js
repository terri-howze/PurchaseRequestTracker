import 'dotenv/config';
import express from 'express';
var router = express.Router();
import purchaserequest_controller from '../../controller/purchaserequest_controller'


router.post('/addPR', async (req,res) =>{
    const newPR = await purchaserequest_controller(req);
    res.status(200).json(newPR);
})

export default router;
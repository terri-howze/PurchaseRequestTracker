var router = express.Router();
import 'dotenv/config';
import express from 'express';
var router = express.Router();
import { purchaseRequest, getDep20prs, searchBar, updatePurchaseRequest, deletePurchaseRequest } from '../controller/purchaserequest_controller.js'

router.get('/PR/get20/', async (req, res) => {
    try {
        console.log(req.query)
        const twentydata = await getDep20prs(req)
        console.log(twentydata)
        res.status(200).json(twentydata)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/PR/searchBar', async (req, res) => {
    try {
        const searchData = await searchBar(req)
        res.status(200).json(searchData)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/PR/addPR', async (req, res) => {
    const newPR = await purchaseRequest(req).then(() => {
        console.log("made it")
    }).catch((err) => {
        console.log("Not Connected ERROR! ", err);
    })

    res.status(200).json(newPR);
})

router.post('/PR/updatePR', async (req, res) => {
    try {
        await updatePurchaseRequest(req)
        res.status(200)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/PR/deletePR', async (req, res) => {
    try {
        await deletePurchaseRequest(req)
        res.status(200).json("Purchase Request Successfully Deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})





export default router;
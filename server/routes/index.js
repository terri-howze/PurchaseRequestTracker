import 'dotenv/config';
import express from 'express';
const router = express.Router();

import { purchaseRequest, getDep20prs, searchBar, updatePurchaseRequest, deletePurchaseRequest, orderByDate } from '../controller/purchaserequest_controller.js'

router.get('/PR/get20/', async (req, res) => {
    try {
        console.log(req.query)
        const twentydata = await getDep20prs(req)
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

router.post('/PR/orderByDate', async (req, res) => {
    try {
        const orderDate = await orderByDate(req)
        res.status(200).json(orderDate)
    } catch (err) {
        res.status(500).json(err)
    }

})

router.post('/PR/addPR', async (req, res) => {
    const newPR = await purchaseRequest(req).then(() => {
    }).catch((err) => {
        console.log("Not Connected ERROR! ", err);
    })

    res.status(200).json(newPR);
})

router.post('/PR/updatePR', async (req, res) => {
    try {
        const results = await updatePurchaseRequest(req)
        res.status(200).json(results)
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
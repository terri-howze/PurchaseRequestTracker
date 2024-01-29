import mongoose, { Schema } from "mongoose";
//var Long = mongoose.Schema.Types.Long;

const AddPurchaseRequest = new Schema({
    prNumber: {type: Number, require:true, unique:true},
    department : Number
})

const addPurchaseRequest = mongoose.model('addPurchaseRequest', AddPurchaseRequest)
export default addPurchaseRequest;
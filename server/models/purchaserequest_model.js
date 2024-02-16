import mongoose, { Schema } from "mongoose";
//var Long = mongoose.Schema.Types.Long;

const AddPurchaseRequest = new Schema({
    prNumber: {type: Number, require:true, unique:true},
    department : {type: Number, require:true},
    cardType: {type: String, required:true},
    purchaseRequestAmount: {type: Number, required:true},
    cardNumber: {type: Number, required:true}
})

const addPurchaseRequest = mongoose.model('addPurchaseRequest', AddPurchaseRequest)
export default addPurchaseRequest;
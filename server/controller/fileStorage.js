import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/sherpatest/PDFS')
    },
    filename: (req, file, cb) => {
        cb(null, req.body.datePurchaseRequest + req.body.prNumber +path.extname(file.originalname))
    }
})

export default storage
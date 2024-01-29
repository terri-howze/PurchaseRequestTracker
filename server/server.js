import { createRequire } from "module";
const require = createRequire(import.meta.url);
import express  from 'express';
import path  from "path";
import { resolve } from "path";
//const routes = require('./routes')
import router from './routes/index.js'
import cors from "cors"
//const session = require('express-session');


const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(router);


app.get('/', (req,res) =>{
    res.sendFile(resolve('./src/App.js'))
}) 

app.listen(port, () =>{
    console.log(`server running on ${port}`);
});


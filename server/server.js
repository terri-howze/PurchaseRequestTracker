import { createRequire } from "module";
import express  from 'express';
import path  from "path";
import { resolve } from "path";
//const routes = require('./routes')
import router from './routes/index.js'
import cors from "cors"
import helmet from "helmet";
//const session = require('express-session');


const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());
app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        connectSrc: ['http://localhost:8080/PR/get20']
      }
    }
  }));
app.use(express.urlencoded({extended: true}));
app.use(router);


app.get('/', (req,res) =>{
    res.sendFile(resolve('./src/main.jsx'))
}) 

app.listen(port, () =>{
    console.log(`server running on ${port}`);
});


import express from 'express';
import dotenv from 'dotenv';
import {dbConnection}  from './config/dbConnection.js';
dbConnection();

dotenv.config();
const app = express();



app.get('/', (req, res)=>{
    res.send(`<H1>App is working</H1>`);
})




export default app;
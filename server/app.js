import express from 'express';
// this file is for environment variable
import dotenv from 'dotenv';
//importing database file and executing it
import {dbConnection}  from './config/dbConnection.js';
dbConnection();

dotenv.config();
//importing routes 
import userRoutes from "./routes/userRoutes.js"

const app = express();

//using routes as middleware
app.use("/api/v1", userRoutes);


// basic route to test
app.get('/', (req, res)=>{
    res.send(`<H1>App is working</H1>`);
})




export default app;
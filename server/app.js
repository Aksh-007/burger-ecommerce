import express from 'express';

// this file is for environment variable
import dotenv from 'dotenv';
dotenv.config();

//importing database file and executing it
import { dbConnection } from './config/dbConnection.js';
dbConnection();

//importing routes 
import userRoutes from "./routes/userRoutes.js"

// importing connectPassport to connect to googleauth 
import { connectPassport } from "./utils/Provider.js";


//importing session 
import session from 'express-session';
import passport from 'passport';

const app = express();

app.use(express.json());
//using middlewares
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);

app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());

connectPassport();

//using routes as middleware
app.use("/api/v1", userRoutes);


// basic route to test
app.get('/', (req, res) => {
    res.send(`<H1>App is working</H1>`);
})




export default app;
import express from "express";
import dotenv from 'dotenv';
import { dbConnection } from './config/dbConnection.js';
import connectPassport from "./utils/authProvider.js"
import session from 'express-session';
import passport from 'passport';
import cookieParser from "cookie-parser";
import cors from 'cors'
import { errorMiddleware } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

// configuring the dotenv environment here 
dotenv.config();
// calling dbconnection
dbConnection();
// calling passport function
connectPassport();



const app = express();


//using miidleware as session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,

    cookie:{
        secure:process.env.NODE_ENV === "development" ? false : true,
        httpOnly:process.env.NODE_ENV === "development" ? false : true,
        sameSite:process.env.NODE_ENV === "development" ? false : "none",
    },
}));

//using cookie parser
//using express middlewares to accept json data in req.body/params
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    Credential: true,
    origin: process.env.FRONTEND_URL,
    methods:["GET","POST", "PUT", "DELETE"]
}));
//make sure you will call it after session
app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());

// using routes
app.use("/api/v1", userRoutes);
app.use("/api/v1", orderRoutes);


// app.use(cookieParser())
//using error middleware
app.use(errorMiddleware);


// basic route to test
app.get('/', (req, res) => {
    res.send(`<H1>App is working</H1>`);
})


export default app;
import express from 'express';
// this file is for environment variable
import dotenv from 'dotenv';
//importing database file and executing it
import { dbConnection } from './config/dbConnection.js';
//importing routes 
import userRoutes from './routes/userRoutes.js';
//importing passport
import connectPassport from "./utils/authProvider.js"
// thid for session
import session from 'express-session';
import passport from 'passport';

// configuring the dotenv environment here 
dotenv.config();
// calling dbconnection
dbConnection();
// calling passport function
connectPassport();



const app = express();

//using miidleware as session
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
}));

//make sure you will call it after session
app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());






app.use('/api/v1', userRoutes);

app.use(express.json());
//using middlewares





// basic route to test
app.get('/', (req, res) => {
    res.send(`<H1>App is working</H1>`);
})




export default app;
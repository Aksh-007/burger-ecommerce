import express from "express";
import passport from "passport";
import { myProfile, logout } from "../controllers/user.controller.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";

  const router = express.Router();

    //here we are using passport to authenticate user using google auth
    router.get("/googlelogin",
        passport.authenticate("google", {
            scope: ["profile"],
        })
    );

    // after authenticate from google redirect to this url{FRONTEND_URL}
    // router.get("/login",
    //     passport.authenticate('google',{
    //         scope:["profile"],
    //         successRedirect: process.env.FRONTEND_URL,
    //     })
    // )
    
    //temproparly setting it but we have to authenticate it 
    router.get("/login", 
    //we have to authenticate it 
    passport.authenticate("google"),
    (req, res, next) =>{
        res.send("logged in ")  
    });
    
    // this routes gives you information of login user
    router.get('/me',isAuthenticated, myProfile);

    router.get('/logout', logout );




    export default router;
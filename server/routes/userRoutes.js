import express from "express";
import passport from "passport";

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
    
    //temproparly setting it
    router.get("/login", (req, res, next) =>{
        res.send("logged in ")
    });
    
    router.get('/me')


    export default router;
import express from "express";
import passport from "passport";
import {
    myProfile,
    logout,
    getAllUsers,
    getAdminStats
} from "../controllers/user.controller.js";
import { isAuthenticated, authorisedAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

//here we are using passport to authenticate user using google auth
router.get("/login",
    passport.authenticate("google", {
        // scope: ["profile"],
        successRedirect: process.env.FRONTEND_URL,
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
// after authenticate from google redirect to this url{FRONTEND_URL}
router.get("/googlelogin",
    //we have to authenticate it 
    passport.authenticate("google",{
                // scope means what information we want from google
                 scope:["profile"],
                 
             }),
    (req, res, next) => {
        res.send("logged in ")
    });

// this routes gives you information of login user
router.get('/me', isAuthenticated, myProfile);

router.get('/logout', logout);

//admin route
router.get("/admin/allusers", isAuthenticated, authorisedAdmin, getAllUsers);

router.get("/admin/stats", isAuthenticated, authorisedAdmin, getAdminStats)

export default router;
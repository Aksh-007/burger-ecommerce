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
// after authenticate from google redirect to this url{FRONTEND_URL}
router.get("/login",
    //we have to authenticate it 
    passport.authenticate("google",{
                 scope:["profile"],
                 successRedirect: process.env.FRONTEND_URL,
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
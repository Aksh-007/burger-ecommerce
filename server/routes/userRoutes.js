import express from 'express';
import passport from 'passport';

const router = express.Router();


//google authetication 
// here we created scope 
router.get(
    "/googlelogin",
    passport.authenticate("google", {
      scope: ["profile"],
    })
  );

  // router.get(
  //   "/login",
  //   passport.authenticate("google", {
  //     successRedirect: process.env.FRONTEND_URL,
  //   })
  // );

router.get("/login", (req, res, next) =>{
    res.send("logged in ")
});




export default router;
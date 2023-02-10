import express from 'express';
import passport from 'passport';

const router = express.Router();


//google authetication 
// here we created scope 
router.get('/googlelogin', passport.authenticate('google',{
    scope:["profile"]
}));




export default router;
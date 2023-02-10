import { Strategy as GoogleStratergy } from "passport-google-oauth20";
import passport from "passport";


export const connectPassport = () => {

    passport.use(new GoogleStratergy({
        clientID: "akshay",
        clientSecret: "akshay",
        callbackURL: 'https://www.example.com/oauth2/redirect/google',
    }, async function (accessToken, refreshToken, profile, done) {

        //databse comes here when user login
        // once the user login 

    }));
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id,done) =>{
        const user = await userModel.findById(id);
        done(null,user);
    });
}
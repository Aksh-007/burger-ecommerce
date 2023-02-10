import { Strategy as GoogleStratergy } from "passport-google-oauth20";
import passport from "passport";
import userModel from "../models/user.schema.js";


export const connectPassport = () => {

    passport.use(new GoogleStratergy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
    }, async function (accessToken, refreshToken, profile, done) {

        //databse comes here when user login
        // once the user login it will save in database and 
        //retrievr information from database  again if the user login

        //in this step we are finding user id in databse so that we can do furthure operation

        const user = await userModel.findOne({
            googleId: profile.id,
        });
        
        // here we are checking about user present in database or not 
        if (!user) {
            // if user not present in database then created a new user and save it in database 
            const newUser = await userModel.create({
                googleId: profile.id,
                name: profile.displayName,
                photo: profile.photos[0].value,
            });
            //
            return done(null, newUser);
        } else {
            // if user already present in database then just retrieve the user and send it 
            return done(null, user);
        }

    }));
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        const user = await userModel.findById(id);
        done(null, user);
    });
};
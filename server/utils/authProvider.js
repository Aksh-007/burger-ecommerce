import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import userModel from "../models/user.schema.js";


const connectPassport = () =>{
    passport.use(new GoogleStrategy(
       { 
        //this is provided by google when we loginin google console developer
        clientID : process.env.GOOGLE_CLIENT_ID,
        clientSecret :process.env.GOOGLE_CLIENT_SECRET,
        callbackURL:process.env.GOOGLE_CALLBACK_URL,
    }, async function (accessToken, refreshToken, profile, done){

          //databse comes here when user login
        // once the user login it will save in database and 
        //retrievr information from database  again if the user login
        // in profile there is one field call profile.id so we can find by that id in mongodb databse using findById if user already present in database

        //in this step we are finding user id in databse so that we can do furthure operation

        // checking if user exist in databse if exist then retriev it from databse 
        const existingUser = await userModel.findOne({
            googleId:profile.id,
        });

        //if user not exist in database then fetch the user from google(profile) and save it in database
        if(!existingUser){
            //creating new user
            const newUser = await userModel.create({
                googleId : profile.id,
                name:profile.displayName,
                photo: profile.photos[0].value,
            });
            return done(null, newUser);
        }else{
            //if user present in database then call done 
            return done(null, existingUser);
        }


    }));

    //this is mandatory step serialize and deserialize 
    // 
    passport.serializeUser((existingUser, done) => {
        done(null, existingUser.id);
      });
    //here we are finding user by id in databse 
    passport.deserializeUser(async (id, done) => {
        const user = await userModel.findById(id);
        done(null, user);
      });
}

export default connectPassport;
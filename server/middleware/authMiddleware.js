import asyncHandler from "../services/asyncHandler.js";
import customError from "../utils/customError.js";


// in this middleware we are checking if user is login or not 
// if user is login then it has accessToken 
export const isAuthenticated = (asyncHandler
    (async (req, res, next) => {
        // extracting accessToken (connect.sid is token name provided by google )
        const accessToken = req.cookies['connect.sid'];
        //just checking the accessToken
        // console.log(accessToken);
        // next();

        // if no token present throwing custom error 
        if (!accessToken) {
            return next(new customError(`Not Logged in`, 401));
            // throw new customError('Not logged in', 401)
        }else{
            //if token present then pass to next middleware
            next();
        }
    }));

    // export const isAuthorised 
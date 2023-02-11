import asyncHandler from "../services/asyncHandler.js";


// in this middleware we are checking if user is login or not 
// if user is login then it has accessToken 
export const isAuthenticated = (asyncHandler
    (async (req, res, next) => {
        // extracting accessToken (connect.sid is token name provided by google )
        const accessToken = req.cookies['connect.sid'];
        //just checking the accessToken
        console.log(accessToken);
        next();

        // if no token present 
        if (!accessToken) {
            return next();
        }
    }))
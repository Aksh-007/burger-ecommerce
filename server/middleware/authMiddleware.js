import asyncHandler from "../services/asyncHandler.js";



export const isAuthenticated = (asyncHandler
    (async (req, res, next) => {

        const accessToken = req.cookies;
        console.log(accessToken);
    }))
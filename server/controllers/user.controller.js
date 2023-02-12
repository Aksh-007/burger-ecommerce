//importing userModel to do database opeartion
import userModel  from "../models/user.schema.js";
//importing asyncHandler
import asyncHandler from "../services/asyncHandler.js";
import customError from "../utils/customError.js";


// this will give you login user information as passport save info in req.user
export const myProfile = asyncHandler(async (req, res) =>{
//    console.log(req.user);
    res.status(200).json({
        success:true,
        user: req.user,
    })

})

// here logout using passport 
export const logout = asyncHandler(async (req, res, next) =>{
    // simply we have to destroy a seesion created while login 
    req.session.destroy((err) =>{
        //if error then we simply returning next    
        if (err) {
                return next;
            }else
            // if there is no error encounterd then delete the coolies 
            {
                res.clearCookie("connect.sid");
                res.status(200).json({
                    success:true,
                    message:` logout succesfully`
                })
            }
     })
});

// admin routes for getting all users of database
export const getAllUsers = asyncHandler(async(req, res, next)=>{
    const allUsers = await userModel.find({});
    if (!allUsers) {
        return next(new customError("No user in Database", 400));
    }

    res.status(200).json({
        success:true,
        allUsers,
    })
})

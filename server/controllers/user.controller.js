//importing userModel to do database opeartion
import userModel  from "../models/user.schema.js";


// this will give you login user information as passport save info in req.user
export const myProfile = async (req , res, next) =>{
    res.status(200).json({
        success:true,
        //here where is req.user came from ??
        // when we login with passport req.user is always present 
        user: req.user
    })
};


export const logout = async

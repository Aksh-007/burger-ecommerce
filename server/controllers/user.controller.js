



export const myProfile = async (req , res, next) =>{
    res.status(200).json({
        success:true,
        //here where is req.user came from ??
        // when we login with passport req.user is always present 
        user: req.user
    })
};
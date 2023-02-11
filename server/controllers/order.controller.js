import asyncHandler from "../services/asyncHandler";
import { orderModel } from "../models/order.schema";


// this controller is only for order on cash on delivery
export const createOrder = (asyncHandler (async(req, res, next)=>{

    // here we are collecting info fro frontend that is send in 
    // req.body object and mapping through destructuring (...Spread) in variable
    const {
        deliveryDetails,
        orderItems,
        paymentMethod,
        itemsPrice,
        taxPrice,
        deliveryCharges,
        totalAmout,
    }= req.body;

    // when we use passport we get user details in req.user
    const user = req.user._id;

    // storing each variable in orderOptions 
    const orderOptions ={
        deliveryDetails,
        orderItems,
        paymentMethod,
        itemsPrice,
        taxPrice,
        deliveryCharges,
        totalAmout,
        user,
    }

    // creating order in databse
    await orderModel.create(orderOptions);

    // sending json response 
    res.status(200).json({
        sucess:true,
        message:`Order placed via cash on delivery`,
        orderOptions,
    })
}));
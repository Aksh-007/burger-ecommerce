import asyncHandler from "../services/asyncHandler.js";
import mongoose from "mongoose";
import orderModel from "../models/order.schema.js"
import customError from "../utils/customError.js";

// mongoose.set("debug", true);
// mongoose.set("strictQuery", false);

// this controller is only for order on cash on delivery
export const placeOrder = asyncHandler(async (req, res) => {
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
    } = req.body;

    // when we use passport we get user details in req.user
    const user = "req.user._id";

    // storing each variable in orderOptions 
    const orderOptions = {
        deliveryDetails,
        orderItems,
        paymentMethod,
        itemsPrice,
        taxPrice,
        deliveryCharges,
        totalAmout,
        user,
    };
    // console.log(orderOptions);
    // creating order in databse
    const newOrder = await orderModel.create(orderOptions);
    // sending json response 
    res.status(200).json({
        sucess: true,
        message: `Order placed via cash on delivery`,
        // orderOptions,
        newOrder
    });
});


//here we are getting all order of specific user 
export const getMyOrders = asyncHandler(async (req, res, next) => {

    //here query to db that find the order details through user id 
    //of the user so specific order of user can be found
    const myOrders = await orderModel.find({
        user: req.user._id
    }).populate("user", "name");

    res.status(200).json({
        success: true,
        myOrders,
    })
});


// here we are getting specific order of specific user 
export const getOrderDetails = asyncHandler(async (req, res, next) => {
    const order = await orderModel.findById(req.params.id).populate("user", "name");
  
    if (!order){
        return next(new customError("Invalid Order Id", 404));
    }
  
    res.status(200).json({
      success: true,
      order,
    });
  });


  //here getting all the orders that avialable in databse
  export const getAdminOrders = asyncHandler(async (req, res, next) =>{

    const order = await orderModel.find({}).populate("user", "name");

    if (!order){
        return next(new customError("No order found in database", 404));
    }

    res.status(200).json({
        success:true,
        message:`Order Retrived succesfully`,
        order
    })
    
  });
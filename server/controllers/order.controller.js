import asyncHandler from "../services/asyncHandler.js";
import orderModel from "../models/order.schema.js"
import customError from "../utils/customError.js";
import { instance } from "../server.js"
import crypto from "crypto";
import paymentModel from "../models/payment.schema.js";
// import { asyncError } from "../middleware/errorMiddleware.js";

mongoose.set("debug", true);
mongoose.set("strictQuery", false);

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
    const user = req.user._id;

    // storing each variable in orderOptions and passing user
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
        newOrder,
    });
});

// in this controller we are doing online payment using razorpay
export const placeOrderOnline = asyncHandler(async (req, res) => {
    // here we are collecting info from frontend that is send in 
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
    const user = req.user._id;

    // storing each variable in orderOptions and passing user
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
    const options = {
        amount: Number(totalAmout) * 100,
        currency: "INR",
        receipt: "order_rcptid_11"
    };
    const order = await instance.orders.create(options);


    res.status(200).json({
        sucess: true,
        order,
        orderOptions,
    });
});


// api to check payment verificaion
export const paymentVerification = asyncHandler(async (req, res, next) => {

    const { 
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
        orderOptions
    } = req.body;

    const body = razorpay_payment_id + "|" + razorpay_order_id;

    const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body)
    .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (!isAuthentic) {
        return next (new customError("Payment Failed", 400));
    }else{
        const payment = await paymentModel.create({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        });

        await orderModel.create({
            ...orderOptions, 
            user : "req.user._id",
            paidAt: new Date(Date.now()),
            paymentInfo:payment._id,
        });

        res.status(201).json({
            success:true,
            message:`Order place successfully payment id :${payment._id}`,
        })
    }

})

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

    if (!order) {
        return next(new customError("Invalid Order Id", 404));
        // throw new customError("Invalid Order Id", 404);
    }

    res.status(200).json({
        success: true,
        order,
    });
});


//here getting all the orders that avialable in databse if the user is admin
export const getAdminOrders = asyncHandler(async (req, res, next) => {

    const order = await orderModel.find({}).populate("user", "name");

    if (!order) {
        return next(new customError("No order found in database", 404));
    }

    res.status(200).json({
        success: true,
        message: `Order Retrived succesfully`,
        order,
    })

});

//in this controller the order is process like preparing to pickup anddelivered
export const processOrder = asyncHandler(async (req, res, next) => {

    // order id coming in req.params
    const orderId = req.params.id

    // if no id in req.params show validation error
    if (!orderId) {
        return next(new customError("Please Enter order id", 404));
    }

    //doing database opeartion quering to database
    const order = await orderModel.findById(orderId);

    // if no order exists then throw error
    if (!order) {
        return next(new customError("No order exists!!", 404));
    }

    if (order.orderStatus === "Preparing") {
        order.orderStatus = "PickUp";
    } else if (order.orderStatus === "PickUp") {
        order.orderStatus = "Delivered";
        // setting deliveredAt filed at date.now
        order.deliveredAt = new Date(Date.now());
    } else if (order.orderStatus === "Delivered") {
        return next(new customError("Food already Delivered", 400));
    }

    //at last save changes in database
    await order.save();

    res.status(200).json({
        success: true,
        message: `Order status updated succesfully`

    })

});
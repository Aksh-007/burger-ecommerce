import mongoose from "mongoose";
import orderStatus from "../utils/ordersStatus.js";
//created enum for payment method 
import paymentModes from "../utils/paymentModes.js";


export const orderSchema= new mongoose.Schema({

    // this is deliveryDetails object
    deliveryDetails :{
        area:{
            type:String,
            required:true,
            trim:true,
        },
        houseNo:{
            type:String,
            required:true,
            trim:true,
        },
        landMark:{
            type:String,
            required:true,
            trim:true,
        },
        phoneNumber :{
            type:String,
            required:true,
        }
    },

    orderItems:{

        cheeseBurger:{
            price:{
                type:Number,
                required:true,
            },
            quantity:{
                type:Number,
                required:true,
            }
        },

        chickenBurger:{
            price:{
                type:Number,
                required:true,
            },
            quantity:{
                type:Number,
                required:true,
            }
        },

        muttonBurger:{
            price:{
                type:Number,
                required:true,
            },
            quantity:{
                type:Number,
                required:true,
            }
        },
    },

    // we are connecting user model id to order schema so that 
    // we can keep track of individual user orders
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,

    },
    paymentMethod:{
        type:String,
        enum:Object.values(paymentModes),
        default:paymentModes.COD,
    },
    paymentInfo:{
        type:mongoose.Schema.ObjectId,
        ref:"Payment"
    },
    paidAt:Date,

    itemsPrice:{
        type:Number,
        default:0,
    },
    taxPrice:{
        type:Number,
        default:0,
    },
    deliveryCharges:{
        type:Number,
        default:0,
    },
    totalAmout:{
        type:Number,
        default:0,
    },
    orderStatus:{
        type:String,
        enum:Object.values(orderStatus),
        default: orderStatus.Preparing,
    },
    deliveredAt : Date,

},{timestamps:true});

export default mongoose.model("Order", orderSchema);
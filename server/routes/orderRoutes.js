import express from "express";
import {
    getMyOrders,
    placeOrder,
    getOrderDetails,
    getAdminOrders,
    processOrder,
    placeOrderOnline
} from "../controllers/order.controller.js";
//importing to check if user is authenticate
import { isAuthenticated, authorisedAdmin } from "../middleware/authMiddleware.js";


const router = express.Router();

router.post("/createorder", placeOrder);

//for order that are placed  online
router.post("/createorderonline", placeOrderOnline)

router.get("/myorders", isAuthenticated, getMyOrders);

// this is same as frontend
router.get("/order/:id", isAuthenticated, getOrderDetails);

// add admin middleware so that only admin can access it
router.get("/admin/orders", isAuthenticated, authorisedAdmin, getAdminOrders);
//create order route to process order if we hit it then it will change 
router.get("/admin/order/:id", isAuthenticated, authorisedAdmin, processOrder);


export default router;
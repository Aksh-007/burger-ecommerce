import express from "express";
import { getMyOrders, placeOrder, getOrderDetails, getAdminOrders, processOrder } from "../controllers/order.controller.js";
//importing to check if user is authenticate
import { isAuthenticated, authorisedAdmin } from "../middleware/authMiddleware.js";


const router = express.Router();

router.post("/createorder",  placeOrder);

router.get("/myorders",  isAuthenticated, getMyOrders);

// this is same as frontend
router.get("/order/:id",  isAuthenticated, getOrderDetails);

// add admin middleware so that only admin can access it
router.get("/admin/orders",  isAuthenticated, authorisedAdmin, getAdminOrders);
router.get("/admin/order/:id",  isAuthenticated, authorisedAdmin,processOrder);

//create order route

export default router;
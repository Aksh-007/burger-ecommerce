import express from "express";
import { placeOrder } from "../controllers/order.controller.js";
//importing to check if user is authenticate
import { isAuthenticated } from "../middleware/authMiddleware.js";


const router = express.Router();

router.post("/createorder",  placeOrder);

//create order route

export default router;
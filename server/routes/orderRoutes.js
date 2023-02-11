import express from "express";
import { createOrder } from "../controllers/order.controller.js";
//importing to check if user is authenticate
import { isAuthenticated } from "../middleware/authMiddleware.js";


const router = express.Router();

router.post("/createOrder", isAuthenticated, createOrder);

//create order route
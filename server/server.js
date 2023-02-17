import app from "./app.js";
const PORT = process.env.PORT || 4000;

import Razorpay from 'razorpay';

export const instance = new Razorpay({ 
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET 
});



app.listen(PORT, (req, res)=>{
    console.log(`App is listening on http://localhost:${PORT}/api/v1 and working on ${process.env.NODE_ENV}`);
});
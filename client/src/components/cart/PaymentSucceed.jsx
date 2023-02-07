import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSucceed = () => {
  return (
   <section className="paymentSucceed">
     <main>
        <h1>Order Confirmed</h1>
        <p>Order Placed Successfully!!!</p>
        <p>Check Order Status Below</p>
        <Link to='/myorder'>Check Status</Link>
     </main>
   </section>
  )
}

export default PaymentSucceed

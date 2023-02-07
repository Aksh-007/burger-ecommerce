import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // 10, 11, 12, 13, 14, 15, 16];

  return (
    <section className="table">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Order Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
           {
             arr.map ( i => (
                <tr key={i}>
                <td>#mglnslfnsd</td>
                <td>Processing</td>
                <td>10</td>
                <td>₹{2000}</td>
                <td>COD</td>
                <td >
                  <Link to={`/order/${"mglnslfnsd"}`} >
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
             ))
           }
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;

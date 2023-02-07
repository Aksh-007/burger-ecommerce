import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address :</b>
            {"sjda 12-32ss dsad"}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name :</b>
            {"Akshay"}
          </p>
          <p>
            <b>Phone :</b>
            {2131232123}
          </p>
        </div>

        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status :</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At :</b>
            {"23-02-2002"}
          </p>
          <p>
            <b>Delivered At :</b>
            {"23-02-2003"}
          </p>
        </div>

        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method :</b>
            {"Online"}
          </p>
          <p>
            <b>Payment Reference :</b> #{"sadsad"}
          </p>
          <p>
            <b>Paid At :</b>
            {"23-02-2003"}
          </p>
        </div>

        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total :</b> ₹{2132}
          </p>
          <p>
            <b>Shipping Charges :</b> ₹{200}
          </p>
          <p>
            <b>Tax :</b>₹{232}
          </p>
          <p>
            <b>Total Amount :</b>₹ {232 + 200 + 2132}
          </p>
        </div>
        <article>
          <h1>Orderd items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{52}</span> x <span>{252}</span>
            </div>
          </div>
          <div>
            <h4>Chicken Burger</h4>
            <div>
              <span>{12}</span> x <span>{252}</span>
            </div>
          </div>
          <div>
            <h4>Mutton Burger</h4>
            <div>
              <span>{32}</span> x <span>{2252}</span>
            </div>
          </div>
          <div>
            <h4>
              <strong>Sub Total</strong>
            </h4>
            <div>
              ₹{2132}
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;

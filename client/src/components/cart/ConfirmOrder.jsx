import React from 'react'

const ConfirmOrder = () => {
  return (
    <section className="confirmOrder">
        <main>
            <h1>
                Confirm Order
            </h1>
            <form>
                <div>
                    <label >Cash On Delivery</label>
                    <input type='radio' name='payment' />
                </div>
                <div>
                    <label >Upi</label>
                    <input type='radio'name='payment'/>
                </div>
                <div>
                    <label >Debit Card</label>
                    <input type='radio' name='payment'/>
                </div>

                <button type='submit'>Place Order</button>
            </form>
        </main>
    </section>
  )
}

export default ConfirmOrder

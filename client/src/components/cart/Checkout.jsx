import React from 'react'

const Checkout = () => {
  return (
   <section className='checkout'>
    <main>
      <h1>Delivery Details</h1>
      <form >
        <div>
          <label>Area </label>
            <input type="text" placeholder='Enter Your Area'/>
        </div>
        <div>
          <label>House No. </label>
            <input type="text" placeholder='Enter Your House No.'/>
        </div>
        <div>
          <label>LandeMark </label>
            <input type="text" placeholder='Enter Your LandMark'/>
        </div>
        <div>
          <label>Mobile No. </label>
            <input type="Number" placeholder='Enter Your Mobile No.'/>
        </div>

        <button>Confim Order</button>
      </form>
    </main>
   </section>
  )
}

export default Checkout

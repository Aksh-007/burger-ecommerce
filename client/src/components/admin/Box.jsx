import React from 'react'

const Box = ({ title, value }) => {
    return (
        <div className='box'>
            <h3>
              {title === "Income" && "₹"}
                {value}
            </h3>
            <p>{title}</p>
        </div>
    )
}

export default Box

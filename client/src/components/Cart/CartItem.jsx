import React from 'react'
import { useState } from 'react';

function CartItem({img,title,price}) {

  const [count,setCount] = useState(1);
  const [amount, setAmount] = useState(44.00);

  const formattedAmount = amount.toFixed(2);
  let defaultAmount = 44.00;
  const additems = () => {
    setCount(count + 1);
    setAmount(amount + defaultAmount);
    console.log(price);
    
  }

  const removeItems = () => {
    if(count > 1){
    setCount(count - 1);
    setAmount(amount - (defaultAmount));
    }
  }

  return (
    <div>
        {/* add particular cart for particular div  */}
        <hr
        style={{
        background: 'black',
        color: 'black',
        height: '2px',
        }}
        />

        <div className='flex flex-row justify-between items-center py-4'>

            <img src={`https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/k/1/u/40-pmsx17447-e5-park-avenue-original-imagz7q7fzga8tcd.jpeg?q=70`} 
            className='w-48 rounded'
            alt='shirt'></img>

            <div className='flex flex-col gap-1'>
                <p className='text-gray-600'>Shirt</p>
                <p className='text-black'>Cotton T-shirt</p>
            </div>

            <div className='flex flex-row gap-2 text-xl'>

                <button className='text-blue-500 text-xl'
                onClick={removeItems}
                >
                -
                </button>

                <div className='border border-solid border-black rounded px-4 h-max'>
                  {count}
                </div>

                <button className='text-blue-500 text-xl'
                onClick={additems}
                >
                +
                </button>

            </div>

            <p>$ {formattedAmount}</p>

            <button>x</button>

        </div>
    </div>
  )
}

export default CartItem
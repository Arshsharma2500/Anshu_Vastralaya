import React from 'react'
import { useState } from 'react';

function CartItem({img,title,price}) {

  const [count,setCount] = useState(1);
  const [amount, setAmount] = useState(449.00);

  const formattedAmount = amount.toFixed(2);
  let defaultAmount = 449.00;
  const additems = () => {
    setCount(count + 1);
    setAmount(amount + defaultAmount);
    // console.log(price);
    
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

      <table className="w-full border-collapse mt-4">
        <tr className="bg-gray-200">

          <td className="text-center">
            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/k/1/u/40-pmsx17447-e5-park-avenue-original-imagz7q7fzga8tcd.jpeg?q=70"
            className="w-28 rounded" alt="shirt" />
          </td>

          <td className='w-32 p-2'>
            <p className="text-gray-600">Shirt</p>
            <p className="text-black">Cotton T-shirt</p>
          </td>

          <td className="text-center w-28 pr-2">S</td>
          <td className="text-center w-24">Green</td>
          <td className="text-center w-32">₹ {defaultAmount}</td>

          <td className="text-center w-32">
            <div className="flex items-center gap-2 justify-center">
              <button className="text-blue-500 text-xl" onClick={removeItems}>-</button>
              <div className="border border-black rounded px-4">
                {count}
              </div>
              <button className="text-blue-500 text-xl" onClick={additems}>+</button>
            </div>
          </td>

          <td className="text-end w-20">₹ {formattedAmount}</td>
        </tr>
      </table>


    </div>
  )
}

export default CartItem
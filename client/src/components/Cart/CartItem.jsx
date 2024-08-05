import React, { useContext } from 'react';
import { CartContext } from '../../Layout';

function CartItem({ item }) {
  const { id, img, title, price, quantity } = item;
  const { addToCart, removeFromCart } = useContext(CartContext);
  const formattedAmount = (price * quantity).toFixed(2);

  const addItem = () => {
    addToCart(item);
  }

  return (
    <div>
      <hr style={{ background: 'black', color: 'black', height: '2px' }} />
      <table className="w-full border-collapse mt-4">
        <tr className="bg-gray-200">
          <td className="text-center">
            <img src={img} className="w-28 rounded" alt={title} />
          </td>
          <td className='w-32 p-2'>
            <p className="text-gray-600">{title}</p>
            <p className="text-black">Cotton T-shirt</p>
          </td>
          <td className="text-center w-28 pr-2">S</td>
          <td className="text-center w-24">Green</td>
          <td className="text-center w-32">₹ {price.toFixed(2)}</td>
          <td className="text-center w-32">
            <div className="flex items-center gap-2 justify-center">
              <button className="text-blue-500 text-xl" onClick={() => removeFromCart(id)}>-</button>
              <div className="border border-black rounded px-4">{quantity}</div>
              <button className="text-blue-500 text-xl" onClick={addItem}>+</button>
            </div>
          </td>
          <td className="text-end w-20">₹ {formattedAmount}</td>
        </tr>
      </table>
    </div>
  );
}

export default CartItem;

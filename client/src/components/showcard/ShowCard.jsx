import React, { useEffect, useRef, useState } from 'react';
import CartItem from '../Cart/CartItem';

const ShowCard = ({onClose, card, img, title, price}) => {

  // card for CartItem
  const[selecteditem, setSelectedItem] = useState(null);

  const cardRef = useRef(null);
  const [selectedValue, setSelectedValue] = useState('S'); // State for radio button selection

  useEffect(() => {
    const handleMouseDownOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleMouseDownOutside);
    return () => {
      document.removeEventListener('mousedown', handleMouseDownOutside);
    };
  }, [onClose]);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  // card for CartItem
  let item = {
    img : img,
    title : title,
    price : price,
  }
  const handleonClick = () => {
    // setSelectedItem(item);
    console.log("working");
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div ref={cardRef} className="bg-white p-6 shadow-lg rounded relative bg-opacity-40">
        <div className="w-full h-full mb-4">
          {card}
        </div>

        <form className='flex flex-wrap justify-between w-full h-max mb-4'>
          <div>
            <label>
              <input
                type='radio'
                value='S'
                checked={selectedValue === 'S'}
                onChange={handleChange}
                className='cursor-pointer'
              />
              S
            </label>
          </div>

          <div>
            <label>
              <input
                type='radio'
                value='M'
                checked={selectedValue === 'M'}
                onChange={handleChange}
                className='cursor-pointer'
              />
              M
            </label>
          </div>

          <div>
            <label>
              <input
                type='radio'
                value='L'
                checked={selectedValue === 'L'}
                onChange={handleChange}
                className='cursor-pointer'
              />
              L
            </label>
          </div>

          <div>
            <label>
              <input
                type='radio'
                value='XL'
                checked={selectedValue === 'XL'}
                onChange={handleChange}
                className='cursor-pointer'
              />
              XL
            </label>
          </div>

          <div>
            <label>
              <input
                type='radio'
                value='XXL'
                checked={selectedValue === 'XXL'}
                onChange={handleChange}
                className='cursor-pointer'
              />
              XXL
            </label>
          </div>
        </form>

        <button className='text-center w-full py-2 bg-orange-700 text-white rounded-md active:bg-orange-800'
        onClick={() => {<CartItem img = {item.img} title = {item.title} price = {item.price} /> ,
        console.log("data sended successfully")}}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShowCard;

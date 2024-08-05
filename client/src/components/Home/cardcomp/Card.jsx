import React from 'react';

function Card({ product, addToCart }) {
  const { img, title, price, description } = product;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="border rounded-lg shadow-lg p-4 flex flex-col items-center bg-white">
      <img src={img} alt={title} className="w-full h-full mb-4 rounded" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 mb-2">{description}</p>
      <p className="text-xl font-bold mb-4">₹ {price.toFixed(2)}</p>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;

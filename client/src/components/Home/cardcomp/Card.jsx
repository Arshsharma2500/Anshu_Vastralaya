import React from 'react';

function Card({ product, addToCart }) {
  const { img, title, price } = product;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>₹ {price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Card;

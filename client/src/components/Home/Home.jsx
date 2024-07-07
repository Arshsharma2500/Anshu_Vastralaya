import React, { useState } from 'react';
import Slideshow from './Slidshow/Slideshow';
import shoppingimg from '../../assets/shoppingimg.png';
import Card from './cardcomp/Card';
import ShowCard from '../showcard/ShowCard';

export default function Home() {
  const img = `https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/k/1/u/40-pmsx17447-e5-park-avenue-original-imagz7q7fzga8tcd.jpeg?q=70`;
  const title = "shirt_1";
  const price = 2299;
  const description = "25% discount";

  const [showCard, setShowCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClick = (card) => {
    setSelectedCard(card);
    setShowCard(true);
  };

  const handleClose = () => {
    setShowCard(false);
    setSelectedCard(null);
  };

  return (
    <div className='mx-auto max-w-7xl'>
      <div className="flex flex-row justify-between p-8">

        <aside className="w-1/2">
          <img className='w-full' 
          src={shoppingimg} 
          alt="Shopping" />
        </aside>

        <aside className='w-2/6 h-max p-4 border rounded-lg shadow-2xl shadow-slate-800 bg-gray-500 bg-opacity-20'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus eum fugit laborum harum dolorum sunt amet, totam quos consectetur dignissimos cum quae accusantium quia, molestias quod, quo tenetur sint earum? Itaque, possimus recusandae.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, natus et ratione quo in ipsum repudiandae vero eius quis modi consequatur quos libero expedita necessitatibus, dolores minima autem dicta architecto odit voluptatem tenetur maxime?
        </aside>

      </div>

        {/* cards */}

      <div className={`p-8 flex flex-wrap justify-between gap-y-6 gap-1 ${showCard ? 'blur-sm' : ''}`}>
        {[...Array(8)].map((_, index) => (
          <div key={index} 
          className='relative' 
          onClick={() => handleClick(<Card img={img} title={title} price={price} description={description}/>)}>
            <Card img={img} title={title} price={price} description={description}/>
          </div>
        ))}
      </div>

      {showCard && <ShowCard onClose={handleClose} card={selectedCard} img={img} title={title} price={price} />}
    </div>
  );
}

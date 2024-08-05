import React, { useContext } from 'react';
import { CartContext } from '../../Layout';
import shoppingimg from '../../assets/shoppingimg.png';
import Card from './cardcomp/Card';

export default function Home() {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, 
      img: `https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/k/1/u/40-pmsx17447-e5-park-avenue-original-imagz7q7fzga8tcd.jpeg?q=70`, 
      title: 'Shirt', 
      price: 449.00, 
      description: "25% discount" 
    },
    { id: 2, 
      img: `https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=600`, 
      title: 'T-Shirt', 
      price: 399.00, 
      description: "25% discount" 
    },
    { id: 3, 
      img: `https://images.pexels.com/photos/1043148/pexels-photo-1043148.jpeg?auto=compress&cs=tinysrgb&w=600`, 
      title: 'Shirt', 
      price: 899.00, 
      description: "25% discount" 
    },
    { id: 4, 
      img: `https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=600`, 
      title: 'Shirt', 
      price: 599.00, 
      description: "25% discount" 
    },
    { id: 5, 
      img: `https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=600`, 
      title: 'T-Shirt', 
      price: 6000.00, 
      description: "25% discount" 
    },
    // Add more products as needed
  ];

  return (
    <div className='mx-auto max-w-7xl'>
      <div className="flex flex-row justify-between p-8">

        <aside className="w-1/2">
          <img className='w-full' src={shoppingimg} alt="Shopping" />
        </aside>

        <aside className='w-2/6 h-max p-4 border rounded-lg shadow-2xl shadow-slate-800 bg-gray-500 bg-opacity-20'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus eum fugit laborum harum dolorum sunt amet, totam quos consectetur dignissimos cum quae accusantium quia, molestias quod, quo tenetur sint earum? Itaque, possimus recusandae.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, natus et ratione quo in ipsum repudiandae vero eius quis modi consequatur quos libero expedita necessitatibus, dolores minima autem dicta architecto odit voluptatem tenetur maxime?
        </aside>
      </div>

      <div className='p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {products.map((product) => (
          <Card key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

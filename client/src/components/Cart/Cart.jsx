import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import CartItem from './CartItem'
import Summary from './Summary'
import { GoArrowLeft } from "react-icons/go";
import BackToShop from "./BackToShop.jsx";
import {Link} from "react-router-dom";

function Cart() {

  

  return (
    <div className='mx-auto max-w-7xl bg-gray-200'>
        <div className='flex flex-wrap h-max'>

          <div className='bg-gray-200 w-2/3 p-8 flex flex-col gap-4'>
  
            <img src={Logo} className='w-16 rounded'></img>
            <div className='flex flex-row w-full gap-28'>
              <h2 className='font-serif text-xl font-medium w-1/4'>Shopping cart</h2>
              <div className='flex flex-wrap justify-between w-3/4 font-serif'>
                <p>Size</p>
                <p>Color</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
              </div>
            </div>
            <CartItem />
            <CartItem />
            <CartItem />

            {/* back button  */}
            
            <Link to={"/"} ><BackToShop/></Link>

          </div>

          <div className='bg-gray-300 w-1/3 p-4'>
            <div className='bg-gray-300 p-8 flex flex-col gap-4 py-20'>
              <h2 className='font-serif text-xl font-medium w-1/4'>Summary</h2>
              <Summary />

              
            </div>
          </div>

        </div> 
    </div>
  )
}

export default Cart
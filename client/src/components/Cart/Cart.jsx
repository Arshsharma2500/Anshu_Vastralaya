import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import CartItem from './CartItem'

function Cart() {

  

  return (
    <div className='mx-auto max-w-7xl bg-gray-200'>
        <div className='flex flex-wrap h-max'>

          <div className='bg-gray-200 w-2/3 p-8 flex flex-col gap-4'>
  
            <img src={Logo} className='w-16 rounded'></img>
            <h2 className='font-serif text-xl font-medium'>Shopping cart</h2>
            <CartItem />
            <CartItem />
            <CartItem />

          </div>

          <div className='bg-gray-300 w-1/3 p-4'>
                <h2>Summary</h2>
          </div>

        </div> 
    </div>
  )
}

export default Cart
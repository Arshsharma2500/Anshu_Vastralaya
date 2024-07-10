import React from 'react'

function Summary() {
  return (
    <div className='flex flex-col'>
        {/* add particular cart for particular div  */}
        <hr
        style={{
        background: 'black',
        color: 'black',
        height: '2px',
        }}
        />

        <div className='flex flex-wrap justify-between py-4 font-medium font-serif text-lg'>
          <p>ITEMS 3</p>
          <p>₹ 4004</p>
        </div>

        <div className='flex flex-col'>
          <label className='font-medium font-serif text-lg underline underline-offset-4'>Address</label>
          <textarea className='p-1 my-4 rounded border border-solid border-black h-48'
          placeholder='House name, House no, locality, city, state, country'></textarea>
        </div>

        <hr
        style={{
        background: 'black',
        color: 'black',
        height: '2px',
        marginTop: '4vh',
        marginBottom: '8vh'
        }}
        />

        {/* Total Price */}
        <div className='flex flex-wrap justify-between py-4 font-medium font-serif text-lg'>
          <p>TOTAL PRICE</p>
          <p>₹ 4004</p>
        </div>

        {/* proceed to pay button  */}
        <button className='mt-4'>
          <div class="box-1 active:bg-slate-300">
            <div class="btn btn-one text-center">
              <span>Proceed To Pay</span>
            </div>
          </div>
        </button>

    </div>
  )
}

export default Summary
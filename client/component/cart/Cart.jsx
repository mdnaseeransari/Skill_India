import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";

const Cart = () => {
  return (
    <div className='bg-primary flex flex-col items-center justify-center grow p-6 sm:p-10 gap-4'>
      
      <FaCartArrowDown className='text-secondary text-6xl sm:text-7xl md:text-8xl' />
      
      <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl text-center text-primary'>
        Your cart is empty
      </h1>
      
      <h2 className='text-secondary text-base sm:text-lg md:text-xl text-center max-w-lg'>
        Looks like you haven't added any courses to your cart yet.
      </h2>
      
      <button className='bg-accent-primary px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-white text-base sm:text-lg md:text-xl'>
        Browse Courses
      </button>

    </div>
  )
}

export default Cart;

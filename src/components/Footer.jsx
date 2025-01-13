import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    
    <div className='md:mx-10'>
      
      <div className='flex flex-col sm:grid grid-cols-1 sm:grid-cols-[2fr,1fr,1fr] gap-10 my-10 mt-40 text-sm'>
        {/* ------------ Left Section ----------- */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
             Prescripto is your trusted partner in simplifying healthcare. We connect patients with healthcare providers, ensuring seamless and efficient services tailored to your needs.
          </p>
          <div className='mt-5 flex items-center gap-3'>
            <a href='https://www.linkedin.com/in/harsh-singh-3779b0284/'>
                <img src="src\assets\linkedin_logo.png" alt="" className='w-8 h-8 flex justify-center items-center' />
            </a>
            <a href='https://www.instagram.com/harsh_s_rajawat/'>
                <img src="src\assets\instagram_logo.png" alt="" className='w-8 h-8 flex justify-center items-center' />
            </a>
          </div>
        </div>


        {/* ------------ Middle Section ----------- */}
        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='hover:text-indigo-600 cursor-pointer transition-all' route>Home</li>
            <li className='hover:text-indigo-600 cursor-pointer transition-all'>About Us</li>
            <li className='hover:text-indigo-600 cursor-pointer transition-all'>Contact Us</li>
            <li className='hover:text-indigo-600 cursor-pointer transition-all'>Privacy Policy</li>
          </ul>
        </div>

        {/* ------------ Right Section ----------- */}
        <div>
          <p className='text-xl font-medium mb-5'>Get in Touch</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='hover:text-indigo-600 cursor-pointer transition-all'>+90 xxxxx-xxxxx</li>
            <li className='hover:text-indigo-600 cursor-pointer transition-all'>dummy@gmail.com</li>
          </ul>
          <form className='mt-5'>
            <input
              type='email'
              placeholder='Subscribe to our newsletter'
              className='w-full p-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400'
            />
            <button
              type='submit'
              className='w-full mt-3 bg-gray-800 text-white py-2 rounded-md hover:bg-indigo-600 transition-all'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* --------- Bottom Section --------- */}
      <div>
        <hr className='mb-5' />
        <p className='py-5 text-sm text-center '>
          Copyright © 2024 Prescripto - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

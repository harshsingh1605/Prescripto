import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="p-5 max-w-4xl mx-auto bg-white ">
      {/* <div className="flex flex-col md:flex-row items-center gap-5"> */}

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm '>

        <img className='w-full md:max-w-[360px] rounded-lg' src={assets.contact_image} alt="Contact Us" />

        <div className='flex flex-col justify-center items-start gap-6 '>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>Prescripto Headquarters <br /> 123 Healthcare Lane, Chennai, India</p>
          <p className='text-gray-500 '>Tel: <span className='hover:text-indigo-600'>(+91) 9800-40010</span> <br />Email: <span className='hover:text-indigo-600'>support@prescripto.com</span> </p>
          <p className='font-semibold text-lg text-gray-600'>JOIN OUR TEAM</p>
          <p className='text-gray-500'>We’re always looking for talented individuals. Explore exciting opportunities and become part of our growing family.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-indigo-600 hover:text-white transition-all duration-500 cursor-pointer'>Explore Careers</button>
        </div>
      </div>

    </div>
  );
};

export default Contact;

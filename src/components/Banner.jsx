import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary text-white rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Book Appointment<br />With 100+ Trusted Doctors
        </p>

        <button
          onClick={() => {
            navigate('/login');
            window.scrollTo(0, 0);
          }}
          className="rounded-full bg-white text-gray-600 py-3 px-8 flex items-center gap-2 font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Create Account <img className="w-3" src={assets.arrow_icon} alt="Arrow Icon" />
        </button>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 relative">
        <img
          src={assets.appointment_img}
          alt="Appointment Banner"
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Banner;

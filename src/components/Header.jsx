import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary text-white rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw]">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>

        <div className="flex flex-col md:flex-row items-start gap-3 text-sm font-light">
          <img src={assets.group_profiles} alt="Group of Profiles" className="w-28" />
          <p className="hidden sm:block">
            Simply browse through our extensive list of trusted doctors, <br />
            schedule your appointment hassle-free.
          </p>
        </div>

        <a
          href="#speciality"
          className="rounded-full bg-white text-gray-600 py-3 px-8 flex items-center gap-2 font-semibold shadow-lg hover:scale-105 transition-all duration-300"
        >
          Book Now <img className="w-3" src={assets.arrow_icon} alt="Arrow Icon" />
        </a>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 relative">
        <img
          src={assets.header_img}
          alt="Healthcare Header"
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Header;

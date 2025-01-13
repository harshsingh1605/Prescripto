import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    return (
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-300 cursor-pointer px-4 md:px-8">
            {/* Logo */}
            <img 
                onClick={() => navigate('/')} 
                className="w-32 md:w-44 cursor-pointer hover:opacity-90 transition"
                src={assets.logo} 
                alt="Luma Space Logo"
            />

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
                {['HOME', 'DOCTORS', 'ABOUT', 'CONTACT'].map((item, index) => (
                    <NavLink
                        to={`/${item.toLowerCase().replace(' ', '-')}`}
                        key={index}
                        className="relative group"
                    >
                        <li className="py-1 cursor-pointer hover:text-primary transition">
                            {item}
                        </li>
                        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-300"></span>
                    </NavLink>
                ))}
            </ul>

            {/* Profile and Authentication Section */}
       <div className="flex item-center gap-4">
                {token ? (
                    // Agar user logged in hai to profile aur logout ka option dikhana
                    <div className="flex items-center gap-3 cursor-pointer group relative">
                        <img
                            className="w-8 h-8 rounded-full object-cover" // Profile pic ke liye styling
                            src={assets.profile_pic} // Profile picture ka source
                            alt=""
                        />
                        <img
                            className="w-2.5 transform transition group-hover:rotate-180" // Dropdown arrow ke liye styling
                            src={assets.dropdown_icon} // Dropdown icon ka source
                            alt=""
                        />
                        {/* Dropdown menu */}
                        <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                            <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                                {/* Profile options */}
                                <p
                                    onClick={() => navigate('/my-profile')} // Profile page par navigate karna
                                    className="cursor-pointer hover:text-black transition"
                                >
                                    My Profile
                                </p>
                                <p
                                    onClick={() => navigate('/my-appointments')} // Appointments page par navigate karna
                                    className="cursor-pointer hover:text-black transition"
                                >
                                    My Appointments
                                </p>
                                <p
                                    onClick={() => setToken(false)} // Logout ke liye token ko false karna
                                    className="cursor-pointer hover:text-black transition"
                                >
                                    Logout
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Agar user login nahi hai to "Create Account" ka button dikhana
                    <button
                        onClick={() => navigate('/login')} // Login page par navigate karna
                        className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition hidden md:block"
                    >
                        Create Account
                    </button>
                )}

                {/* Mobile Menu Toggle */}
                <img 
                    onClick={() => setShowMenu(true)} 
                    className="w-6 md:hidden cursor-pointer" 
                    src={assets.menu_icon} 
                    alt="Menu Icon" 
                />

                {/* Mobile Menu */}
                {showMenu && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                        <div className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg p-6">
                            <div className="flex items-center justify-between mb-6">
                                <img 
                                    className="w-32" 
                                    src={assets.logo} 
                                    alt="Luma Space Logo" 
                                />
                                <img 
                                    onClick={() => setShowMenu(false)} 
                                    className="w-6 cursor-pointer" 
                                    src={assets.cross_icon} 
                                    alt="Close Icon" 
                                />
                            </div>
                            <ul className="flex flex-col gap-4 font-medium text-gray-700">
                                {['HOME', 'DOCTORS', 'ABOUT', 'CONTACT'].map((item, index) => (
                                    <NavLink
                                        to={`/${item.toLowerCase().replace(' ', '-')}`}
                                        key={index}
                                        className="py-2 hover:text-primary transition"
                                        onClick={() => setShowMenu(false)}
                                    >
                                        {item}
                                    </NavLink>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;

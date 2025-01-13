import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b text-lg">My Appointments</p>
      <div className="mt-6 space-y-6">
        {doctors.slice(0, 3).map((item, index) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-[1fr_2fr_auto] gap-4 p-4 border rounded-lg shadow-sm bg-white"
            key={index}
          >
            <div className="flex justify-center items-center">
              <img
                className="w-36 sm:w-32 sm:h-32 rounded-lg object-cover bg-indigo-50"
                src={item.image}
                alt="Doctor"
              />
            </div>
            <div>
              <p className="font-medium text-lg text-neutral-800">{item.name}</p>
              <p className="text-sm text-neutral-500">{item.speciality}</p>
              <div className="mt-2 text-sm text-neutral-700">
                <p className="font-medium">Address:</p>
                <p>{item.address.line1}</p>
                <p>{item.address.line2}</p>
              </div>
              <p className="mt-2 text-sm text-neutral-700">
                <span className="font-medium">Date & Time:</span> 01, Dec, 2025 | 8:45 PM
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center sm:justify-start sm:items-end">
            
              
              <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-500">Pay Online</button>
              <button className="px-4 py-2 text-sm font-medium text-red-600 border border-red-600 rounded hover:bg-red-50">Cancel</button>
            </div>
          </div> 
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;

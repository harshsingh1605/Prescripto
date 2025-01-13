import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate(); // Fixed missing `navigate` hook
  const [ShowFilter, setShowFilter] = useState(false); 
  const { doctors } = useContext(AppContext); // Destructure `doctors` at the top
  const [filterDoc, setFilterDoc] = useState([]);

  const applyFilter = () => {
    if (doctors) { // Ensure `doctors` exists before filtering
      if (speciality) {
        setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
      } else {
        setFilterDoc(doctors);
      }
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800">Doctors</h1>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${ShowFilter? ' bg-primary text-white': ''}`} onClick={()=>setShowFilter(prev=>!prev)}>Filters</button>
        <div className={` flex-col gap-4 text-sm text-gray-600 ${ShowFilter ? 'flex' : 'hidden sm:flex'}`} >
          {['Gynecologist', 'General physician', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map((spec) => (
            <p
              key={spec}
              onClick={() =>
                speciality === spec ? navigate('/doctors') : navigate(`/doctors/${spec}`)
              }
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                speciality === spec ? 'bg-indigo-100 text-black' : ''
              }`}>
              {spec}
            </p>
          ))}
        </div>

        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              key={index}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img className="bg-blue-50" src={item.image} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;

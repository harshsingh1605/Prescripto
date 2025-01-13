import React from 'react'
import { assets } from '../assets/assets'

const AdminPanel = () => {
  return (
    <div>
      {/* ------------ Left Side ---------- */}
      <div className="flex flex-col grid grid-  items-start gap-5 mt-5">
        <p className=''>
            <img src={assets.verified_icon} alt="" />
            Dashboard
        </p>
        <p>
            <img src={assets.verified_icon} alt="" />
            Appointments
        </p>
        <p>
            <img src={assets.verified_icon} alt="" />
            Add Doctor
        </p>
        <p>
            <img src={assets.verified_icon} alt="" />
            Doctor List
        </p>
      </div>
    </div>
  )
}

export default AdminPanel

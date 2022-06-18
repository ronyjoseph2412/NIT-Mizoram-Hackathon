import React from 'react'
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className='py-5 px-10'>
        <div className='flex flex-row justify-between items-center'>
          <Link to="/"><img src="./assets/logo.svg" alt="" className='h-28 w-40' /></Link>
          <div className='flex flex-row items-center space-x-10'>
            <Link to="/" className='cursor-pointer font-semibold'>Home</Link>
            <Link to="/doctor" className='cursor-pointer font-semibold'>Doctor</Link>
            <Link to="/pharmacy" className='cursor-pointer font-semibold'>Pharmacy</Link>
            <Link to="/services" className='cursor-pointer font-semibold'>Services</Link>
            <Link to="/diagnosis" className='cursor-pointer font-semibold'>Diagnosis</Link>
          </div>
          <div className='flex flex-row items-center space-x-6'>
            {/* If not Logged in */}
            {/* <div className=' cursor-pointer'>Sign in</div>
            <div className='bg-[#00A651] p-2 rounded-xl cursor-pointer text-white'>Sign up</div> */}
            {/* If Logged In */}
            <div className='cursor-pointer'><img src="./assets/bell.svg" alt="" /></div>
            <div className='cursor-pointer'><img src="./assets/profile.svg" alt="" /></div>
          </div>
        </div>
    </div>
  )
}

import React, { useEffect } from 'react'
import { Link,useLocation } from "react-router-dom";
export const Navbar = (props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    props.path(pathname)

  }, [])
  return (
    <div className='py-5 px-10'>
        <div className='flex flex-row justify-between items-center'>
          <Link to="/"><img src="./assets/logo.svg" alt="" className='h-28 w-40' /></Link>
          <div className='flex flex-row items-center space-x-10'>
            <Link to="/" className={`${pathname === '/' ?'text-[#00A651]':'text-black' } cursor-pointer font-semibold`}>Home</Link>
            <Link to="/doctor" className={`${pathname === '/doctor' ?'text-[#00A651]':'text-black' }  cursor-pointer font-semibold`}>Doctor</Link>
            <Link to="/pharmacy" className={`${pathname === '/pharmacy' ?'text-[#00A651]':'text-black' }  cursor-pointer font-semibold`}>Pharmacy</Link>
            <Link to="/services" className={`${pathname === '/services' ?'text-[#00A651]':'text-black' }  cursor-pointer font-semibold`}>Services</Link>
            <Link to="/diagnosis" className={`${pathname === '/diagnosis' ?'text-[#00A651]':'text-black' }  cursor-pointer font-semibold`}>Diagnosis</Link>
          </div>
          
            {/* If not Logged in */}
            {pathname === '/' ?  <div className='flex flex-row items-center space-x-6'><Link to='/login' className=' cursor-pointer'>Sign in</Link>
            <div className='bg-[#00A651] p-2 rounded-xl  text-white cursor-not-allowed disabled'>Sign up</div></div> :<div className='flex flex-row items-center space-x-6'> <div className='cursor-pointer'><img src="./assets/bell.svg" alt="" /></div>
            <div className='cursor-pointer'><img src="./assets/profile.svg" alt="" /></div></div>}
           
            {/* If Logged In */}
            
          
        </div>
    </div>
  )
}

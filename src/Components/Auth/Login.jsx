import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const Login = (props) => {
    const navigate = useNavigate()
    const { pathname } = useLocation();
  useEffect(() => {
    props.path(pathname)
  }, [])
  const logincheck = ()=>{
    navigate("/services");
  }
  return (
    <div className='flex flex-col relative h-screen w-screen space-y-8 bg-[#E5E5E5] justify-center items-center'>
        <div className=''>
            <img src="./assets/logo.svg" className='h-40 w-60' alt="" />
        </div>
        <div className='text-2xl text-[#8883F0]'>
            Welcome back!
        </div>
        <div className='flex flex-col space-y-2 w-[360px] h-[60px]'>
            <div className='text-[#979797]'>Username</div>
            <input type="text" className='p-2 border border-[#979797] rounded-xl' required/>
        </div>
        <div className='flex flex-col space-y-2 w-[360px] h-[60px] mt-1'>
            <div className='text-[#979797]'>Password</div>
            <input type="password" className='p-2 border border-[#979797] rounded-xl' required/>
            
        </div>
            <div className='text-[#979797] absolute right-[36%] top-[66%] cursor-pointer'>Forgot Password?</div>
            <br></br>
        <button onClick={logincheck} className='mx-auto bg-[#00A651] cursor-pointer rounded-[30px] py-2 mt-[100px] w-[200px] flex justify-center items-center text-xl font-bold text-white'>
                        Login
            </button>
    </div>
  )
}

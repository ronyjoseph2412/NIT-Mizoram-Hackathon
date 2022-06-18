import React from 'react'

export const DoctorCard = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center relative'>
        <div className=''>
            <img src="./assets/doctorsingle.svg" className='rounded-xl ' alt="" />
        </div>
        <div className='absolute bg-[#00A651] flex flex-col px-10 py-10 rounded-xl top-[70%] text-white justify-center items-center w-[350px]'>
            <div className='text-2xl font-semibold'>Dr.Smith</div>
            <div className='text-lg font-normal '>Heart Surgeon</div>
            <div className='text-lg font-normal flex flex-row items-center space-x-2'><div className=''><img src="./assets/map.svg" alt="" /></div>National hospital</div>
        </div>
    </div>
    <div className='px-16 pt-[150px] flex flex-col space-y-3'>
        <div className='text-xl font-semibold'>
            About
            <br></br>
            <div className='text-md font-extralight w-9/12'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi quo cum eaque cumque fugit ipsa, ea cupiditate ipsum, expedita praesentium, voluptate nihil veniam eligendi
            </div>
        </div>
        <div className='text-xl font-semibold'>
            Availability
        </div>
        
        </div>
        <div className='bg-[#00A651] flex my-4 px-10 py-2 rounded-xl  text-white justify-center items-center w-[350px] mx-auto'>
            Appointment
        </div>
    
    </>
  )
}

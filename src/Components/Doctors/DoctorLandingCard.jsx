import React from 'react'
import { Link } from 'react-router-dom'

export const DoctorLandingCard = () => {
    return (
        <div className='grid grid-cols-3 border bg-[#ffffff] rounded-xl p-4'>
            <div className='h-[97px] w-[97px] col-span-1'>
                <img src="./assets/doctor1.svg" className='' alt="" />
            </div>

            <div className='flex flex-col col-span-2 space-y-2'>
                <div className='flex flex-row justify-between items-center'>
                    <Link to="/doctorsingle" className='text-2xl cursor-pointer'>
                        Dr.Smith
                    </Link>

                    <div className=''><img src="./assets/stars.svg" alt="" /></div>

                </div>
                <div className='whitespace-pre'>Heart Surgeon- National hospital</div>
                <div className=''><span><img src="./assets/alarm.svg" className='inline mb-0.5 mr-1' alt="" /></span>10:00 AM - 12:00 PM</div>

                <div>

                </div>
                <div className='bg-[#00A651] cursor-pointer rounded-[30px] h-[45px] w-[240px] mt-8 flex justify-center items-center text-xl font-bold text-white'>
                    Book Appointment
                </div>
            </div>

        </div>
    )
}

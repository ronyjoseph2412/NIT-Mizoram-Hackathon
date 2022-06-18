import React from 'react'
import { DoctorLandingCard } from './DoctorLandingCard'

export const Doctor = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-2 place-content-center place-items-center'>
                <div className='flex flex-col space-y-4'>
                    <div className='text-4xl font-semibold '>
                        Virtual healthcare <br></br>
                        for you
                    </div>
                    <div className='text-2xl text-[#7D7987]'>
                        Mydoc provides progressive, and affordable <br></br>
                        healthcare, accessible via web and online <br></br>
                        for everyone.
                    </div>
                    <div className='bg-[#00A651] cursor-pointer rounded-[55px] h-[56px] w-[200px] mt-8 flex justify-center items-center text-xl font-bold text-white'>
                        Consult Today
                    </div>
                </div>
                <div className='h-[600px] w-[500px]'>
                    <img src="./assets/doctorlanding.svg" alt="" />
                </div>
            </div>
            <div className='pt-[5px] px-20'>
                <div className='text-4xl font-medium'>
                    Top Doctors
                </div>
                <div className='grid grid-cols-2 place-content-center place-items-center pt-7 w-[100%] gap-y-5'>
                    <DoctorLandingCard />
                    <DoctorLandingCard />
                    <DoctorLandingCard />
                    <DoctorLandingCard />
                </div>
            </div>
        </div>
    )
}

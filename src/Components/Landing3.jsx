import React from 'react'

export const Landing3 = () => {
    return (
        <div className='pt-[380px] overflow-hidden'>

            <div className='pl-10 grid grid-cols-2 pt-10 gap-x-12'>
                <div>
                    <img src="./assets/landing3.svg" alt="" />
                </div>
                <div className='flex flex-col space-y-4 px-4'>
                    <div className='text-lg text-[#00A651] font-bold'>Make a Shedule</div>
                    <div className='text-3xl font-semibold'>
                        Make a schedule in advance<br></br>
                        with the available doctor
                    </div>
                    <div className='text-md w-8/12 text-[#696969] font-normal'>
                        Healthcare is a very painful process, especially if you’re not taking care
                        of your health and having regular check-ups. HealhtyCarely makes it
                        easier for everyone to schedule a doctor’s appointment.
                    </div>
                    <div className='flex flex-row space-x-2 text-lg text-[#121212] items-center font-semibold'>
                        <div><img src="./assets/ok.svg" alt="" /></div>
                        <div>Make a schedule online is easy</div>
                    </div>
                    <div className='flex flex-row space-x-2 text-lg text-[#121212] items-center font-semibold'>
                        <div><img src="./assets/ok.svg" alt="" /></div>
                        <div>Easy to connect with doctor</div>
                    </div>
                <br></br>
                    <div className='bg-[#00A651] w-[250px] h-[50px] text-lg flex text-white justify-center items-center rounded-xl cursor-pointer'>
                    Make Schedule Now!
                    </div>
                </div>

            </div>
        </div>

    )
}

import React from 'react'

export const Landing2 = () => {
    return (


        <div className='pt-[100px] grid grid-cols-3 px-10'>
            <div className='col-span-2 flex flex-col space-y-4'>
                <div className='text-lg text-[#00A651] font-bold'>Find a Doctor</div>
                <div className='text-3xl font-semibold'>
                    Find the right doctor according <br></br> to your complaint
                </div>
                <div className='text-md w-8/12 text-[#696969] font-normal'>
                    Healthcare is a very painful process, especially if you’re not taking care
                    of your health and having regular check-ups. HealhtyCarely makes it
                    easier for everyone to schedule a doctor’s appointment.
                </div>
                <div className='flex flex-row space-x-2 text-lg text-[#121212] items-center font-semibold'>
                    <div><img src="./assets/ok.svg" alt="" /></div>
                    <div>100% designed to help you find the right doctor for you</div>
                </div>
                <div className='flex flex-row space-x-2 text-lg text-[#121212] items-center font-semibold'>
                    <div><img src="./assets/ok.svg" alt="" /></div>
                    <div>900 Specialist Doctor for you</div>
                </div>
                <br></br>
                <div className='bg-[#00A651] w-[250px] h-[50px] text-lg flex text-white justify-center items-center rounded-xl cursor-pointer'>
                    See the Doctors
                </div>
            </div>
            <div className='col-span-1 relative' id="unique">
                <div className='pr-10'>
                    <img src="./assets/lady2.svg" alt="" className='h-[550px] w-[320px]  z-10 scale-150 absolute' />
                </div>
                <div className='absolute z-0 top-[60%] -right-[10%]'>
                    <img src="./assets/circle2.svg" alt="" className='scale-150' />
                </div>
                <div className='absolute -top-[5%] -left-[70%]'>
                    <img src="./assets/doctorcard1.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

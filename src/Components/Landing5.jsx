import React from 'react'

export const Landing5 = () => {
    return (
        <div className='flex flex-col pt-[100px]'>
            <div className='text-3xl font-semibold text-center'>
                Our Patients Feedback about us
            </div>
            <div className='w-11/12 bg-[#EDF1FF] h-[350px] mt-[20px] relative'>
                <div className='top-[10%] absolute left-[3%]'>
                    <img src="./assets/feedback.svg" alt="" />
                </div>
                <div className='absolute top-[20%] left-[48%] text-2xl'>
                    “MyDoc is an website and mobile app
                    for you to feel better or get medical help.
                    We offer you a 24/7 doctor service with no
                    appointment needed”
                </div>
                <div className='absolute top-[110%] left-[50%]'>
                    <div className='text-xl font-semibold'>Aman Singh</div>
                    <div className='text-lg'>Student at Cambridge University</div>
                </div>
            </div>

        </div>
    )
}

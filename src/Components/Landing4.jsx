import React from 'react'

export const Landing4 = () => {
    return (
        <div className='pt-[75px] flex flex-col justify-center items-center space-y-4'>
            <div className='text-lg text-[#00A651] font-bold'>Our Rating</div>
            <div className='text-4xl font-semibold text-center tracking-wider'>
                We’re employee benefit at<br></br>
                7500+ hospital
            </div>
            <div className='flex flex-row justify-center items-center pt-10 space-x-8'>

                <div className='h-[190px] w-[310px] tracking-wide space-y-5 flex flex-col rounded-b-lg border-t-4 shadow-md border-t-[#00A651] items-center justify-center'>
                    <div className='text-5xl font-bold'>900+</div>
                    <div className='text-2xl font-semibold'>Verified Specialist</div>
                    <div className='text-xl text-[#696969]'>Highly Verified</div>
                </div>


                <div className='h-[190px] w-[310px] tracking-wide space-y-5 flex flex-col rounded-b-lg border-t-4 shadow-md border-t-[#00A651] items-center justify-center'>
                    <div className='text-5xl font-bold'>45000+</div>
                    <div className='text-2xl font-semibold'>Happy Customers</div>
                    <div className='text-xl text-[#696969]'>High Performance</div>
                </div>


                <div className='h-[190px] w-[310px] tracking-wide space-y-5 flex flex-col rounded-b-lg border-t-4 shadow-md border-t-[#00A651] items-center justify-center'>
                    <div className='text-5xl font-bold'>99.7%</div>
                    <div className='text-2xl font-semibold'>Positive Feedback</div>
                    <div className='text-xl text-[#696969]'>Customer Approval</div>
                </div>


            </div>


        </div>
    )
}

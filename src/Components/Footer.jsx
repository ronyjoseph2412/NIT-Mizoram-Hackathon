import React from 'react'

export const Footer = () => {
  return (
    <div className='pt-[150px] pb-[20px] px-4'>
        <div className='grid grid-cols-3 place-items-center place-content-center'>
            <div className='col-span-1 flex flex-col space-y-3'>
                <div className='text-4xl font-semibold tracking-wide'>
                    <span className='text-[#00A651]'>My</span>
                    <span className='text-black'>Doc</span>
                </div>
                <div className='text-md tracking-tight'>
                This free App provides a solution to your health needs by offering
you a one-stop access to complete information about various
medical checkups. This App carries simple tips and advice to
help you maintain a healthy lifestyle.
                </div>
            </div>
            <div className='col-span-2 place-content-center'>
                <div className='grid grid-cols-4 gap-x-8'>
                    <div className='flex flex-col space-y-3'>
                        <div className='text-xl font-semibold tracking-wide'>Overview</div>
                        <div className='flex flex-col text-lg font-normal'>
                            <div>Checking Health</div>
                            <div>Find Doctor</div>
                            <div>Make a Schedule</div>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <div className='text-xl font-semibold tracking-wide'>Company</div>
                        <div className='flex flex-col text-lg font-normal'>
                            <div>Home</div>
                            <div>About</div>
                            <div>Services</div>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <div className='text-xl font-semibold tracking-wide'>Explore</div>
                        <div className='flex flex-col text-lg font-normal'>
                            <div>Terms and Conditions</div>
                            <div>Privacy Policy</div>
                            <div>Cookies</div>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <div className='text-xl font-semibold tracking-wide'>Social Media</div>
                        <div className='flex flex-row space-x-3 text-lg font-normal items-center '>
                            <div><img src="./assets/social1.svg" alt="" /></div>
                            <div><img src="./assets/social2.svg" alt="" /></div>
                            <div><img src="./assets/social3.svg" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

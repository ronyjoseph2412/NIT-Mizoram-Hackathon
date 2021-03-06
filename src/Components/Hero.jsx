import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';

export const Hero = (props) => {

    const { pathname } = useLocation();
  useEffect(() => {
    props.path(pathname)
  }, [])
    return (
        <div className='pt-20 overflow-hidden'>
            <div className='grid grid-cols-3'>
                <div className='col-span-2 flex flex-col px-16 space-y-4'>
                    <div className='text-5xl tracking-wide'>
                        Medical Care Now <br></br>
                        Simplified For <span className='text-[#00A651] font-bold'>Everyone</span>
                    </div>
                    <div className='text-xl text-[#696969]'>Health carely is a new way to get health insurance quotes. We offer tools similar to those
                        provided by insurance companies for free and prices are based on donations and not
                        restrictive health plan networks.
                        </div>
                    <div className='bg-[#00A651] py-3 px-10 w-fit text-lg text-white rounded-xl'>
                        Contact us
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className='pr-10'>
                        <img src="./assets/lady.svg" alt="" className='h-[570px] w-[320px] relative z-10 scale-150' />
                    </div>
                    <div className='absolute z-0 top-[40%] -right-[10%]'>
                        <img src="./assets/circle.svg" alt="" className='scale-95' />
                    </div>
                    <div className='absolute bottom-[23%] left-[45%]'>
                        <div className='w-[154px] h-[198px] flex flex-col shadow-md bg-white justify-center items-center rounded-lg space-y-2'>
                            <div className='h-[50px] w-[50px] rounded-full border-black'>
                                <img src="./assets/doctorcard.svg" className='rounded-full scale-125' alt="" />
                            </div>
                            <div className=''>
                                <div className='text-lg'>Dr.Shimanta</div>
                                <div>Skin Specialist</div>
                            </div>
                            <Link to='/doctor' className='bg-[#00A651] px-2 py-1 text-md cursor-pointer text-white rounded-lg'>
                    Make Schedule
                    </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

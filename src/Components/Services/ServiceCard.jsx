import React from 'react'

export const ServiceCard = ({service_detail}) => {
  return (
    <div className='w-[350px] h-[354px]  rounded-[20px]  flex flex-col px-6 py-10 space-y-5 special-shadow bg-white border'>
                    <div>
                        <img src={`./assets/${service_detail.img}.svg`} alt="" />
                    </div>
                    <div className='px-2 pt-[25px] flex flex-col space-y-3'>
                        <div className='text-xl font-bold'>{service_detail.heading}</div>
                        <div className='text-lg text-[#7D7987] '>
                    {service_detail.text}        
                        </div>
                    </div>
                </div>
  )
}

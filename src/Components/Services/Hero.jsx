import React from 'react'
import { ServiceCard } from './ServiceCard'
// Login Must
export const Hero = () => {
    const service =[
        {
            "img":"service1",
            "heading":"Search doctor",
            "text":"Choose your doctor from thousands of specialist, general, and trusted hospitals"
        },
        {
            "img":"service2",
            "heading":"Online pharmacy",
            "text":"Buy  your medicines with our mobile application with a simple delivery system"
        },
        {
            "img":"service3",
            "heading":"Consultation",
            "text":"Free consultation with our trusted doctors and get the best recomendations"
        },
        {
            "img":"service4",
            "heading":"Details info",
            "text":"Free consultation with our trusted doctors and get the best recomendations"
        },
        {
            "img":"service5",
            "heading":"Emergency care",
            "text":"You can get 24/7 urgent care for yourself or your children and your lovely family"
        },
        {
            "img":"service6",
            "heading":"Tracking",
            "text":"Track and save your medical history and health data "
        },
    ]
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col justify-center items-center space-y-5 relative z-10'>
                <div className='text-3xl'>Our Services</div>
                <div className='h-[1.5px] w-[7%] bg-black'></div>
                <div className='text-[#7D7987] w-8/12 text-center'>
                    We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health
                </div>
            </div>
            <div className='w-[100%] pt-[60px] px-10 py-5 z-10'>
                <div className='grid grid-cols-3  place-content-center place-items-center gap-y-20'>
                    {service.map((service_detail)=>{
                        return(<ServiceCard service_detail={service_detail} />)
                    })}
                </div>
            </div>
            <div className='absolute z-0 top-[33%] w-[38%]'>
                <img src="./assets/servicebg.svg" alt="" />
            </div>
            <div className='absolute z-0 top-[67%] right-[2%]'>
                <img src="./assets/serviceelement.svg" alt="" />
            </div>
        </div>
    )
}

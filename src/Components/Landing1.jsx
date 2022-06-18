import React from 'react'
import { Landing1card } from './Landing1card'

export const Landing1 = () => {
    const card = [
        {
            "img":"card1",
            "heading":"Check health complaints",
            "text":"Check the disease so you can easily choose the right specialist",
        },
        {
            "img":"card2",
            "heading":"Choose doctor Specialist",
            "text":"Choose a specialist according to your disease complaints",
        },
        {
            "img":"card3",
            "heading":"Make a Schedule",
            "text":"Make a schedule with the doctor concerned so you can start the examination",
        },
        {
            "img":"card4",
            "heading":"Get your Solutions",
            "text":"After conducting an examination with a specialist we can help find the right healing method",
        },
    ]
    return (
        <div className='flex flex-col justify-center items-center pt-10 overflow-hidden'>
            <div className='text-lg text-[#00A651] font-bold'>
                Fast Solutions
            </div>
            <div className='font-bold text-3xl pt-2'>
                step by step to get your solutions
            </div>
            <div className='flex flex-row justify-center items-center pt-8 space-x-10'>
                {card.map((carddetails)=>{
                    return(<Landing1card card = {carddetails} />)
                })}

            </div>

        </div>
    )
}

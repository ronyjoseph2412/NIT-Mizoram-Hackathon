import React from 'react'

export const DietCard = ({food}) => {
    return (
        <div className='flex flex-col border rounded-2xl bg-white px-4 py-2 shadow-md drop-shadow-md hover:shadow-xl hover:drop-shadow-xl cursor-pointer transition-shadow duration-150'>
            <div><img src={`./assets/${food.img}.svg`} alt="" /></div>
            <div className='text-xl font-semibold'>
            {food.food}
            </div>
            <div className='text-lg text-[#ABAFB3]'>{food.detail}</div>
            <div className='text-md text-[#000]'>{food.kcal}</div>
        </div>
    )
}

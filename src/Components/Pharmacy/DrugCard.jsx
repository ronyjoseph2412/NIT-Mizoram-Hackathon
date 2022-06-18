import React from 'react'

export const DrugCard = ({drug}) => {
  return (
    <div className='flex flex-col justify-center items-center space-y-3 cursor-pointer'>
        <div className='h-20 w-20 bg-[#C4C4C4] rounded-xl'></div>
        <div className='hover:underline hover:underline-offset-1 text-xl'>{drug}</div>
    </div>
  )
}

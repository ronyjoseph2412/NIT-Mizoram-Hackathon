import React from 'react'

export const Landing1card = (props) => {
  return (
    <div className='h-[220px] w-[270px] flex flex-col rounded-b-lg border-t-4 border-b border-x my-2 shadow-md border-t-[#00A651] relative'>
                    <div className='absolute left-[8%] top-[18.33%] '>
                        <img src={`./assets/${props.card.img}.svg`} alt="" />
                    </div>
                    <div className='flex flex-col absolute left-[8%] top-[50.0%] space-y-2'>
                        <p className='text-lg font-bold'>{props.card.heading}</p>
                        <p className='text-sm text-[#696969]'>{props.card.text}</p>
                    </div>
                </div>
  )
}

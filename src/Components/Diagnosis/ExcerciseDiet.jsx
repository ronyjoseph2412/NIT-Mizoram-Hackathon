import React from 'react'
import { SVG } from './SVG';
export const ExcerciseDiet = ({color}) => {
    
    return (
        <div className={`bg-[${color}] bg-opacity-25 w-[185px] px-3 py-5 rounded-xl flex flex-col space-y-3`}>
            <div>
                <SVG color={color} />
            </div>
            <div className={`text-black font-semibold`}>
                Upper back Excercise
            </div>
            <div className='text-[#4B4C4D]'>
                4 Weeks Program
            </div>
        </div>
    )
}

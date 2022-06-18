import React from 'react'

export const PharmacyCard = (props) => {
  return (
    <div className='flex flex-row justify-center items-center border rounded-xl space-x-4 px-2 py-5'>
        <div className='h-20 w-20 bg-[#C4C4C4] rounded-lg cursor-pointer'></div>
        <div className='flex flex-col space-y-2'>
            <div className='text-2xl font-semibold cursor-pointer hover:underline hover:underline-offset-1'>{props.pharmacy.name}</div>
            <div className='text-lg'>
            {props.pharmacy.address}
</div>
<div className='flex flex-row items-center space-x-2'>
    <div><img src="./assets/map.svg" alt="" /></div>
    <div>{props.pharmacy.kms}kms away</div>
</div>
        </div>
    </div>
  )
}

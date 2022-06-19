import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { DrugCard } from './DrugCard'
import { PharmacyCard } from './PharmacyCard'

export const Pharmacy = (props) => {
    
    const { pathname } = useLocation();
  useEffect(() => {
    props.path(pathname)
  }, [])
    const pharmacies = [
        {
            name:"Sita Pharmacy",
            address:"d/9 address, kopal nagar lucknow",
            kms:"4.5"
        },
        {
            name:"Ramu Pharmacy",
            address:"d/9 address, Gopal nagar lucknow",
            kms:"9.5"
        },
    ]
    const drugs = [
        "Vitamins",
        "Anti-Malaria",
        "Pain killers",
        "Antibiotics",
        "COVID-19 Relief"
    ]
  return (
    <div className='flex flex-col'>
        <div className='flex flex-col'>
            <div className='text-3xl text-center'>Pharmacies Nearby</div>
            <div className='grid grid-cols-3 pt-[45px] place-content-center place-items-center gap-y-6 px-10'>
                <PharmacyCard pharmacy = {pharmacies[0]} />
                <PharmacyCard pharmacy = {pharmacies[1]} />
                <PharmacyCard pharmacy = {pharmacies[0]} />
                <PharmacyCard pharmacy = {pharmacies[1]} />
                <PharmacyCard pharmacy = {pharmacies[0]} />
                <PharmacyCard pharmacy = {pharmacies[1]} />
            </div>
            <div className='text-3xl text-center pt-[25px] '>Suggested drugs</div>
            <div className='grid grid-cols-5 place-content-center place-items-center pt-[45px] px-20'>
                {drugs.map((drug)=>{
                    return(<DrugCard drug={drug} />)
                })}
            </div>
        </div>
    </div>
  )
}

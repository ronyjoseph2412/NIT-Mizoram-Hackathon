import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { DietCard } from "./DietCard";
import { ExcerciseDiet } from './ExcerciseDiet';


export const Diagnosis = (props) => {
    const { pathname } = useLocation();
  useEffect(() => {
    props.path(pathname)
  }, [])
  
    const [diet, setdiet] = useState("salads")
    const salads_food = [
        {
            food: "Chopped Salad",
            detail: "Scallions & radish",
            kcal: "250kcal",
            img: "plate"
        },
        {
            food: "Chopped Salad",
            detail: "Scallions & radish",
            kcal: "250kcal",
            img: "plate"
        },
    ]
    const shakes_food = [
        {
            food: "Chocolate Shake",
            detail: "Chocolate Shake",
            kcal: "250kcal",
            img: "shake1"
        },
        {
            food: "Chocolate Shake",
            detail: "Chocolate Shake",
            kcal: "250kcal",
            img: "shake1"
        },
    ]

    const fruits_food = [
        {
            food: "Chocolate Shake",
            detail: "Chocolate Shake",
            kcal: "250kcal",
            img: "fruit1"
        },
        {
            food: "Chocolate Shake",
            detail: "Chocolate Shake",
            kcal: "250kcal",
            img: "fruit2"
        },
    ]
    const vegetable_food = [
        {
            food: "Chocolate Shake",
            detail: "Chocolate Shake",
            kcal: "250kcal",
            img: "vegetable1"
        },
        {
            food: "Chocolate Shake",
            detail: "Chocolate Shake",
            kcal: "250kcal",
            img: "vegetable2"
        },
    ]

    return (
        <div className='flex flex-col px-16 pt-[45px]'>
            <div className='text-3xl '>Recommended Diet Plan</div>
            <div className='flex flex-row pt-[25px] space-x-4'>
                <div className={`rounded-[30px]  flex justify-center items-center ${diet === "salads" ? 'bg-[#00A651] text-white' : 'bg-white text-black border'} cursor-pointer px-4 py-2`} onClick={() => { setdiet("salads") }}>Salads</div>
                <div className={`rounded-[30px]  flex justify-center items-center ${diet === "shakes" ? 'bg-[#00A651] text-white' : 'bg-white text-black border'} cursor-pointer px-4 py-2`} onClick={() => { setdiet("shakes") }}>Shakes</div>
                <div className={`rounded-[30px]  flex justify-center items-center ${diet === "vegetables" ? 'bg-[#00A651] text-white' : 'bg-white text-black border'} cursor-pointer px-4 py-2`} onClick={() => { setdiet("vegetables") }}>Vegetables</div>
                <div className={`rounded-[30px]  flex justify-center items-center ${diet === "fruits" ? 'bg-[#00A651] text-white' : 'bg-white text-black border'} cursor-pointer px-4 py-2`} onClick={() => { setdiet("fruits") }}>Fruits</div>

            </div>
            <div className='grid grid-cols-3 place-content-center place-items-center pt-[25px] w-7/12 gap-x-4 h-[400px]'>
                {diet === "salads" ? (salads_food.map((food_details) => {
                    return (<DietCard food={food_details} />)
                })) : ""}
                {diet === "vegetables" ? (vegetable_food.map((food_details) => {
                    return (<DietCard food={food_details} />)
                })) : ""}
                {diet === "fruits" ? (fruits_food.map((food_details) => {
                    return (<DietCard food={food_details} />)
                })) : ""}
                {diet === "shakes" ? (shakes_food.map((food_details) => {
                    return (<DietCard food={food_details} />)
                })) : ""}
            </div>
            <div className='pt-[45px] flex flex-col space-y-3'>
                <div className='text-3xl '>Excercise Plan</div>
                <div className='text-xl '>Excercise Program</div>
                <div className='grid grid-cols-2 w-5/12 pt-[30px] gap-y-3'>
                    <ExcerciseDiet color={"#F9B853"} className="cursor-pointer bg-[#F9B853]" />
                    <ExcerciseDiet color={"#0659FD"} className="cursor-pointer bg-[#0659FD] " />
                    <ExcerciseDiet color={"#a1f3ae"} className="cursor-pointer bg-[#a1f3ae] " />
                    <ExcerciseDiet color={"#A5A6F64D"} className="cursor-pointer bg-[#A5A6F64D]" />
                </div>
            </div>



        </div>
    )
}

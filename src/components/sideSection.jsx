import React from 'react'
import { TbCategory } from "react-icons/tb";
import { GrGroup } from "react-icons/gr";
import { NavLink } from 'react-router-dom';

function SideSection() {
  return (
    <div className='sideSection w-1/5 py-4 px-3  bg-white'>
        <NavLink to='/category' className={({isActive})=>`${isActive? "bg-btnBlue text-white":" bg-white"}  flex my-auto gap-3 text-btnBlue  py-3 px-2 rounded-md hover:bg-btnBlue hover:text-white transition-all duration-100 ease-in-out mb-2 
        cursor-pointer `} >
            <TbCategory size={25 }/>
            <h1 className='font-semibold text-xl'>Categories</h1>
        </NavLink>
        <NavLink to='/prompts' className={({isActive})=>`${isActive? "bg-btnBlue text-white":" bg-white"}  flex my-auto gap-3 text-btnBlue  py-3 px-2 rounded-md hover:bg-btnBlue hover:text-white transition-all duration-100 ease-in-out
        cursor-pointer `}>
            <GrGroup size={25}/>
            <h1 className='font-semibold text-xl'>Prompts</h1>
        </NavLink>
    </div>
  )
}

export default SideSection
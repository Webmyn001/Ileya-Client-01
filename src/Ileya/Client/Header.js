import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./Images/img1.jpg"


function Header() {
  return (
    <div className='font-monserat bg-[#f5f5f5] text-[#00008b] flex justify-around gap-x-3 px-2 py-2 items-center '>
      {/* Logo */}
       <div>
        <img src={logo} alt="logo" className="h-[55px] w-[55px] p-1 border border-[#0b46a1] object-cover cursor-pointer rounded-lg"/>
       </div>
       {/*  Title */}
        <div>
          <h1 className='font-bold sm:text-xl'>1446AH ILEYA CONTRIBUTION SAVINGS</h1>
        </div>

    </div>
  )
}

export default Header
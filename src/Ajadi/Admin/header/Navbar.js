import React from "react"
import {  useState } from "react"
import { Link } from "react-router-dom";
import image1 from "../Images/makeithalal.jpg"



import Navlinks from "./Navlinks"
import {FaBars,FaTimes} from "react-icons/fa"

 function Header () {
     
    const  [open, setOpen] = useState(false)
     const handleClick = () => { setOpen(!open)}
    return(
        <div>
            
                     {/* large screen */}
          <div className="bg-[#f5f5f5] flex px- text-[#0b46a1] h-[60px]">
            {/* logo */}
            <div>
            <Link to="/"> 
              <div className="pl-4 pt-2">
              <img src={image1} alt="logo" className="h-[55px] w-[55px] p-1 border border-[#0b46a1] cursor-pointer rounded-lg"/>
                </div>   
               </Link> 
             </div>
               
            
             <ul className=" hidden md:flex md:w-full  md:px-2 md:gap-x-6 md:justify-end md:items-center">
           <Navlinks />
           </ul>

          
          
                          {/* SMALL SCREENS */}
                   <ul className={`md:hidden fixed top-0 z-30 bg-white bg-opacity-95 w-[40%] h-[300px] right-0 shadow-2xl
                  flex flex-col gap-10 text-medium p-7 pt-20 rounded-2xl ease-in-out duration-500
                   ${open ? "top-0" : "top-[-200%]"}`}>
                    <Navlinks alternative={true} handleClick={handleClick} />
                  </ul>
           
                             {/* toggling icon */}
                  <div className="z-50 md:hidden text-[#0b46a1] cursor-pointer pr-8 flex w-full justify-end items-center" 
                   onClick={handleClick}>
                    {open ? <FaTimes/> : <FaBars/>}
                  </div>
           
     </div>           
          
          
          
          
          
          
          
          
          
          
          
            
            </div>
    )
 }

  export default Header
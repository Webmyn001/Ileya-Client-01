import React,{useState} from 'react'
import Addcomment from './Addcomment'
import Viewcomment from './Viewcomment'
import {BsFillTelephoneFill} from "react-icons/bs"
import { IoLogoWhatsapp } from 'react-icons/io'
import { AiOutlineMail } from 'react-icons/ai'


const Comment = () => {
    const [open , setOpen]= useState("New comment")
    return (
      <div className='min-h-[1000px] font-josefins bg-[#f5f5f5]'>
     <div className='flex items-center justify-center relative'>
      <div className='bg-gradient-to-tr from-[#182c25] to-[#5db6a6]  flex items-center justify-center h-[189px] w-full rounded-b-[25px]'>
      </div>
      </div>
      {/* General Container */}
      <div className='flex justify-center items-center '>
       <div className='flex flex-col shadow-lg w-[300px] h-fit bg-white  absolute top-[160px] pb-5 mb-[50px] items-center rounded-[32px]'>
       
       
        {/* log in & singn up button div */}
         <div className='buttons flex justify-between mt-[35px]'>
          <button onClick={()=> setOpen("New comment")} className={`${ open ==="New comment"  ? "bg-[#182c25] text-white" : "bg-white  "} focus:outline-0 border-[0.2px] border-[#182c25] rounded-l-full text-xs px-2 `}>Drop Comment</button>
          <button onClick={()=> setOpen("View comment")} className={`${ open ==="View comment"  ? "bg-[#182c25]  text-white" : "bg-white"} focus:outline-0 border-[0.2px] border-[#182c25] rounded-r-full text-xs px-2 `}>View Comments</button>
        </div>
        
        {/* from-[#182c25] to-[#1e453e]  */}
        
         {/* login & Sign Up  form */}
         <div className=''>
            {open === "New comment" ? <Addcomment/> : <Viewcomment/>}
         </div>

         

         <div className='flex gap-x-4 text-xl mt-[27px]  w-[220px] justify-center'>
         <a href='https://wa.me/8139116879'>
         <IoLogoWhatsapp className='text-[#128c7e] '/>
         </a>
               
         <a href='tel:+2348139116879'>
         <BsFillTelephoneFill className='text-[#0ebe2c]'/>
         </a>

         <a href="mailto:bellooladimeji53@gmail.com">
         <AiOutlineMail  className="text-[#c71610]"/>
         </a>

         </div>
       </div>
       </div>
      </div>
    )
}

export default Comment
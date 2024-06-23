import React, { useEffect, useState } from 'react'
import {AiOutlineCopyright} from "react-icons/ai"
import { IoLogoWhatsapp } from 'react-icons/io'


function Footer() {
    const [date, setDate] = useState(new Date())
   
    useEffect(()=> {
     var timer = setInterval(()=>setDate(new Date()), 1000)
  
     return function cleanup() {
        clearInterval(timer)
     }
    })
  
  return (
    // To be done again, i want to do best footer, to be able to visit mt whatsapp,linkden e.t.c from here
    <div className=" text-center font-medium text-white bg-gradient-to-r from-[#0b46a1]  to-[#24c4da] w-full h-[60px] text-xs font-jost tracking-wider ">
            <div className="flex flex-col justify-center items-center pt-3 ">
                <h1 className="flex items-center font-semibold gap-x-1"> Webmyn <span><AiOutlineCopyright/></span> {date.getUTCFullYear()}</h1>
                <h1>bellomuhyideen0001@gmail.com</h1>
                <h1>09164028709</h1>

               
            </div>
        </div>
  )
}

export default Footer
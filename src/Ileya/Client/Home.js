import React, { useState } from 'react'
import Form from './Form'
import { IoHome } from 'react-icons/io5'
import { FaFileCirclePlus} from 'react-icons/fa6'
import logo from "./Images/img1.jpg"
import { CiMail } from 'react-icons/ci'
import { BsFillTelephoneInboundFill } from 'react-icons/bs'




function Home() {

  const  [open, setOpen] = useState(false)
  const handleClick = (e) => { 
    setOpen(!open)
        }

   const CancelForm = (e) => { 
          setOpen(false)
        }

        const OpenForm = (e) => { 
          setOpen(true)
        }
  return (
    <div className='relative w-full min-h-screen bg-[#ddd0c8]'>

     <div className='flex justify-center items-center'>
       <img src={logo} className="w-full object-cover h-[350px] sm:h-[400px]"/>              
     </div>
         
                {/* RULES AND REGULATIONS */}
   <div className='flex justify-center items-center  pt-4'>
       <div className=' font-jost w-[300px] text-[#323232]  sm:w-[400px] border  border-[#323232] md:w-[550px] bg-[#faf9f6] shadow-2xl rounded-lg px-2 py-3'>
          <h1 className='font-bold text-xl pb-1 text-center text-[#323232] font-monserat'>RULES AND REGULATIONS OF THE PROGRAM</h1>
          <h3 className='font-semibold pb-1 text-[15px]'>1. Everyone is expected to pay into his/her wallet the minimum of #500 per week.</h3>
          <h3 className='font-semibold  pb-1 text-[14px]'>2. You are to collect the money only when the festival is around the corner unless there is tangible reason for that.</h3>
          <h3 className='font-semibold pb-1 text-[14px]'>3. Your money will be returned to you automatically after 3-months of non-payment and you will be removed from the platform automatically.</h3>
          <h3 className='font-semibold  pb-1 text-[14px]'>4. A token of #50 is expected to be added every time a transfer is made into your wallet</h3>
          <h3 className='font-semibold pb-1 text-[14px]'>5. Evidence of payment should be sent privately to the admin for confirmation. </h3>
          <h3 className='font-semibold  pb-1 text-[14px]'>6. You are required to fill the form for proper documentation and future reference. </h3>                
                          <h3 className='text-center  pt-2 text-[14px]'>Kindly click <button onClick={OpenForm} className='bg-[#323232] text-white px-1  rounded-md'>here</button> to fill the form </h3>
       </div>
    </div>

        {/* For  more enquireies contact */}

        <div className='flex items-center justify-center pb-[50px] pt-[50px]'>
          <div className='font-jost font-semibold  text-[#323232] w-[300px]  '>
            <h1 className='text-center text-xl font-bold'>For More Inquiries</h1>
            <h3 className='flex justify-center items-center gap-x-2 text-[15px]'><BsFillTelephoneInboundFill/>07064989893</h3>
            <h3 className='flex justify-center items-center gap-x-2 text-[15px]'><BsFillTelephoneInboundFill/>07055291690</h3>

            <h3 className='flex justify-center items-center gap-x-2 text-[15px]'><CiMail/>nasirudeenidris@gmail.com</h3>
          </div>
        </div>

          


        <div>
            {/* Nabar  */}
    <div className='fixed left-0 right-0 bottom-1' >
        <div className='flex items-center justify-center '>
            <div className='bg-[#525252]  flex justify-center items-center gap-x-[30px] sm:gap-x-[50px] rounded-xl shadow-lg w-1/2 sm:w-1/3 h-8'>
               <button className='text-black opacity-100 font-jost font-bold text-2xl' onClick={CancelForm}><IoHome/></button>
               <button  onClick={handleClick} className='text-black opacity-100 font-jost font-bold text-2xl'><FaFileCirclePlus/></button>
           </div>
        </div>
    </div>

        </div>
        {/* FORM  */}
        

             <div className={`fixed left-0 right-0 ease-in-out duration-1000  ${open ? "top-0" : "top-[-200%]"}`}>
                    <Form/>
              </div>
        </div>
  )
}

export default Home
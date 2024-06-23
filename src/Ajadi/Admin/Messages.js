import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Button from './Button'
import {  Bars,Oval } from 'react-loader-spinner'

function Messages() {

 const [Loading, setLoading] =useState(false)
 const [Message, setMessage] =useState("")

 const navigate = useNavigate();

 const onChangeMessage =(e) => {
    setMessage(e.target.value)
 }



 const saveForm = async (e) => {
  setLoading(true)
e.preventDefault();
 axios.post("https://test-backend-api-two.vercel.app/api/msg/add",{Message: Message})
.then((res)=>
{ 
console.log("saved succesfully")
alert("Message sent succesfully.")
navigate("/");
window.location.reload()


}).catch((err)=> {
  console.log(err)
  alert("Unable to send message, kindly complete the form or connect to Network.")
  setLoading(false)
})

}


 


 

 

  

  return (
    <div className='bg-[#f5f5f5]  text-[#1a456e]   w-full min-h-screen'>
            <h1 className='text-center font-semibold font-montserat bg-gradient-to-r text-white from-[#0b46a1]  to-[#24c4da] mt-2 py-[2px]'>Broadcast Message</h1>

     <div className='flex justify-center items-center flex-col '>
    
     <h3 className='pt-5'>Message</h3>
  <form onSubmit={saveForm} encType="multipart/form-data">
     <textarea placeholder='Send message to users ...'  value={Message} onChange={onChangeMessage} required
        className='w-[300px] h-[150px] border-b-[1px] rounded-md px-3 focus:outline-0 text-[16px] pb-[3.5px] mt-[10px] border-[#24c4da] text-[#404348] '>
    </textarea>

    <div className='flex justify-center items-center mb-2'>
        {Loading ? <div className='pt-5 pb-2'><Oval height="30" width="30" radius="4" color="#0b46a1" ariaLabel="loading"/> </div> : <Button name="Upload"/>}
     </div>
 </form>

     </div>

   

    </div>
  )
}

export default Messages
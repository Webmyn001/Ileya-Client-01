import axios from 'axios'
import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'
import {Link, useLocation, useNavigate} from "react-router-dom"

function Details() {

    const location = useLocation()
    const data = location.state
    
    const navigate = useNavigate()

    const deleteUser = async (id) => {
      // i want to do yes or no alert here
      alert("This lecture will be deleted")
      try{
        await axios.delete(`https://calm-pink-fossa-wear.cyclic.cloud/api/ajadi-form/${id}`);
        alert("Data deleted.")
        navigate("/");
        window.location.reload()
          }catch (err) 
      {
      console.log(err);
      alert("Unable to delete, Kindly ensure you are connectecd to the internet")
       }
    }

  return (
    <div className='bg-[#f5f5f5]  text-[#1a456e]   w-full min-h-screen'>
    <h1 className='text-center font-semibold font-montserat bg-gradient-to-r text-white from-[#1a456e]  to-[#a4cb3c] mt-2 py-[2px]'>Full Details</h1>
<div className='flex justify-center items-center py-10 '>
       <div className='bg-white w-[350px] pb-3  pt-3 rounded-2xl shadow-xl shadow-indigo-800/50 flex flex-col items-center justify-center h-fit'>
        <img src={data.Image[0].url} alt="#" className='w-[150px] h-[150px] rounded-full object-cover'/>
         <h1 className='pt-2 font-semibold '>Name: </h1>
         <h1 className='px-2'>{data.Name}</h1>

         <h1 className='pt-2 font-semibold '> Occupation: </h1>
         <h1 className='px-2'>{data.Occupation}</h1>

         <h1 className='pt-2 font-semibold '> School: </h1>
         <h1 className='px-2'>{data.School === "" ? "Nil" : data.School}</h1>

         <h1 className='pt-2 font-semibold '>Class:</h1>
         <h1 className='px-2'>{data.Class === "" ? "Nil" : data.Class}</h1>

         <h1 className='pt-2 font-semibold '>Qualification:</h1>
         <h1 className='px-2'>{data.Qualification}</h1>
      

         <h1 className='pt-2 font-semibold '>Status:</h1>
         <h1 className='px-2' >{data.Status}</h1>

         <h1 className='pt-2 font-semibold '>Sex:</h1>
         <h1 className='px-2' >{data.Sex}</h1>

         <h1 className='pt-2 font-semibold '>Home Address:</h1>
         <h1 className='px-2'>{data.Address}</h1>

         <h1 className='pt-2 font-semibold '>Location:</h1>
         <h1 className='px-2'>{data.Location}</h1>

         <h1 className='pt-2 font-semibold '>Email Address:</h1>
         <h1 className='px-2'>{data.Email}</h1>

         <h1 className='pt-2 font-semibold '>Age:</h1>
         <h1 className='px-2'>{data.Age === "" ? "Nil" : data.Age}</h1>


         <h1 className='pt-2 font-semibold '>Phone Number:</h1>
         <h1 className='px-2'>{data.PhoneNo}</h1>

         <a href={`https://wa.me/${data.WhatsappNo}`}>
        <div className='flex items-center px-4 pt-2  gap-x-2'>
          <h1 className='text-[#128c7e] text-xl'><IoLogoWhatsapp/></h1>
          <h1>Whatsapp</h1>
        </div>
        </a>
      


                    {/* buttons */}
         <div className='flex justify-between w-full px-5  my-[15px]  mb-[15px] items-center'>
               <Link to={ {pathname:`/Idcard/${data.Name}`}}  state={data}>
             <button className='p-[3px] bg-[#1a456e]  hover:text-[#1a456e]  text-white duration-300 transition-colors focus:outline-0 hover:border-[0.5px] border-[#1a456e]  hover:bg-white  rounded-lg'>ID Card</button>
               </Link>
             <button onClick={()=>deleteUser(data._id)} className='p-[3px] bg-[#1a456e]  text-white duration-300 transition-colors focus:outline-0 hover:text-[#1a456e]  hover:border-[1px] hover:bg-white hover:border-red-500 rounded-lg'>delete</button>
               </div>
       </div>
</div>
    </div>
  )
}

export default Details
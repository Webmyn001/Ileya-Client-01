import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { Oval, TailSpin } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import image1 from "./Images/genetics.jpg"

function Admin() {
 

const [loading, setloading] =useState(false)
const [FormData, SetFormData] = useState([])

    const getFormData = async  () => {
        axios.get("https://calm-pink-fossa-wear.cyclic.cloud/api/ajadi-form/")
        .then(res => {
          console.log(res.data)
          SetFormData(res.data)
          setloading(true)
        }).catch(err => {
          console.log(err)
        })
       }

       useEffect(() => {
        getFormData()
       
        }, [])

  return (
    <div className='bg-[#f5f5f5] pb-[60px] text-[#1a456e] w-full min-h-screen'>
    <h1 className='text-center font-semibold font-montserat bg-gradient-to-r text-white from-[#1a456e]  to-[#a4cb3c] mt-2 py-[2px]'>Ajadi Muslim Youth Forum Database</h1>
     
     <h1 className='text-center sm:text-xl pt-5 pb-2 text-[#1a456e] font-semibold'>List of registered Youths.</h1>

     <div className='flex justify-center items-center'>
        {/* table */}


  {loading ? <div></div>:<div className="flex min-h-screen justify-center items-center text-xl font-bold"><Oval height="80" width="80" radius="9" color="#a4cb3c" ariaLabel="loading"/></div>}
  
  { FormData.length === 0 ? 
          <div className={`min-h-screen  flex ${loading ? "block" : "hidden"} font-montserat text-xl font-semibold justify-center items-center`}>  This List is Empty</div>  :
     <table className="text-center table-auto ">
            <tbody className="border border-[#1a456e]">
            <tr className="border border-[#1a456e]">
                <th className="border border-[#1a456e] px-2">S/N</th>
                <th className="border border-[#1a456e] px-2">Image</th>
                <th className="border border-[#1a456e]">Name</th>
                <th className="border border-[#1a456e] px-2">Occupation</th>


            </tr>
       {FormData.map((info,i)=>
       <tr className=' '>
                      <td className="border border-[#1a456e]">{i+1}.</td>
                      <td className="border border-[#1a456e] flex justify-center items-center w-[70px] h-[70px]"><img src={info.Image[0].url} alt="#" className='w-[50px] h-[50px] object-cover rounded-2xl'/></td>
                      <td className="border border-[#1a456e] hover:text-blue-500 hover:underline px-2"><Link to={ {pathname:`/details/${info.Name}`}}  state={info}>{info.Name}</Link></td>
                      <td className="border border-[#1a456e] hover:text-blue-500 hover:underline px-2"><Link to={ {pathname:`/details/${info.Name}`}}  state={info}>{info.Occupation}</Link></td>
                     
           </tr>
       )}
            </tbody>
         </table>
  }

     </div>
    </div>
  )
}

export default Admin
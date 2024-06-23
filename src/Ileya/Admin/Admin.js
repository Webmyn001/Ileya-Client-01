import React from 'react'
import {  Bars } from 'react-loader-spinner'
import { Link } from 'react-router-dom'

function Admin(props) {
 


  return (
    <div className='bg-[#ddd0c8] pb-[60px] text-[#323232] w-full min-h-screen'>
    <h1 className='text-center font-semibold font-montserat bg-[#323232]  text-white  py-[2px]'>Database</h1>
     
     <h1 className='text-center sm:text-xl pt-5 pb-2 text-[#323232] font-semibold'>Registration List</h1>

     <div className='flex justify-center items-center'>
        {/* table */}


  {props.loading ? <div></div>:<div className="flex min-h-screen justify-center items-center text-xl font-bold"><Bars height="100" width="80" radius="10" color="#323232" ariaLabel="loading"/></div>}
  
  { props.FormData.length === 0 ? 
          <div className={`min-h-screen  flex ${props.loading ? "block" : "hidden"} font-montserat text-xl font-semibold justify-center items-center`}>  This List is Empty</div>  :
     <table className="text-center table-auto ">
            <tbody className="border border-[#323232]">
            <tr className="border border-[#323232]">
                <th className="border border-[#323232] px-2">S/N</th>
                <th className="border border-[#323232]">Name</th>
                <th className="border border-[#323232] px-2">Phone Number</th>


            </tr>
       {props.FormData.map((info,i)=>
       <tr className=' 'key={i}>
                      <td className="border border-[#323232]">{i+1}.</td>
                      <td className="border border-[#323232] hover:text-blue-500 hover:underline px-2"><Link to={ {pathname:`/details/${info.Name}`}}  state={info}>{info.Name}</Link></td>
                      <td className="border border-[#323232] hover:text-blue-500 hover:underline px-2"><Link to={ {pathname:`/details/${info.Name}`}}  state={info}>{info.PhoneNo}</Link></td>
                     
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
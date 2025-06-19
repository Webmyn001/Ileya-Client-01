import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import { Oval } from 'react-loader-spinner'

function Form() {
  const [loading, setLoading] = useState(false)
 const [formData, setFormData] = useState({
  Name: "",
  Address: "",
  PhoneNo: "",
  BankName: "",
  AcctName: "",
  AcctNo: "",
  NOK: "",        // Changed from nok
  NOKName: "",    // Changed from nokName
  Marital: ""
})

const navigate = useNavigate()

const handleChange = (e) => {
  const { name, value } = e.target
  setFormData(prev => ({ ...prev, [name]: value }))
}

const saveForm = async (e) => {
  e.preventDefault()
  setLoading(true)
  
  try {
    await axios.post("https://ileya-backend.vercel.app/api/form/add", formData)
    alert("Thank you! Response received. We'll contact you via WhatsApp soon.")
    
    // Reset form fields to empty values
    setFormData({
      Name: "",
      Address: "",
      PhoneNo: "",
      BankName: "",
      AcctName: "",
      AcctNo: "",
      NOK: "",
      NOKName: "",
      Marital: ""
    })
    
    navigate("/")
  } catch (err) {
    console.error("Submission error:", err)
    alert("Unable to submit form. Please check your connection and try again.")
  } finally {
    setLoading(false)
  }
}


  return (
    <div className="flex justify-center items-center py-8 px-4">
      <div className="w-full max-w-3xl bg-gradient-to-br from-[#f5f0e8] to-[#e2d9cf] rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-[#323232] py-4">
          <h2 className="text-center text-white font-bold text-lg md:text-xl tracking-wide">
            Kindly fill the form below
          </h2>
        </div>
        
        <form 
          onSubmit={saveForm} 
          className="p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* Column 1 */}
          <div className="space-y-5">
            <div className="flex flex-col">
              <label className="text-[#323232] text-sm font-medium mb-1 pl-1">
                Full Name
              </label>
              <input
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#323232] focus:border-transparent transition-all bg-white text-[#323232] placeholder-gray-400"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-[#323232] text-sm font-medium mb-1 pl-1">
                Home Address
              </label>
              <input
                name="Address"
                value={formData.Address}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#323232] focus:border-transparent transition-all bg-white text-[#323232] placeholder-gray-400"
                placeholder="123 Main Street"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-[#323232] text-sm font-medium mb-1 pl-1">
                Phone Number
              </label>
              <input
                name="PhoneNo"
                type="tel"
                value={formData.PhoneNo}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#323232] focus:border-transparent transition-all bg-white text-[#323232] placeholder-gray-400"
                placeholder="08012345678"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-[#323232] text-sm font-medium mb-1 pl-1">
                Bank Name
              </label>
              <input
                name="BankName"
                value={formData.BankName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#323232] focus:border-transparent transition-all bg-white text-[#323232] placeholder-gray-400"
                placeholder="Access Bank"
              />
            </div>
          </div>
          
          {/* Column 2 */}
          <div className="space-y-5">
            <div className="flex flex-col">
              <label className="text-[#323232] text-sm font-medium mb-1 pl-1">
                Account Name
              </label>
              <input
                name="AcctName"
                value={formData.AcctName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#323232] focus:border-transparent transition-all bg-white text-[#323232] placeholder-gray-400"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-[#323232] text-sm font-medium mb-1 pl-1">
                Account Number
              </label>
              <input
                name="AcctNo"
                type="number"
                value={formData.AcctNo}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#323232] focus:border-transparent transition-all bg-white text-[#323232] placeholder-gray-400"
                placeholder="0123456789"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-[#323232] text-sm font-medium mb-1 pl-1">
                Next of Kin Name
              </label>
              <input
                name="NOKName"
                value={formData.NOKName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#323232] focus:border-transparent transition-all bg-white text-[#323232] placeholder-gray-400"
                placeholder="Jane Smith"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-[#323232] text-sm font-medium mb-1 pl-1">
                Next of Kin Phone
              </label>
              <input
                name="NOK"
                type="tel"
                value={formData.NOK}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#323232] focus:border-transparent transition-all bg-white text-[#323232] placeholder-gray-400"
                placeholder="08087654321"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-[#323232] text-sm font-medium mb-1 pl-1">
                Marital Status
              </label>
              <select
                name="Marital"
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#323232] focus:border-transparent transition-all bg-white text-[#323232]"
              >
                <option value="">Select Status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-4">
            {loading ? (
              <div className="py-2">
                <Oval 
                  height={36}
                  width={36}
                  color="#323232"
                  secondaryColor="#DDD0C8"
                  ariaLabel="loading"
                />
              </div>
            ) : (
              <Button className="w-full max-w-xs py-3 text-lg">
                Submit Form
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
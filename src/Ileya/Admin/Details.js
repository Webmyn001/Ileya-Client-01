import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import { 
  FiUser, FiHome, FiPhone, FiCreditCard, 
  FiUserPlus, FiHeart, FiTrash2, FiEdit, 
  FiArrowLeft, FiMail, FiCalendar, FiShield
} from 'react-icons/fi';
import { motion } from 'framer-motion';

function Details() {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const deleteUser = async (id) => {
    setIsDeleting(true);
    try {
      await axios.delete(`https://ileya-backend.vercel.app/api/form/${id}`);
      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Unable to delete. Please check your internet connection.");
    } finally {
      setIsDeleting(false);
      setShowDeleteModal(false);
    }
  };

  const DetailCard = ({ icon, label, value }) => (
    <div className="flex items-start py-3 border-b border-gray-200">
      <div className="text-indigo-600 mr-3 mt-1">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f0e8] to-[#e2d9cf] p-4 pb-20">
      {/* Back button */}
      <div className="max-w-3xl mx-auto mb-4">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          <FiArrowLeft className="mr-2" /> Back to list
        </button>
      </div>
      
      {/* Profile Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-[#0b46a1] to-[#323232] p-6 text-white">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-full w-20 h-20 flex items-center justify-center mb-4 sm:mb-0 sm:mr-6">
              <FiUser className="text-3xl text-gray-400" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold">{data.Name}</h1>
              <div className="flex items-center justify-center sm:justify-start mt-2">
                <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Verified Member
                </div>
               
              </div>
            </div>
          </div>
        </div>
        
        {/* Profile Details */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <FiUser className="mr-2 text-indigo-600" /> Personal Information
              </h2>
              
              <DetailCard 
                icon={<FiHome />} 
                label="Home Address" 
                value={data.Address} 
              />
              
              <DetailCard 
                icon={<FiPhone />} 
                label="Phone Number" 
                value={data.PhoneNo} 
              />
              
              <DetailCard 
                icon={<FiHeart />} 
                label="Marital Status" 
                value={data.Marital} 
              />
            </div>
            
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <FiCreditCard className="mr-2 text-indigo-600" /> Banking Information
              </h2>
              
              <DetailCard 
                icon={<FiCreditCard />} 
                label="Bank Name" 
                value={data.BankName} 
              />
              
              <DetailCard 
                icon={<FiUser />} 
                label="Account Name" 
                value={data.AcctName} 
              />
              
              <DetailCard 
                icon={<FiCreditCard />} 
                label="Account Number" 
                value={data.AcctNo} 
              />
            </div>
          </div>
          
          <div className="mt-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <FiUserPlus className="mr-2 text-indigo-600" /> Next of Kin Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DetailCard 
                icon={<FiUser />} 
                label="Full Name" 
                value={data.NOKName} 
              />
              
              <DetailCard 
                icon={<FiPhone />} 
                label="Phone Number" 
                value={data.NOK} 
              />
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-4">
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowDeleteModal(true)}
            className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <FiTrash2 className="mr-2" /> Delete Profile
          </motion.button>
        </div>
      </motion.div>
      
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl max-w-md w-full p-6"
          >
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <FiShield className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Confirm Deletion</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete <span className="font-semibold">{data.Name}'s</span> profile? 
              This action cannot be undone and all associated data will be permanently removed.
            </p>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              
              <button
                onClick={() => deleteUser(data._id)}
                disabled={isDeleting}
                className={`px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center ${
                  isDeleting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isDeleting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Deleting...
                  </>
                ) : (
                  <>
                    <FiTrash2 className="mr-2" /> Delete
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Details;
import React, { useState } from 'react';
import Form from './Form';
import { IoHome } from 'react-icons/io5';
import { FaFileCirclePlus, FaRegLightbulb } from 'react-icons/fa6';
import { CiMail } from 'react-icons/ci';
import { BsFillTelephoneInboundFill, BsArrowRight } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

function Home() {
  const [open, setOpen] = useState(false);

  const toggleForm = () => {
    setOpen(!open);
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#e6d8ce] to-[#d4c5bb]">
      {/* Hero Section */}
      <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#323232cc] to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#ddd0c8] to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv82MNwN6FuHvarsvJ9r5PVG90RzBtfENmXA&s')] bg-cover bg-center"></div>
        
        <div className="absolute bottom-6 left-6 z-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
            1447 AH ILEYA
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-white mt-1 drop-shadow-lg">
            Contribution Savings Program
          </h2>
          <div className="flex items-center mt-3">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mr-3">
              <FaRegLightbulb className="text-white text-xl" />
            </div>
            <p className="text-white font-medium max-w-xs text-sm">
              Secure your festive season with our savings program
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Rules Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12"
        >
          <div className="bg-[#323232] py-4 px-6">
            <h2 className="text-xl font-bold text-white text-center">
              RULES AND REGULATIONS
            </h2>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              <RuleItem number="1" text="Everyone is expected to pay into his/her wallet the minimum of ₦500 per week" />
              <RuleItem number="2" text="You are to collect the money only when the festival is around the corner unless there is tangible reason" />
              <RuleItem number="3" text="Your money will be returned after 3-months of non-payment and you will be removed from the platform" />
              <RuleItem number="4" text="A token of ₦50 is expected to be added every time a transfer is made into your wallet" />
              <RuleItem number="5" text="Evidence of payment should be sent privately to the admin for confirmation" />
              <RuleItem number="6" text="You are required to fill the form for proper documentation and future reference" />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setOpen(true)}
              className="mt-8 w-full py-3 bg-gradient-to-r from-[#0b46a1] to-[#323232] text-white font-medium rounded-xl flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Fill Registration Form</span>
              <BsArrowRight className="text-lg" />
            </motion.button>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-[#f0e8e0] to-[#e2d9cf] rounded-2xl shadow-xl p-6 mb-12 border border-[#c4b5aa]"
        >
          <h2 className="text-xl font-bold text-[#323232] mb-6 text-center">For More Inquiries</h2>
          
          <div className="space-y-5 max-w-md mx-auto">
            <ContactItem 
              icon={<BsFillTelephoneInboundFill className="text-xl" />} 
              text="07064989893" 
            />
           <ContactItem 
              icon={<BsFillTelephoneInboundFill className="text-xl" />} 
              text="09122251064" 
            />
            <ContactItem 
              icon={<BsFillTelephoneInboundFill className="text-xl" />} 
              text="07055291690" 
            />

            <ContactItem 
              icon={<CiMail className="text-xl" />} 
              text="nasirudeenidris@gmail.com" 
            />
          </div>
          
          <div className="mt-8 bg-[#323232] rounded-xl p-4 text-center">
            <p className="text-white text-sm">
              Our customer support is available Monday to Saturday, 9AM - 5PM
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-4 left-0 right-0 z-50">
        <div className="flex justify-center">
          <div className="bg-[#323232] flex justify-between items-center rounded-full shadow-2xl px-6 py-3 w-11/12 max-w-md">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full ${!open ? 'bg-[#0b46a1] text-white' : 'text-white'}`}
              onClick={() => setOpen(false)}
            >
              <IoHome className="text-2xl" />
            </motion.button>
            
            <div className="text-white text-sm font-medium">
              {open ? "Close Form" : "Open Form"}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full ${open ? 'bg-[#0b46a1] text-white' : 'text-white'}`}
              onClick={toggleForm}
            >
              <FaFileCirclePlus className="text-2xl" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Form Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="w-full max-w-2xl bg-white rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <Form />
              <div className="p-4 bg-gray-100 flex justify-center">
                <button
                  onClick={() => setOpen(false)}
                  className="px-6 py-2 bg-[#323232] text-white rounded-lg font-medium"
                >
                  Close Form
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Reusable Rule Item Component
function RuleItem({ number, text }) {
  return (
    <div className="flex items-start">
      <div className="bg-[#323232] text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
        {number}
      </div>
      <p className="text-[#323232] font-medium">{text}</p>
    </div>
  );
}

// Reusable Contact Item Component
function ContactItem({ icon, text }) {
  return (
    <div className="flex items-center bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-[#c4b5aa]">
      <div className="bg-[#323232] w-12 h-12 rounded-full flex items-center justify-center text-white mr-4">
        {icon}
      </div>
      <p className="text-[#323232] font-medium">{text}</p>
    </div>
  );
}

export default Home;
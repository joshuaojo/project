import './App.css';
import { IoIosSearch } from "react-icons/io";
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'; 
function App() {
  const [open, setOpen] = useState(false); 

  const handleOpen = () => {
    setOpen(!open); 
  };

  return (
 <div>
  {/* navbar */}
<div className='text-black  grid grid-cols-3 mt-6 gap-60   md:mx-20'>
<div className='inline-flex gap-6'>
<div className="relative cursor-pointer">
  
      <div onClick={handleOpen}>
        {open ? <FaTimes className="size-11" /> : <FaBars className="size-11" />}
      </div>

     
      <motion.div
        initial={{ x: '-100%' }}  
        animate={{ x: open ? '0%' : '-100%' }} 
        transition={{ duration: 0.5 }} 
        className="fixed top-0 left-0 h-full shadow-2xl px-4 py-7 w-[350px] bg-white mt-16 flex flex-col gap-3 text-left z-50" >
        <ul >
         <p className=' border-l-[20px] border-black  border-b text-xl mt-6  hover:bg-slate-200 '> <li className='pt-2'>Home</li> </p> 
          <li className='border-b border-black pt-6 text-xl hover:bg-slate-200' >News</li>
          <li className='border-b border-black pt-6 text-xl hover:bg-slate-200' >Sports</li>
          <li className='border-b border-black pt-6 text-xl hover:bg-slate-200'>Business</li>
          <li className='border-b border-black pt-6 text-xl hover:bg-slate-200'>Innovation</li>
          <li className='border-b border-black pt-6 text-xl hover:bg-slate-200'>Culture</li>
          <li className='border-b border-black pt-6 text-xl hover:bg-slate-200'>Travel</li>
          <li className='border-b border-black pt-6 text-xl hover:bg-slate-200'>Earth</li>
          <li className='border-b border-black pt-6 text-xl hover:bg-slate-200'>Video</li>
          <li className='border-b border-black pt-6 text-xl hover:bg-slate-200'>Live</li>
          <li className='border-b border-black pt-6 text-xl hover:bg-slate-200'>Audio</li>
          <li className='border-b border-black pt-6 text-xl hover:bg-slate-200'>Weather</li>
          <li className='border-b border-black pt-6 text-xl hover:bg-slate-200'>Newsletter</li>
        </ul>
      </motion.div>
</div>
{open && <p><IoIosSearch className="size-11" /></p>}
</div>
<div className='inline-flex gap-2  object-center md:ml-9'>
<button className='text-white bg-black w-12 text-center h-10  text-4xl hover:bg-slate-50 '>B</button>
<button className='text-white bg-black w-12 text-center h-10  text-4xl hover:bg-slate-50 '>B</button>
<button  className='text-white bg-black w-12 text-center h-10  text-4xl hover:bg-slate-50 '>C</button>
</div>
<div className='hidden md:inline-flex gap-6'>
 <button className='bg-black  h-10 w-44  hover:bg  '><p className='text-white text-2xl text-center'> Register </p></button>
 <button className='text-black text-center h-10 w-20  hover:bg-black hover:text-white'>Sign In</button>
</div>


</div>




 </div>
 
  );
}

export default App;

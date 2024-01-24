import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaSignOutAlt, FaSearch, FaPlusSquare, FaCompass, FaUser, FaFacebookMessenger, FaBell } from 'react-icons/fa';
import {AiFillHome} from "react-icons/ai";

const BottomBar = () => {
         
return (
     <main className="fixed BottomBar bottom-0 left-0 w-full border-t flex justify-around  p-3 text-white bg-[#3a1450] borderBg">
       
       <NavLink to="/" className='rounded-md' activeclassname="active">
            <li className="flex gap-5 p-2">
              <AiFillHome size={30} className="cursor-pointer" />
              <span className="hidden text-xl font-medium font-serif sm:flex cursor-pointer">Home</span>
            </li>
          </NavLink>
          <NavLink to="/explore" className='rounded-md' activeclassname='active'>
            <li className="flex gap-5 p-2">
              <FaCompass size={27} className="cursor-pointer"/>
              <span className="hidden text-xl font-medium font-serif sm:flex cursor-pointer">Explore</span>
            </li>
          </NavLink>
          <NavLink to="/post" className='rounded-md' activeclassname='active'>
            <li className="flex gap-5 p-2">
              <FaPlusSquare size={27} className="cursor-pointer"/>
              <span className="hidden text-xl font-medium font-serif sm:flex cursor-pointer">Post</span>
            </li>
          </NavLink>
          <NavLink to="/notifications" className='rounded-md' activeclassname='active'>
            <li className="flex gap-5 p-2">
              <FaBell size={27} className="cursor-pointer"/>
              <span className="hidden text-xl font-medium font-serif sm:flex cursor-pointer">Notifications</span>
            </li>
          </NavLink>
          <NavLink to="/username" className='rounded-md' activeclassname='active'>
          <li className="flex gap-5 p-2">
            <FaUser size={27} className="cursor-pointer"/>
            <span className="hidden text-xl font-medium font-serif sm:flex cursor-pointer">Profile</span>
          </li>
        </NavLink>
    </main>
   );
};   

export default BottomBar
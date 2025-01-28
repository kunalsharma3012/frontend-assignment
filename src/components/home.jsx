import { useState } from "react";
import { FaRegUserCircle, FaHistory } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import { TiMessage } from "react-icons/ti";
import { FaUserPlus } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";
import { RiFileEditLine } from "react-icons/ri";
import { IoShieldCheckmarkOutline } from "react-icons/io5";




export default function HomePage() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-teal-600 p-4 flex justify-between items-center text-white">
        <div className="text-xl font-semibold flex text-black bg-blue-50 px-2 py-1 items-center rounded"><img src="/logo.png" alt="logo image" className="w-10 h-10" />Aiworksquad</div>
        <div className="flex items-center space-x-4">
          <button className="border px-4 py-1 rounded-lg hover:bg-white hover:border-black hover:text-black">Department: Marketing</button>
         <div className="flex items-center gap-1.5 ">
         <FaRegUserCircle size={24}/>
         <p className="text-lg">Nithin</p>
         </div>

         
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-72 relative bg-white shadow-md p-4">
          <button className="w-full bg-white border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white py-2 rounded-lg mb-2">
            + New Chat</button>
          <button className="w-full text-sm py-2 rounded-lg flex items-center justify-center gap-2 ">
            <FaHistory/>
            History</button>
          
          <ul className="space-y-2">
            <li className="p-2 hover:bg-gray-200 rounded-lg font-semibold  cursor-pointer text-[12px] flex items-center justify-between">
              <div className="flex items-center gap-2">
              <TiMessage size ={25}/>
           New Chat
           </div>
           <div className="flex gap-3">
              <CiEdit size={25}/>
              <MdOutlineDeleteForever size={25}/>
              </div></li>
              <li className="p-2 hover:bg-gray-200 rounded-lg font-semibold  cursor-pointer text-[12px] flex items-center justify-between">
              <div className="flex items-center gap-2">
              <TiMessage size ={25}/>
          What is marketing
           </div>
           <div className="flex gap-3">
              <CiEdit size={25}/>
              <MdOutlineDeleteForever size={25}/>
              </div></li>
              <li className="p-2 hover:bg-gray-200 rounded-lg font-semibold cursor-pointer text-[12px] flex items-center justify-between">
              <div className="flex items-center gap-2">
              <TiMessage size ={25}/>
           Give me a list of...
           </div>
           <div className="flex gap-3">
              <CiEdit size={25}/>
              <MdOutlineDeleteForever size={25}/>
              </div></li>
          </ul>
           {/* Bottom Content */}
  <div className="absolute bottom-4 text-gray-700 left-4 space-y-3 text-sm">
  <a href="#" className=" hover:underline flex items-center gap-2">
      <FaUserPlus size={20}/>Upgrade to Plus
    </a>
    <a href="#" className=" hover:underline flex items-center gap-2">
      <MdLaunch size={20}/>Updates & FAQ
    </a>
    <a href="#" className=" hover:underline flex items-center gap-2">
    <RiFileEditLine size={20}/>Terms & Conditions
    </a>
    <a href="#" className=" hover:underline flex items-center gap-2">
    <IoShieldCheckmarkOutline size={20}/> Privacy Policy Page
    </a>
  </div>
        </div>

        {/* Chat Section */}
        <main className="flex-1 p-6">
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-lg font-bold">Introduce yourself to AiWorkSquad</h2>
            <p className="text-sm text-gray-600">I am Nithin. CEO of an IT startup company in India</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg">What is marketing?</button>
            <p className="mt-2 text-gray-700">
              Marketing refers to the process of promoting and selling products or services to customers...
            </p>
          </div>

          <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md mb-4">
            <p>Give me a list of top 5 digital marketing agencies near me...</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              placeholder="Enter your marketing query here..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

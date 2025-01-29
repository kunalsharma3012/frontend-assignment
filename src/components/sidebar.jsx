import { FaHistory } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import { TiMessage } from "react-icons/ti";
import { FaUserPlus } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";
import { RiFileEditLine } from "react-icons/ri";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

 const Sidebar = () => {
  return (
     <div className="w-72 relative bg-white shadow-md p-4">
              <button className="w-full bg-white border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white py-2 rounded-lg mb-2">
                + New Chat
              </button>
              <button className="w-full text-sm py-2 rounded-lg flex items-center justify-center gap-2 ">
                <FaHistory />
                History
              </button>
    
              <ul className="space-y-2">
                <li className="p-2 hover:bg-gray-200 rounded-lg font-semibold  cursor-pointer text-[12px] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TiMessage size={25} />
                    New Chat
                  </div>
                  <div className="flex gap-3">
                    <CiEdit size={25} />
                    <MdOutlineDeleteForever size={25} />
                  </div>
                </li>
                <li className="p-2 hover:bg-gray-200 rounded-lg font-semibold  cursor-pointer text-[12px] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TiMessage size={25} />
                    What is marketing
                  </div>
                  <div className="flex gap-3">
                    <CiEdit size={25} />
                    <MdOutlineDeleteForever size={25} />
                  </div>
                </li>
                <li className="relative p-2 hover:bg-gray-200 rounded-lg font-semibold cursor-pointer text-[12px] flex items-center justify-between group">
                  <div className="flex items-center gap-2">
                    <TiMessage size={25} />
                    Give me a list of...
                  </div>
                  <div className="flex gap-3">
                    <CiEdit size={25} />
                    <MdOutlineDeleteForever size={25} />
                  </div>
                <div className="absolute left-0 mt-24 shadow-md mx-4 border border-black px-2 hidden group-hover:block">
                    Give me a list of marketing agencies near me in 5 km.
                </div>
                </li>
              </ul>
              {/* Bottom Content */}
              <div className="absolute bottom-4 text-gray-700 left-4 space-y-3 text-sm">
                <a href="#" className=" hover:underline flex items-center gap-2">
                  <FaUserPlus size={20} />
                  Upgrade to Plus
                </a>
                <a href="#" className=" hover:underline flex items-center gap-2">
                  <MdLaunch size={20} />
                  Updates & FAQ
                </a>
                <a href="#" className=" hover:underline flex items-center gap-2">
                  <RiFileEditLine size={20} />
                  Terms & Conditions
                </a>
                <a href="#" className=" hover:underline flex items-center gap-2">
                  <IoShieldCheckmarkOutline size={20} /> Privacy Policy Page
                </a>
              </div>
            </div>
  )
}
export default Sidebar

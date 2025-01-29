import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";

const Navbar = ({ selectedDepartment, setSelectedDepartment }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDepartmentChange = (department) => {
    setSelectedDepartment(department);
    setIsDropdownOpen(false);
  };

  return (
    <div>
  <header className="bg-[#1193ad] p-4 flex justify-between items-center text-white flex-wrap sm:flex-nowrap">
    <div className="text-xl font-semibold flex text-black bg-blue-50 px-2 py-1 items-center rounded">
      <img src="/logo.png" alt="logo image" className="w-10 h-10" />
      Aiworksquad
    </div>

    <div className="flex items-center space-x-4">
      {/* Making Department Dropdown Button */}
      <div className="relative">
        <button
          className="border relative px-4 py-1 flex items-center rounded-lg gap-1 hover:bg-white hover:border-black hover:text-black"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Department: {selectedDepartment}
          <IoIosArrowDropdownCircle />
        </button>

        {/* It's Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute text-black left-1 mt-1 w-44 border border-black bg-white shadow-lg rounded-lg z-10">
            <button
              className="block w-full px-4 py-2 text-left hover:bg-gray-100 rounded-lg"
              onClick={() => handleDepartmentChange("Marketing")}
            >
              Marketing
            </button>
            <button
              className="block w-full px-4 py-2 text-left hover:bg-gray-100 rounded-lg"
              onClick={() => handleDepartmentChange("Sales")}
            >
              Sales
            </button>
          </div>
        )}
      </div>

      {/* Made User Info Section */}
      <div className="flex items-center gap-1.5">
        <FaRegUserCircle size={24} />
        <p className="text-lg">Nithin</p>
      </div>
    </div>
  </header>
</div>
  );
};

export default Navbar;

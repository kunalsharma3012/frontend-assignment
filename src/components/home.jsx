import { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { PiSealQuestion } from "react-icons/pi";
import { TiMessages } from "react-icons/ti";
import { GoPaperAirplane } from "react-icons/go";

import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function HomePage() {
  const [query, setQuery] = useState(""); //made this variable just to avoid error
  const [selectedDepartment, setSelectedDepartment] = useState("Marketing");

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
  {/* Navbar imported */}
  <Navbar
    selectedDepartment={selectedDepartment}
    setSelectedDepartment={setSelectedDepartment}
  />

  {/* Making Main Content */}
  <div className="flex flex-1 flex-col sm:flex-row">
    {/* Sidebar imported */}
    <Sidebar />

    {/* Chat Section */}
    <main className="max-w-4xl flex-1 p-6">
      <div className="p-4 border rounded border-black mb-3">
        <h2 className="text-lg font-bold">
          Introduce yourself to AIWorkSquad
        </h2>
        <p className="text-sm flex items-center gap-1.5 text-gray-600">
          I am Nithin. CEO of an IT startup company in India{" "}
          <MdOutlineModeEdit size={25} />
        </p>
      </div>

      <div className="flex justify-end my-3">
        <button className="bg-[#1193ad] text-white flex items-center gap-1 px-4 py-3 rounded max-w-fit">
          What is marketing?
          <div>
            <PiSealQuestion size={20} className="text-white" />
          </div>
        </button>
      </div>
      <div className="border border-[#1193ad] my-3 mr-16 p-4 flex items-start gap-4">
        <div className="self-start">
          <TiMessages className="text-[#1193ad]" size={30} />
        </div>

        <p className="text-[14px] text-[#1193ad]">
          Marketing refers to the process of promoting and selling products or
          services to customers. It involves researching customer needs and
          wants, developing products and services that meet those needs, pricing
          products and services appropriately, creating marketing materials to
          promote products and services, and distributing those materials through
          various channels to reach potential customers. The ultimate goal of
          marketing is to generate interest and increase sales for a business or
          organization.
        </p>
      </div>

      <div className="flex justify-end my-3">
        <button className="bg-[#1193ad] text-white flex items-center pl-2 pr-4 py-2 rounded max-w-2xl">
          Give me a list of top 5 digital marketing agencies near me who offer
          services like social media marketing, content marketing, and influencer
          marketing
          <div className="">
            <PiSealQuestion size={20} className="text-white" />
          </div>
        </button>
      </div>
      <div className="pr-6 text-[#1193ad] rounded-lg">
        <div className="relative">
          <PiSealQuestion
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#1193ad]"
            size={25}
          />

          <input
            type="text"
            className="w-full pl-16 pr-10 py-4 border rounded"
            placeholder={`Enter your ${selectedDepartment} query here...`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <GoPaperAirplane
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#1193ad]"
            size={25}
          />
        </div>
      </div>
      <p className="text-sm text-gray-400 mx-16 mt-10">
        Type your next question above or select one from the related questions
        section
      </p>
    </main>
  </div>
</div>

  );
}

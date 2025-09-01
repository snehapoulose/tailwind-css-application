import React from "react";

export default function NavBar() {
  return (
    <>
      <div className="p-4">
        <div className="flex flex-row justify-between items-center text-black font-semibold">
          <div className="flex justify-start sm:items-center">
            <a href="#">.. Manage</a>
          </div>

          <div className="flex gap-6">
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
            <a href="#">Community</a>
          </div>

          {/* <button className='bg-orange-500 rounded-full w-auto p-3 justify-end sm:p-1 sm:rounded-none'>Get Started</button> */}
          <button className="bg-orange-500 text-white w-auto p-3 rounded-sm sm:bg-blue-500 sm:rounded-xl  sm:px-5 sm:py-2">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

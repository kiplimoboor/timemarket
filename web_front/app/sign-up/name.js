import { useEffect, useState } from "react";
import Link from "next/link";

export default function Name({ addFirst, addSecond, confirm }) {
  const handleChange = (e, input) => {
    if (input == 1) {
      addFirst(e.target.value);
    } else {
      addSecond(e.target.value);
    }
  };
  return (
    <>
      <p className="mt-2">Enter your name</p>
      <input
        onChange={(e) => handleChange(e, 1)}
        type="text"
        className="w-full border-gray-300 my-6"
        placeholder="First Name"
      />
      <input
        onChange={(e) => handleChange(e, 2)}
        type="text"
        className="w-full border-gray-300"
        placeholder="Last Name"
      />

      <div className="flex mt-6 justify-between items-center">
        <Link href="login" className="text-blue-600 text-sm">
          Already have an account?
        </Link>{" "}
        <button
          onClick={() => confirm(true)}
          className="border p-2  w-1/4  py-2 font-medium text-white transition-colors duration-300 transform bg-gray-950  hover:bg-gray-600 focus:outline-none"
        >
          Next
        </button>
      </div>
    </>
  );
}

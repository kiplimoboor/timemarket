import { useState } from "react";

const months = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const BasicInfo = ({ addDob, addGender, confirm }) => {
  const [month, setMonth] = useState(null);
  const [day, setDay] = useState(null);
  const [year, setYear] = useState(null);

  const handleChange = (e, item) => {
    if (item === "day") {
      setDay(e.target.value);
    } else if (item === "month") {
      setMonth(e.target.value);
    } else if (item === "year") {
      setYear(e.target.value);
    } else if (item === "gender") {
      addGender(e.target.value);
    }
  };
  const date = `${day}-${month}-${year}`;

  return (
    <>
      <p className="mt-2">Enter your birth date and gender</p>
      <div className="flex w-full">
        <select
          defaultValue={"Month"}
          onChange={(e) => handleChange(e, "month")}
          className="w-1/2 my-6 border-gray-300 text-gray-600"
        >
          <option value="Month" disabled>
            Month
          </option>
          {months.map((month, index) => (
            <option value={month} key={index}>
              {month}{" "}
            </option>
          ))}
        </select>
        <input
          onChange={(e) => handleChange(e, "day")}
          type="tel"
          className="w-1/3 my-6 border-gray-300 mx-3"
          placeholder="Date"
        ></input>
        <input
          onChange={(e) => handleChange(e, "year")}
          type="tel"
          className="w-1/3 my-6 border-gray-300"
          placeholder="Year"
        ></input>
      </div>

      <select
        className="w-full border-gray-300"
        onChange={(e) => handleChange(e, "gender")}
      >
        <option value="" disabled>
          Gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="none">Prefer not to Say</option>
      </select>
      <div className="flex mt-6 justify-end items-center">
        <button
          onClick={() => {
            addDob(date);
            confirm(true);
          }}
          className="border p-2  w-1/4  py-2 font-medium text-white transition-colors duration-300 transform bg-gray-950  hover:bg-gray-600 focus:outline-none"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default BasicInfo;

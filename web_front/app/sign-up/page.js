"use client";
import Image from "next/image";
import Link from "next/link";
import BasicInfo from "./basic-info";
import Contact from "./contacts";
import Name from "./name";
import { useState } from "react";
const SignUp = () => {
  const [firstName, setFirstName] = useState(null);
  const [secondName, setSecondName] = useState(null);
  const [okName, setOkName] = useState(false);
  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState(null);
  const [okBasic, setOkBasic] = useState(false);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [okContact, setOkContact] = useState(false);

  const details = { firstName, secondName, dob, gender, email, phone };

  return (
    <>
      <div className="w-full"></div>
      <div className="w-full max-w-xl m-auto mt-32 ">
        <div className="mx-6">
          <h1 className="text-2xl sm:text-4xl">
            Create a <br />
            Time Market Account
          </h1>
          {!okName && (
            <Name
              addFirst={setFirstName}
              addSecond={setSecondName}
              confirm={setOkName}
            />
          )}
          {okName && !okBasic && (
            <BasicInfo
              addDob={setDob}
              addGender={setGender}
              confirm={setOkBasic}
            />
          )}
          {okName && okBasic && !okContact && (
            <Contact
              addEmail={setEmail}
              addPhone={setPhone}
              confirm={setOkContact}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default SignUp;

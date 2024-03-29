"use client";

import Sidebar from "../components/sidebar";
import Navbar from "../components/nav";
import { useState } from "react";
import { SideWrapper } from "../context/sidebar";

const Homepage = () => {
  return (
    <>
      <SideWrapper>
        <Navbar />
        <Sidebar />
      </SideWrapper>
    </>
  );
};

export default Homepage;

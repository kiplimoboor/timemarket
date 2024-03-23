"use client";

import Sidebar from "../components/sidebar";
import Navbar from "../components/nav";
import { useState } from "react";

const Homepage = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  return (
    <>
      <Navbar activateSidebar={setIsSidebar} />
      <Sidebar isActive={isSidebar} activateSidebar={setIsSidebar} />
    </>
  );
};

export default Homepage;

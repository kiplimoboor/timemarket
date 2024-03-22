"use client";

import Sidebar from "../components/sidebar";
import Navbar from "../components/nav";
import { useState } from "react";

const Homepage = () => {
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <>
      <Navbar isSidebar={isSidebar} />
      {isSidebar ? <Sidebar /> : ""}
    </>
  );
};

export default Homepage;

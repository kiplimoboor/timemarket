"use client";

import Navbar from "../components/nav";
import Sidebar from "../components/sidebar";
import { SideWrapper } from "../context/sidebar";

const StockInfo = () => {
  return (
    <>
      <SideWrapper>
        <Navbar />
        <Sidebar />
      </SideWrapper>
    </>
  );
};

export default StockInfo;

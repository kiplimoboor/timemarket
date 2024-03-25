import { SideWrapper } from "../context/sidebar";
import Navbar from "./nav";
import TopGainers from "./top-gainers";
import TopLosers from "./top-losers";

const Stocks = () => {
  return (
    <>
      <div className="mx-4 sm:mx-24 mt-32">
        <h1 className="text-center text-2xl">Invest in the Best Deals</h1>
        <TopGainers />
        <TopLosers />
      </div>
    </>
  );
};

export default Stocks;

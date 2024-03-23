import Image from "next/image";
import Link from "next/link";

// This component is part of the sidebar

const SideAccount = () => {
  return (
    <>
      <div>
        <div className="mt-2 flex items-center py-2">
          <div className="">
            <Image src="/user.png" height={45} width={45} alt="x" />
          </div>
          <div className="mx-2">
            <p className="text-sm">John</p>
            <p className="text-gray-400 text-sm">john@doe.com</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm">Account</span>
          <h1 className="font-bold text-2xl text-emerald-600">$1000.00</h1>
        </div>
        <div className="mt-3 flex items-center justify-between pb-3 border-b">
          <Link href="/">
            <button className="bg-emerald-600 text-white font-medium w-32 p-2 hover:bg-emerald-500">
              Trade
            </button>
          </Link>
          <Link href="/">
            <button className="bg-orange-500 text-white font-medium w-32 p-2 hover:bg-orange-400">
              Deposit
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideAccount;

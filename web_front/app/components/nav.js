import Link from "next/link";
import Image from "next/image";

const Navbar = ({ activateSidebar }) => {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between justify-center items-center w-full py-4 px-6 shadow-sm ">
          <div>
            <Link href="/">
              <Image
                src="logo.svg"
                alt="logo"
                className="h-6 w-auto"
                height={10}
                width={10}
              />
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/" className="w-36 hidden sm:block sm:mr-3">
              <button className="bg-emerald-600 text-white font-medium w-32 p-2 hover:bg-emerald-500">
                Trade
              </button>
            </Link>
            <button onClick={() => activateSidebar(true)}>
              <Image src="/user.png" height={45} width={45} alt="x" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

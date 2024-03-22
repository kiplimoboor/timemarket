import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex sm:justify-between justify-center items-center w-full py-4 px-6 shadow-sm ">
          <Link href="/">
            <Image
              src="logo.svg"
              alt="logo"
              className="h-6 w-auto"
              height={10}
              width={10}
            />
          </Link>
          <Link href="/sign-up" className="w-1/12 hidden sm:block">
            <button className="py-2 w-full  font-medium text-white transition-colors duration-300 transform bg-emerald-500  hover:bg-emerald-400 focus:outline-none">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

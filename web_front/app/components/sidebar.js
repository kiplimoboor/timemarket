import Image from "next/image";
import Link from "next/link";
import SideAccount from "./side-account";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col h-screen shadow-md bg-white absolute top-0 right-0 w-full sm:w-80">
        <div className="absolute top-2 right-2">
          <button>
            <Image
              src="x.svg"
              height={10}
              width={10}
              alt="x"
              className="h-6 w-auto"
            />
          </button>
        </div>
        <SideAccount />
      </div>
    </>
  );
};

export default Sidebar;

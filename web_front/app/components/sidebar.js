import Image from "next/image";
import SideAccount from "./side-account";
import SideActions from "./side-actions";
import { useSideContext } from "../context/sidebar";

const Sidebar = () => {
  const { isOpen, setIsOpen } = useSideContext();
  return (
    <>
      <div
        className={`${isOpen ? "" : "translate-x-full"} fixed top-0 right-0 h-full w-80 bg-white shadow-md transition-all ease-in-out duration-300 overflow-x-hidden`}
      >
        <div className="absolute top-3 right-3">
          <button onClick={() => setIsOpen(false)}>
            <Image
              src="x.svg"
              height={10}
              width={10}
              alt="x"
              className="h-8 w-auto"
            />
          </button>
        </div>
        <div className="mx-4">
          <SideAccount />
          <SideActions />
        </div>
      </div>
    </>
  );
};

export default Sidebar;

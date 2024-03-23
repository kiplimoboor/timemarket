import Image from "next/image";
import Link from "next/link";

const SideActions = () => {
  return (
    <>
      <ul className="my-3 border-b">
        <li className="my-3 hover:bg-gray-100 p-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/user.svg"
              alt="user"
              height={15}
              width={15}
              className="h-4 w-auto"
            />{" "}
            <span className="mx-4 text-gray-700 ">My Profile</span>
          </Link>
        </li>
        <li className="my-3 hover:bg-gray-100 p-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/folder.svg"
              alt="user"
              height={15}
              width={15}
              className="h-4 w-auto"
            />{" "}
            <span className="mx-4 text-gray-700 ">Portfolio</span>
          </Link>
        </li>
        <li className="my-3 hover:bg-gray-100 p-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/dollar.svg"
              alt="user"
              height={15}
              width={15}
              className="h-4 w-auto"
            />{" "}
            <span className="mx-4 text-gray-700 ">Make Withdrawal</span>
          </Link>
        </li>
        <li className="my-3 hover:bg-gray-100 p-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/clock.svg"
              alt="user"
              height={15}
              width={15}
              className="h-4 w-auto"
            />{" "}
            <span className="mx-4 text-gray-700 ">Transaction History</span>
          </Link>
        </li>
      </ul>
      <div className="my-3 hover:bg-gray-100 p-2">
        <Link href="/" className="flex items-center">
          <Image
            src="/logout.svg"
            alt="user"
            height={15}
            width={15}
            className="h-4 w-auto"
          />{" "}
          <span className="mx-4 text-gray-700 ">Log Out</span>
        </Link>
      </div>
    </>
  );
};

export default SideActions;

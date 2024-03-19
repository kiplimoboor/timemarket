import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="w-11/12 mx-auto max-w-md mt-32 bg-white py-12">
        <div className="flex justify-center align-center">
          <img src="logo.png" alt="logo" className="h-12 w-auto" />
        </div>
        <h1 className="mt-3 text-center text-gray-800 font-medium">
          Hello there, welcome back
        </h1>
        <p className="text-center mt-3 text-gray-600">
          Login or create account
        </p>
        <div className="mx-3">
          <form className="mt-6">
            <div>
              <label className="text-sm text-gray-800">
                Email or username:
              </label>
              <input
                type="text"
                className="w-full border-gray-300"
                placeholder="john@doe.com"
              />
            </div>
            <div className="mt-4">
              <div className="flex item-center justify-between">
                <label className="text-sm text-gray-800">Password:</label>
                <a href="" className="text-xs text-blue-600">
                  Forgot Password?
                </a>
              </div>
              <input type="password" className="w-full border-gray-300" />
            </div>
          </form>
          <button className="mt-4 w-full py-2 font-medium text-white transition-colors duration-300 transform bg-gray-950  hover:bg-gray-600 focus:outline-none">
            Sign In
          </button>
          <p className="mt-8 text-center text-gray-600 font-medium">
            Don{`'`}t have an account yet?{" "}
            <a href="" className="text-blue-600">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

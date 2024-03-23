import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="w-11/12 mx-auto max-w-md mt-36">
        <div className="flex justify-center"></div>
        <h1 className="text-2xl sm:text-4xl text-center">
          Sign in to Time Market
        </h1>
        <h1 className="mt-3 text-center text-gray-800">
          Use your email or username
        </h1>
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
                <Link href="not-found" className="text-xs text-blue-600">
                  Forgot Password?
                </Link>
              </div>
              <input type="password" className="w-full border-gray-300" />
            </div>
          </form>
          <button className="mt-4 w-full py-2 font-medium text-white transition-colors duration-300 transform bg-emerald-600  hover:bg-emerald-400 focus:outline-none">
            Sign In
          </button>
          <p className="mt-8 text-center text-gray-600 text-sm">
            Don{`'`}t have an account yet?{" "}
            <Link href="sign-up" className="text-blue-600">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

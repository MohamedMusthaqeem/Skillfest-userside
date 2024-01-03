import React from "react";
import LoginImg from "../../assets/Images/Ani.gif";
import Google from "../../assets/Images/Google.png";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-white">
      <div className="flex flex-col md:flex-row items-center md:justify-evenly md:p-28 ">
        <div>
          <img src={LoginImg} alt="" className="hidden md:block" />
        </div>
        <div className="w-full max-w-md p-6 bg-white rounded-md shadow-lg">
          <h1 className="text-3xl font-semibold text-gray-800 uppercase">
            skillfest
          </h1>
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Login</h1>

          {/* Login Form */}
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md outline-none"
                placeholder="sample@example.com"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md outline-none"
                placeholder="********"
                required
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right mb-4">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
            {/* Submit Button */}
            <div className="py-2 ">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Sign In
              </button>
            </div>

            {/* Sign In with Google */}
            <div className="mb-4 flex">
              <button
                type="button"
                className=" text-black py-2 flex rounded-md w-full justify-center bg-slate-100"
              >
                <img src={Google} alt="" className="h-6 px-3" />
                <p>Sign in with Google</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

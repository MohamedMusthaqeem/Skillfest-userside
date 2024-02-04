import React, { useState } from "react";
import Sign from "../../assets/Images/Mobile login.gif";
import { useSignup } from "../../hooks/useSignup";
import { RxCross2 } from "react-icons/rx";
export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(name, email, password);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-white">
      <div className="flex flex-col md:flex-row items-center md:justify-evenly md:p-28 ">
        <div>
          <img src={Sign} alt="" className="hidden md:block" />
        </div>
        <div className="w-full max-w-md p-6 bg-white rounded-md shadow-lg">
          <h1 className="text-3xl font-semibold text-gray-800 uppercase">
            skill <span className="text-red-600">f</span><span className="text-yellow-400">e</span><span className="text-green-500">s</span><span className="text-blue-600">t</span>
          </h1>
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">SignUp</h1>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                className="mt-1 p-2 w-full border rounded-md outline-none"
                placeholder="sample@example.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                className="mt-1 p-2 w-full border rounded-md outline-none"
                placeholder="sample@example.com"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                autoComplete="on"
                className="mt-1 p-2 w-full border rounded-md outline-none"
              />
            </div>
            {/* Submit Button */}
            <div className="py-2 ">
              <button
                className="w-full
               bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                disabled={isLoading}
                onClick={()=>{
                  setShow("")
                }}
              >
                Sign up
              </button>
            </div>
            {error && (
              <div
                className={`text-red-700 border bg-red-200 border-red-600 p-2 justify-center items-center gap-4  rounded-lg flex ${show}`}
              >
                {error}
                <RxCross2
                  className="cursor-pointer"
                  onClick={() => {
                    setShow("hidden");
                  }}
                />
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

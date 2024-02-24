import React, { useState } from "react";
import LoginImg from "../../assets/Images/Ani.gif";
import Google from "../../assets/Images/Google.png";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { RxCross2 } from "react-icons/rx";
import { motion, spring } from "framer-motion";
import { logindiv, title, login_text } from "../../Styles/LoginStyles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState("");
  const { login, error, isLoading } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };
  return (
    <div className="min-h-screen flex flex-col justify-center bg-white">
      <div className="flex flex-col md:flex-row items-center md:justify-evenly md:p-28 ">
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={LoginImg} alt="" className="hidden md:block" />
        </motion.div>
        <motion.div
          className="w-full max-w-md p-6 bg-white rounded-md shadow-lg"
          variants={logindiv}
          animate="animate"
          initial="initial"
        >
          <motion.h1
            className="text-3xl font-semibold text-gray-800 uppercase"
            variants={title}
          >
            skill <span className="text-red-600">f</span>
            <span className="text-yellow-400">e</span>
            <span className="text-green-500">s</span>
            <span className="text-blue-600">t</span>
          </motion.h1>
          <motion.h1
            className="text-3xl font-semibold text-gray-800 mb-6"
            variants={login_text}
          >
            Login
          </motion.h1>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
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
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                className="mt-1 p-2 w-full border rounded-md outline-none"
                placeholder="sample@example.com"
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                autoComplete="on"
                className="mt-1 p-2 w-full border rounded-md outline-none"
                placeholder="********"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right mb-4">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
            {/* Submit Button */}
            <div className="py-5 ">
              <button
                className="w-full
               bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                disabled={isLoading}
                onClick={() => {
                  setShow("");
                }}
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
            <div className="flex space-x-2 justify-center">
              <h1>If you don't have an account</h1>
              <Link to="signup" className="text-blue-500">
                SignUp
              </Link>
            </div>
          </form>
          {error && (
            <motion.div
              className={`text-red-700 border bg-red-200 border-red-600 p-2 my-2 justify-center items-center gap-4  rounded-lg flex ${show}`}
              initial={{ x: 4 }}
              animate={{ x: 0 }}
              transition={{
                yoyo: 10,
                duration: 0.1,
              }}
            >
              {error}
              <RxCross2
                className="cursor-pointer"
                onClick={() => {
                  setShow("hidden");
                }}
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Login;

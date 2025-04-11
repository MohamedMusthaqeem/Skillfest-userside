import React, { useState } from "react";
import Sign from "../../assets/Images/Mobile login.gif";
import { useSignup } from "../../hooks/useSignup";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Signup = () => {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-white to-blue-50"
    >
      <div className="flex flex-col md:flex-row items-center md:justify-evenly md:p-28">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            transition: { yoyo: Infinity, duration: 1 },
          }}
        >
          <img
            src={Sign}
            alt="signup gif"
            className="hidden md:block w-[400px]"
          />
        </motion.div>

        <motion.div
          className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-4xl font-bold text-gray-800 uppercase text-center mb-2"
            variants={item}
          >
            skill <span className="text-red-600">f</span>
            <span className="text-yellow-400">e</span>
            <span className="text-green-500">s</span>
            <span className="text-blue-600">t</span>
          </motion.h1>

          <motion.h2
            className="text-2xl font-semibold text-gray-600 text-center mb-6"
            variants={item}
          >
            Create your account 🚀
          </motion.h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div variants={item}>
              <label className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="mt-1 p-2 w-full border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
              />
            </motion.div>

            <motion.div variants={item}>
              <label className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1 p-2 w-full border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
              />
            </motion.div>

            <motion.div variants={item}>
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="mt-1 p-2 w-full border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
              />
            </motion.div>

            <motion.div variants={item}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                disabled={isLoading}
                onClick={() => setShow("")}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                Sign up
              </motion.button>
            </motion.div>
          </form>

          {error && (
            <motion.div
              className={`text-red-700 border bg-red-100 border-red-600 p-3 mt-4 rounded-lg flex items-center justify-between ${show}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span>{error}</span>
              <RxCross2
                className="cursor-pointer"
                onClick={() => setShow("hidden")}
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Signup;

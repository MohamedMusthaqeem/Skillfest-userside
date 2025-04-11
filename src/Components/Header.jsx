import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import toast, { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const location = useLocation();

  const handleClick = () => {
    logout();
    toast("Logged Out, Come back Soon", {
      icon: "😊",
      duration: 4000,
    });
  };

  const links = [
    { path: "/layout", label: "Competition" },
    { path: "/layout/event", label: "Events" },
    { path: "/layout/workshop", label: "Workshop" },
    { path: "/layout/register", label: "Registered" },
    { path: "/layout/issues", label: "Issues" },
    { path: "/layout/about", label: "About" },
  ];

  return (
    <motion.div
      className="sticky top-0 z-10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 60 }}
    >
      <motion.div
        className="bg-Primary text-white py-4 flex justify-center items-baseline space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="font-Monoton text-xl text-[#EFC75E]"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          SkillFest
        </motion.h1>

        <div className="text-black">
          <div className="flex justify-center space-x-6 bg-white w-fit px-3 py-2 rounded-full transition-all">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.div
                  key={link.path}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.path}
                    className={`px-4 py-1 rounded-full transition-all duration-300 font-medium text-sm
                      ${
                        isActive
                          ? "bg-black text-white"
                          : "text-black hover:bg-gray-200"
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          className="flex space-x-2 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            className="text-white px-3 py-1 bg-rose-600 rounded-md hover:bg-red-600"
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Logout
          </motion.button>
          {user && (
            <motion.p
              className="text-lg font-medium whitespace-nowrap"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {`Welcome, ${user.name}`}
            </motion.p>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Header;

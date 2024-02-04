import React from "react";
import { Link } from "react-router-dom";

const Header1 = ({}) => {
  return (
    <div className="sticky top-0">
      <div className="py-8 font-Poppins border-b-2 border-gray-200 flex justify-end gap-4 text-lg">
        <Link to="/" className=" cursor-pointer hover:text-blue-500">Login</Link>
        <Link to="signup" className="pr-3 cursor-pointer  hover:text-blue-500">SignUp</Link>
      </div>
    </div>
  );
};

export default Header1;

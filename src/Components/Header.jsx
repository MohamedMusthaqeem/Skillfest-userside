import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [active, Setactive] = useState({
    s1: "bg-black text-white px-2 py-1 rounded-full ",
    s2: "",
    s3: "",
    s4: "",
    s5: "",
  });
  return (
    <div className="sticky top-0">
      <div className="bg-Primary text-white py-4 flex justify-center items-baseline space-x-4  ">
        <h1 className=" font-Monoton text-xl text-[#EFC75E]">SkillFest</h1>
        <div className="  text-black">
          <div className="flex justify-center space-x-9 bg-white w-fit px-2 py-1 rounded-full pr-2 transition-all">
            <Link
              to="/layout"
              className={`cursor-pointer ${active.s1} px-2 py-1 `}
              onClick={() => {
                Setactive({
                  s1: "bg-black text-white  rounded-full",
                  s2: "",
                  s3: "",
                  s4: "",
                  s5: "",
                });
              }}
            >
              Competition
            </Link>
            <Link
              to="event"
              className={`cursor-pointer ${active.s2} px-2 py-1`}
              onClick={() => {
                Setactive({
                  s1: "",
                  s2: "bg-black text-white  rounded-full",
                  s3: "",
                  s4: "",
                  s5: "",
                });
              }}
            >
              Events
            </Link>
            <Link
              to="workshop"
              className={`cursor-pointer ${active.s3} px-2 py-1`}
              onClick={() => {
                Setactive({
                  s1: "",
                  s2: "",
                  s3: " bg-black text-white  rounded-full",
                  s4: "",
                  s5: "",
                });
              }}
            >
              Workshop
            </Link>
            <Link
              to="register"
              className={`cursor-pointer ${active.s4} px-2 py-1`}
              onClick={() => {
                Setactive({
                  s1: "",
                  s2: "",
                  s3: "",
                  s4: "bg-black text-white  rounded-full",
                  s5: "",
                });
              }}
            >
              Registered
            </Link>
            <Link
              to="about"
              className={`cursor-pointer ${active.s5} px-2 py-1`}
              onClick={() => {
                Setactive({
                  s1: "",
                  s2: "",
                  s3: "",
                  s4: "",
                  s5: "bg-black text-white  rounded-full",
                });
              }}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

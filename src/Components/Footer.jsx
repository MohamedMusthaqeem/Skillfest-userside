import React from "react";
import Logo from "../assets/Images/Logos.png";
const Footer = () => {
  return (
    <div className="bg-Primary ">
      <div className="flex text-white items-center justify-around">
        <img src={Logo} alt="" className="h-52" />
        <div className="text-wrap text-lg">
          <p>
            Welcome to Skillfest, your gateway to a world of knowledge,
            creativity,
          </p>
          <p>
            and innovation! Skillfest is an initiative by SREC aimed at
            fostering collaboration,
          </p>
          <p>learning, and skill enhancement among college students.</p>
          <p className="underline">Made With ❤️ by Mind Mantra</p>
        </div>
        <div className="text-lg">
          <p>SREC</p>
          <p>Vattamalaipalayam,N.G.G.O Colony</p>
          <p>Coimbatore-641022</p>
          <p>Email: info@skillfestcollege.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

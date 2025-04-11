import React from "react";
import Logo from "../assets/Images/Logos.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      className="bg-Primary text-white py-10 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-around gap-10">
        <motion.img
          src={Logo}
          alt="SkillFest Logo"
          className="h-60"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />

        <motion.div
          className="text-lg text-center md:text-left space-y-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
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
        </motion.div>

        <motion.div
          className="text-lg text-center md:text-left space-y-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="font-semibold">SREC</p>
          <p>Vattamalaipalayam, N.G.G.O Colony</p>
          <p>Coimbatore - 641022</p>
          <a
            href="https://www.srec.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-200 hover:text-blue-300"
          >
            www.srec.ac.in
          </a>
          <p>Phone: 9360774943</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;

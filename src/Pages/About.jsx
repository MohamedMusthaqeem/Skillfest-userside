import React from "react";
import logo from "../assets/Images/Black White Minimalist Logo.png";
import { Carousel } from "flowbite-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-max">
      <motion.div
        className="bg-Primary border-t border-b-[15px] border-b-Secondary border-t-white rounded-br-full"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl px-4 py-7 text-white font-semibold">
          About Us
        </h1>
      </motion.div>

      <motion.div
        className="h-56 sm:h-64 xl:h-80 2xl:h-96 px-16 pt-16 pb-8 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <Carousel leftControl=" " rightControl=" ">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="flex h-full items-center justify-center bg-Primary text-white text-xl px-6 text-center gap-4"
            >
              <motion.img
                src={logo}
                alt=""
                className="h-24"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 * i }}
              />
              <p>
                {
                  [
                    "SkillFest is an event co-ordination system, which will give you an easy way to register events, competitions, workshops.",
                    "SkillFest aims to develop improved digital tools that are easy to use, work for everyone, and prioritize safety.",
                    "This initiative will enhance organizations online performance and ensure they effectively serve diverse audiences.",
                    "Sophisticated email notification system that automatically sends personalized notifications to participants upon event registration.",
                  ][i]
                }
              </p>
            </div>
          ))}
        </Carousel>
      </motion.div>

      <motion.div
        className="px-16 pt-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-5 text-justify"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {[
          "About SkillFest",
          "Our Goals",
          "Our Approach",
          "Upcoming Enhancements",
        ].map((title, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-black font-semibold text-xl mb-2">{title}</h1>
            <p className="text-black text-lg">
              {
                [
                  "Welcome to SkillFest, where innovation meets excellence in digital event management solutions. In a world where the digital landscape is constantly evolving, organizations face a daunting challenge: how to effectively manage events online while ensuring user-friendly experiences and safeguarding valuable information.",
                  "We understand that the traditional methods are no longer sufficient to meet the demands of today's dynamic environment. That's why we're dedicated to crafting solutions that not only streamline processes but also enhance the overall online experience for organizations and their diverse audiences.",
                  "At SkillFest, we believe in a customer-centric approach to innovation. We closely gather unique needs and challenges, ensuring our solutions are enough to meet specific requirements. We make the user interface very easily accessible and can make registrations quicker without any problem. The instructions and information about the particular occasions are detailed.",
                  "We decided to integrate VR for commonly used halls and refreshment spots, which makes it easier for users to find the respective location. Communication between user and admin will also be improved.",
                ][index]
              }
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;

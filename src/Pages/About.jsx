import React from "react";
import logo from "../assets/Images/Black White Minimalist Logo.png";
import { Carousel } from "flowbite-react";

const About = () => {
  return (
    <>
      <div className="min-h-max">
        <div className="bg-Primary border-t border-b-[15px] border-b-Secondary border-t-white rounded-br-full">
          <h1 className="text-4xl px-4 py-7 text-white font-semibold">
            About Us
          </h1>
        </div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 px-16 pt-16 pb-8 -z-10">
          <Carousel leftControl=" " rightControl=" ">
            <div className="flex h-full items-center justify-center bg-Primary text-white text-xl">
              <img src={logo} alt="" className="h-24" />
              SkillFest is an event co-ordination system ,which will give you an
              easy way to register events, competitions,workshops.
            </div>
            <div className="flex h-full items-center justify-center bg-Primary text-white text-xl">
              <img src={logo} alt="" className="h-24" />
              SkillFest aims to develop improved digital tools that are easy to
              use, work for everyone, and prioritize safety.
            </div>
            <div className="flex h-full items-center justify-center bg-Primary text-white text-xl">
              <img src={logo} alt="" className="h-24" />
              This initiative will enhance organizations online performance and
              ensure they effectively serve diverse audiences.
            </div>
            <div className="flex h-full items-center justify-center bg-Primary text-white text-xl">
              <img src={logo} alt="" className="h-24" />
              Sophisticated email notification system that automatically sends
              personalized notifications to participants upon event
              registration.
            </div>
          </Carousel>
        </div>
        <div className="px-16 pt-6 pb-6 grid grid-cols-2 gap-5 text-justify">
          <div>
            <h1 className="text-black font-semibold text-xl">
              About SkillFest
            </h1>
            <br />
            <p className="text-black text-lg">
              Welcome to SkillFest, where innovation meets excellence in digital
              event management solutions. In a world where the digital landscape
              is constantly evolving, organizations face a daunting challenge:
              how to effectively manage events online while ensuring
              user-friendly experiences and safeguarding valuable information.
            </p>
          </div>
          <div>
            <h1 className="text-black font-semibold text-xl">Our Goals</h1>
            <br />
            <p className="text-black text-lg ">
              We understand that the traditional methods are no longer
              sufficient to meet the demands of today's dynamic environment.
              That's why we're dedicated to crafting solutions that not only
              streamline processes but also enhance the overall online
              experience for organizations and their diverse audiences.
            </p>
          </div>
          <div>
            <h1 className="text-black font-semibold text-xl">Our Approach</h1>
            <br />
            <p className="text-black text-lg ">
              At SkillFest, we believe in a customer-centric approach to
              innovation. We closely gather unique needs and challenges,ensuring
              our solutions are enought to meet specific requirements.We make
              the user interface very easily accesible and can able make
              registrations quicker without any problem ,The instruction and
              information about the particular occasions are detaily mentioned.
            </p>
          </div>
          <div>
            <h1 className="text-black font-semibold text-xl">
              Upcoming Enhancements
            </h1>
            <br />
            <p className="text-black text-lg ">
              We decided to integrate VR for commonly used halls and refreshment
              spot,which makes the user to find the respective location very
              easily.And Communication between user and admin will be made
              easier.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

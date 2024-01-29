import React from "react";
import idea from "../assets/Images/ideathon.png";
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import { Modal } from "flowbite-react";
import { MdInfoOutline } from "react-icons/md";
import { useState } from "react";
import first from "../assets/Images/first.png";
import second from "../assets/Images/second.png";
import third from "../assets/Images/third.png";
const Card = ({ compet }) => {
  const [openModal, setOpenModal] = useState(false);
  function onCloseModal() {
    setOpenModal(false);
  }
  return (
    <div>
      <div className="container mx-auto py-10 px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {compet.map((com) => (
            <div key={com._id}>
              <div className="  rounded-lg bg-Primary border-y-8 border-Secondary">
                <div className="p-3">
                  <img
                    src={com.imageurl}
                    className="rounded-md h-72 object-fill w-full"
                  />
                </div>
                <div className="p-2">
                  <p className="text-lg text-wrap text-Secondary md:text-2xl font-semibold tracking-wider mb-2">
                    {com.title}
                  </p>
                  <div className="flex space-x-2 items-center">
                    <SlCalender size={25} className="text-Secondary" />
                    <p className="text-sm text-Secondary">{com.date}</p>
                  </div>
                  <div className="flex items-center space-x-2 py-2">
                    <FaRegClock size={25} className="text-Secondary" />
                    <p className="text-Secondary">{com.time}PM</p>
                  </div>
                  <div>
                    <p
                      className="border border-Secondary rounded-lg p-2 text-center text-Secondary cursor-pointer"
                      onClick={() => setOpenModal(true)}
                    >
                      Register
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Modal show={openModal} size="xl" onClose={onCloseModal} popup>
                  <Modal.Header />
                  <Modal.Body>
                    <div className="space-y-6 overflow-y-auto">
                      <img src={com.imageurl} alt="" />
                      <div className="font-Poppins">
                        <p className="text-lg font-semibold">{com.title}</p>
                        <p className="text-wrap">{com.description}</p>
                        <p className>
                          <span className="font-semibold px-1">Time:</span>
                          {com.time}PM
                        </p>
                        <p>
                          <span className="font-semibold px-1">Date:</span>
                          {com.date}
                        </p>
                        <div className="space-y-2">
                          <h1 className="text-lg text-center">Prize Pool</h1>
                          <div className="flex space-x-2 items-center">
                            <img src={first} alt="" />
                            <p>Rs.{com.first_prize}</p>
                          </div>
                          <div className="flex space-x-2  items-center">
                            <img src={second} alt="" />
                            <p>Rs.{com.second_prize}</p>
                          </div>
                          <div className="flex space-x-2  items-center">
                            <img src={third} alt="" />
                            <p>Rs.{com.third_prize}</p>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-medium text-gray-900 font-Poppins dark:text-white">
                        Register
                      </h3>
                      {/* basic instructions */}
                      <div>
                        <h1 className="text-lg font-Poppins flex items-center">
                          Basic Instructions{" "}
                          <span className="justify-normal">
                            <MdInfoOutline size={20} />
                          </span>
                        </h1>
                        <li className="font-Poppins">
                          All the participants are asked to bring their identity
                          card of corresponding College ,Without identity card
                          you will not allowed to enter the college
                        </li>
                      </div>
                      <form className="space-y-3 md:text-lg">
                        <div className="px-3">
                          <label
                            htmlFor="Username"
                            className="block  text-black "
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            className="mt-1 px-2  py-1 w-full border rounded-md  outline-none"
                            placeholder="John"
                            required
                          />
                        </div>
                        <div className="px-3">
                          <label htmlFor="email" className="block   text-black">
                            Year
                          </label>
                          <select id="cars">
                            <option value="1">First</option>
                            <option value="2">Second</option>
                            <option value="3">Third</option>
                            <option value="4">Fourth</option>
                          </select>
                        </div>
                        <div className="px-3">
                          <label
                            htmlFor="password"
                            className="block  text-black"
                          >
                            College
                          </label>
                          <input
                            type="text"
                            className="mt-1 px-2  py-1 w-full border rounded-md outline-none"
                            placeholder="****"
                            required
                          />
                        </div>
                        <div className="px-3">
                          <label
                            htmlFor="email"
                            className="block  text-black     "
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="mt-1 px-2  py-1 w-full border rounded-md outline-none"
                            placeholder="****"
                            required
                          />
                        </div>
                        <div className="px-3 ">
                          <label
                            htmlFor="email"
                            className="block  text-black     "
                          >
                            Phone Number
                          </label>
                          <input
                            type="number"
                            className="mt-1 px-2  py-1 w-full border rounded-md outline-none"
                            placeholder="**********"
                            required
                          />
                        </div>
                        <div className="px-3">
                          <p>
                            Registration Fee: <span>{com.amount}</span>
                          </p>
                        </div>
                        <div className="px-3 py-2">
                          <button className="w-full py-2 rounded-xl border border-Primary ">
                            Register
                          </button>
                          <div className="p-2 text-sm text-red-700 border border-red-700 rounded-lg my-2 bg-red-200">
                            <li>Register Carefully</li>
                            <li>Provide valid information</li>
                            <li>Once Registered cannot be cancelled</li>
                          </div>
                        </div>
                      </form>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

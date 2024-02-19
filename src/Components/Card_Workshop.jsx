import React from "react";
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import { Modal } from "flowbite-react";
import { MdInfoOutline } from "react-icons/md";
import { useState } from "react";
import certification from "../assets/Images/icons8-certification-48.png";
import {useAuthContext} from '../hooks/useAuthContext'
import axios from "axios";
const Card_Workshop = ({ com }) => {
  //states
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [college, setCollege] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setPhone] = useState("");
  const [event_name, setEvent] = useState("");
  const [fees, setFee] = useState("");
  const [supportnumone, setOne] = useState("");
  const [supportnumtwo, setTwo] = useState("");
  const {user}=useAuthContext();
  const [date,setDate]=useState("");
  const [time,setTime]=useState("");

  //modal on/off
  const [openModal, setOpenModal] = useState(false);
  function onCloseModal() {
    setOpenModal(false);
  }
  //handling post request
  const handleRegister = async (e) => {
    setEvent(com.title);
    setOne(com.supportnumone);
    setTwo(com.supportnumtwo);
    setFee(com.amount);
    setDate(com.date);
    setTime(com.time);
    e.preventDefault();
    if(!user){
      return
    }
    const reg = {
      name,
      year,
      college,
      email,
      phone_no,
      event_name,
      fees,
      supportnumone,
      supportnumtwo,
      date,
      time
    };
    console.log(reg);
    const res = await axios.post("http://localhost:5000/api/register", reg, {
      headers: {
        "Content-Type": "application/json",
        "Authorization":`Bearer ${user.token}`,
      },
    });
    if (!res.status) {
      console.log("could able to register");
    }
    if (res.status) {
      setName("");
      setEvent("");
      setFee("");
      setCollege("");
      setPhone("");
      setOne("");
      setEmail("");
      setYear("");
      setTwo("");
      console.log("registered", res.data);
    }
  };
  return (
    <div>
      <div className="container mx-auto py-10 px-8 ">
        <div>
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
                    className="border border-Secondary rounded-lg p-2 text-center text-Secondary cursor-pointer hover:scale-95 duration-150"
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
                      <div className="flex space-x-1 items-baseline">
                        <h1 className="text-lg font-Poppins font-semibold">
                          Outcomes:
                        </h1>
                        <p>{com.outcomes}</p>
                      </div>
                      <div className="flex space-x-1 items-center">
                        <h1 className="text-lg font-Poppins font-semibold">
                          Incharge:
                        </h1>
                        <p>{com.incharge}</p>
                      </div>
                      <div className="flex space-x-1 items-center">
                        <h1 className="text-lg font-Poppins font-semibold">
                          No.of.Hours:
                        </h1>
                        <p>{com.no_of_hours}</p>
                      </div>
                      <div className="flex space-x-1 items-center">
                        <h1 className="text-lg font-Poppins font-semibold">
                          No.of.Days:
                        </h1>
                        <p>{com.no_of_days}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <img src={certification} alt="" />
                      <p>
                        e-Certification will be provided after the end of the
                        workshop
                      </p>
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 font-Poppins  dark:text-white">
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
                        card of corresponding College ,Without identity card you
                        will not allowed to enter the college
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
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          value={name}
                          className="mt-1 px-2  py-1 w-full border rounded-md  outline-none"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div className="px-3">
                        <label htmlFor="email" className="block   text-black">
                          Year
                        </label>
                        <select
                          id="cars"
                          onChange={(e) => {
                            setYear(e.target.value);
                          }}
                          value={year}
                        >
                          <option value="">Select Year</option>
                          <option value="1">First</option>
                          <option value="2">Second</option>
                          <option value="3">Third</option>
                          <option value="4">Fourth</option>
                        </select>
                      </div>
                      <div className="px-3">
                        <label htmlFor="password" className="block  text-black">
                          College
                        </label>
                        <input
                          type="text"
                          onChange={(e) => {
                            setCollege(e.target.value);
                          }}
                          value={college}
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
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          value={email}
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
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                          value={phone_no}
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
                        <button className="w-full py-2 rounded-xl border border-Primary hover:bg-Primary hover:text-white duration-150  " onClick={handleRegister}>
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
        </div>
      </div>
    </div>
  );
};

export default Card_Workshop;

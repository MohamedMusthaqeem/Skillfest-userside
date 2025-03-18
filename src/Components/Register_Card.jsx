import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import register from "../assets/Images/registered.png";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";

const RegisterCard = ({ reg }) => {
  const [showForm, setShowForm] = useState(false);
  const [comment, setComment] = useState("");
  const { user } = useAuthContext();
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!user) {
      return;
    }
    const fed = {
      name: reg.name,
      year: reg.year,
      college: reg.college,
      email: reg.email,
      phone_no: reg.phone_no,
      event_name: reg.event_name,
      comment: comment,
      date: reg.date,
      time: reg.time,
      user_main_id: reg.user_main_id,
    };
    console.log(fed);
    const res = await axios.post(
      "http://localhost:5000/api/register/setfed",
      fed,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const data = res.data;
    if (res.status) {
      console.log(data);
      setComment("");
      setShowForm(false);
    }
  };
  return (
    <div className="max-w-lg mx-auto bg-gradient-to-r from-blue-50 to-blue-100 shadow-xl rounded-2xl overflow-hidden border border-gray-300 p-6 transform hover:scale-105 transition duration-300 ease-in-out m-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{reg.name}</h1>
          <div className="flex items-center space-x-2 mt-2">
            <img src={register} alt="Registered" className="h-8 w-8" />
            <h2 className="text-xl font-medium text-gray-800">
              {reg.event_name}
            </h2>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-gray-700">{reg.college}</p>
          <p className="text-lg font-bold text-blue-600">Rs. {reg.fees}</p>
        </div>
      </div>

      <p className="text-gray-700 mb-6 text-sm leading-relaxed border-l-4 border-blue-500 pl-4 italic">
        "If you have any doubts about the events or workshops, feel free to
        reach out. Our team is happy to assist you! 😊"
      </p>

      <div className="bg-white p-4 rounded-xl shadow-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">
          📞 Contact Support
        </h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-2 bg-blue-50 rounded-md shadow-sm">
            <FaPhoneAlt className="text-green-600" size={20} />
            <p className="text-gray-900 font-semibold">{reg.supportnumone}</p>
          </div>
          <div className="flex items-center space-x-3 p-2 bg-blue-50 rounded-md shadow-sm">
            <FaPhoneAlt className="text-green-600" size={20} />
            <p className="text-gray-900 font-semibold">{reg.supportnumtwo}</p>
          </div>
        </div>
      </div>

      <button
        className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        onClick={() => setShowForm(true)}
      >
        Give Feedback
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Feedback Form
            </h2>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={reg.name}
              readOnly
              className="w-full p-2 border rounded-lg bg-gray-100 text-gray-700"
            />
            <label className="block text-sm font-medium text-gray-700 mt-2">
              College Name
            </label>
            <input
              type="text"
              value={reg.college}
              readOnly
              className="w-full p-2 border rounded-lg bg-gray-100 text-gray-700"
            />
            <label className="block text-sm font-medium text-gray-700 mt-2">
              Comment
            </label>
            <textarea
              className="w-full p-2 border rounded-lg"
              rows="4"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your feedback here..."
            ></textarea>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                className="bg-gray-400 text-white py-2 px-4 rounded-lg"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                disabled={comment.length === 0 ? true : false}
                onClick={(e) => {
                  handleRegister(e);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterCard;

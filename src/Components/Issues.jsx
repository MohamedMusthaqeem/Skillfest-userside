import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaUniversity,
  FaUser,
  FaCalendarAlt,
  FaClock,
  FaExclamationCircle,
} from "react-icons/fa";

const getStatusStyle = (status) => {
  switch (status) {
    case 0:
      return {
        label: "Pending",
        style: "bg-yellow-100 text-yellow-700 border-yellow-300",
      };
    case 1:
      return {
        label: "Resolved",
        style: "bg-green-100 text-green-700 border-green-300",
      };
    case 2:
      return {
        label: "Cannot Resolve",
        style: "bg-red-100 text-red-700 border-red-300",
      };
    default:
      return {
        label: "Unknown",
        style: "bg-gray-100 text-gray-600 border-gray-300",
      };
  }
};

const Issues = ({
  name,
  year,
  college,
  email,
  phone_no,
  event_name,
  issue,
  date,
  time,
  ticket_status,
}) => {
  const { label, style } = getStatusStyle(ticket_status);

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-2xl rounded-3xl p-6 w-full max-w-2xl mx-auto border border-gray-200 transition-transform hover:scale-[1.01] duration-300">
      <div className="mb-4 border-b pb-3 flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-800 flex items-center gap-2">
            <FaExclamationCircle className="text-red-500" />
            {event_name}
          </h2>
          <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
            <FaCalendarAlt className="text-gray-400" /> {date}
            <FaClock className="ml-4 text-gray-400" /> {time}
          </p>
        </div>
        <span
          className={`text-sm font-semibold px-3 py-1 rounded-full border ${style}`}
        >
          {label}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        <p className="flex items-center gap-2">
          <FaUser className="text-blue-500" />
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p className="flex items-center gap-2">
          🎓 <span className="font-semibold">Year:</span> {year}
        </p>
        <p className="flex items-center gap-2 col-span-2">
          <FaUniversity className="text-indigo-500" />
          <span className="font-semibold">College:</span> {college}
        </p>
        <p className="flex items-center gap-2">
          <FaEnvelope className="text-rose-500" />
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p className="flex items-center gap-2">
          <FaPhone className="text-green-600" />
          <span className="font-semibold">Phone:</span> {phone_no}
        </p>
      </div>

      <div className="mt-4 text-gray-800">
        <p className="font-semibold mb-1">Issue:</p>
        <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-lg text-sm">
          {issue}
        </div>
      </div>
    </div>
  );
};

export default Issues;

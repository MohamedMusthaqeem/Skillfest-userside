import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import config from "../config";
import UserIssueCard from "../Components/Issues";

const Issues = () => {
  const { SERVER_ADDRESS } = config;
  const [ticket, setTicket] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchRegister = async () => {
      try {
        const res = await axios.get(`${SERVER_ADDRESS}/api/register/getissue`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const data = res.data;
        if (res.status === 200) {
          setTicket(data);
          console.log(data);
        }
      } catch (err) {
        console.error("Error fetching tickets:", err);
      }
    };

    if (user) {
      fetchRegister();
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-Primary border-t border-b-[15px] border-b-Secondary border-t-white rounded-br-full">
        <h1 className="text-4xl px-4 py-7 text-white font-semibold">Issues</h1>
      </div>

      <div className="px-4 md:px-8 py-10">
        {ticket.length > 0 ? (
          <div className="space-y-8">
            {ticket.map((item, index) => (
              <UserIssueCard key={index} {...item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg mt-20">
            No issues reported yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Issues;

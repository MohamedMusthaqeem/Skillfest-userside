import React, { useEffect, useState } from "react";
import Register_Card from "../Components/Register_Card";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import config from "../config";

const Registered = () => {
  const { SERVER_ADDRESS } = config;
  const [regsiter, setRegister] = useState([]);
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchRegister = async () => {
      const res = await axios.get(
        `${SERVER_ADDRESS}/api/register`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
        [user]
      );
      const data = res.data;
      if (res.status) {
        setRegister(data);
        console.log(data);
      }
    };
    if (user) {
      fetchRegister();
    }
  }, [user]);
  return (
    <div className="min-h-screen">
      <div className="bg-Primary border-t border-b-[15px] border-b-Secondary border-t-white rounded-br-full">
        <h1 className="text-4xl px-4 py-7 text-white font-semibold">
          Registered
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {regsiter &&
          regsiter.map((reg) => <Register_Card key={reg._id} reg={reg} />)}
      </div>
    </div>
  );
};

export default Registered;

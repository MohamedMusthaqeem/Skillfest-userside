import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";
import config from "../../config";
const Competition = () => {
  const { SERVER_ADDRESS } = config;
  const [competitions, setCompetitions] = useState([]);
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchCompetition = async () => {
      const res = await axios.get(`${SERVER_ADDRESS}/get_all/comp`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = res.data;
      if (res.status) {
        setCompetitions(data);
        console.log(data);
      }
    };
    if (user) {
      fetchCompetition();
    }
  }, [user]);
  return (
    <div className="min-h-screen">
      <div className="bg-Primary border-t border-b-[15px] border-b-Secondary border-t-white rounded-br-full">
        <h1 className="text-4xl px-4 py-7 text-white font-semibold">
          Competitions
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {competitions &&
          competitions.map((comp) => <Card key={comp._id} com={comp} />)}
      </div>
    </div>
  );
};

export default Competition;

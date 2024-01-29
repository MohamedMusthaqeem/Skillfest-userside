import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";
import axios from "axios";

const Competition = () => {
  const [competitions, setCompetitions] = useState([]);
  useEffect(() => {
    const fetchCompetition = async () => {
      const res = await axios.get("http://localhost:5000/api/routes");
      const data = res.data;
      if (res.status) {
        setCompetitions(data);
        console.log(data);
      }
    };
    fetchCompetition();
  }, []);
  return (
    <div className="min-h-screen">
      <div>
        <Card compet={competitions} />
      </div>
    </div>
  );
};

export default Competition;

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {competitions &&
          competitions.map((comp) => <Card key={comp._id} com={comp} />)}
      </div>
    </div>
  );
};

export default Competition;

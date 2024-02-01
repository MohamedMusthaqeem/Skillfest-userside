import React, { useEffect, useState } from "react";
import Card_Workshop from '../Components/Card_Workshop'
import axios from "axios";
const Workshop = () => {
  const [workshop, setWorkshop] = useState([]);
  useEffect(() => {
    const getWorkshop = async () => {
      const res = await axios.get("http://localhost:5000/api/workshops");
      const data = res.data;
      if (res.status) {
        setWorkshop(data);
        console.log(data);
      }
    };
    getWorkshop();
  }, []);
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {workshop&& workshop.map((wor) => <Card_Workshop key={wor._id} com={wor} />)}
      </div>
    </div>
  );
};

export default Workshop;

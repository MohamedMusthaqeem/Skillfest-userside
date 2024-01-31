import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

const Events = () => {
  const [event, setEvent] = useState([]);
  useEffect(() => {
    const getEvents = async () => {
      const res = await axios.get("http://localhost:5000/api/events");
      const data = res.data;
      if (res.status) {
        setEvent(data);
        console.log(data);
      }
    };
    getEvents();
  }, []);
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {event && event.map((eve) => <Card key={eve._id} com={eve} />)}
      </div>
    </div>
  );
};

export default Events;

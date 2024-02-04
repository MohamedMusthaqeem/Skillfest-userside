import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import {useAuthContext} from '../hooks/useAuthContext'

const Events = () => {
  const [event, setEvent] = useState([]);
  const{user}=useAuthContext();
  useEffect(() => {
    const getEvents = async () => {
      const res = await axios.get("http://localhost:5000/api/events",{
        headers:{
          "Authorization":`Bearer ${user.token}`
        }
      });
      const data = res.data;
      if (res.status) {
        setEvent(data);
        console.log(data);
      }
    };
    if(user){
      getEvents();
    }
  }, [user]);
  return (
    <div className="min-h-screen">
      <div className="bg-Primary border-t border-b-[15px] border-b-Secondary border-t-white rounded-br-full">
        <h1 className="text-4xl px-4 py-7 text-white font-semibold">Events</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {event && event.map((eve) => <Card key={eve._id} com={eve} />)}
      </div>
    </div>
  );
};

export default Events;

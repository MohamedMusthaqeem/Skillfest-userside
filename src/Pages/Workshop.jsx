import React, { useEffect, useState } from "react";
import Card_Workshop from "../Components/Card_Workshop";
import axios from "axios";
import {useAuthContext} from '../hooks/useAuthContext';
const Workshop = () => {
  const [workshop, setWorkshop] = useState([]);
  const {user}=useAuthContext();
  useEffect(() => {
    const getWorkshop = async () => {
      const res = await axios.get("http://localhost:5000/get_all/work",{
        headers:{
          "Authorization":`Bearer ${user.token}`
        }
      });
      const data = res.data;
      if (res.status) {
        setWorkshop(data);
        console.log(data);
      }
    };
    if(user){
      getWorkshop();
    }
  }, [user]);
  return (
    <div className="min-h-screen">
      <div className="bg-Primary border-t border-b-[15px] border-b-Secondary border-t-white rounded-br-full">
        <h1 className="text-4xl px-4 py-7 text-white font-semibold">Workshop</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {workshop &&
          workshop.map((wor) => <Card_Workshop key={wor._id} com={wor} />)}
      </div>
    </div>
  );
};

export default Workshop;

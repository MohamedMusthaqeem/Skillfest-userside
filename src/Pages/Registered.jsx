import React, { useEffect, useState } from "react";
import Register_Card from "../Components/Register_Card";
import axios from "axios";

const Registered = () => {
  const [regsiter, setRegister] = useState([]);
  useEffect(() => {
    const fetchRegister = async () => {
      const res = await axios.get("http://localhost:5000/api/register");
      const data = res.data;
      if (res.status) {
        setRegister(data);
        console.log(data);
      }
    };
    fetchRegister();
  },[]);
  return (
    <div className="min-h-screen">
      {regsiter && regsiter.map((reg) => <Register_Card key={reg._id} reg={reg} />)}
    </div>
  );
};

export default Registered;

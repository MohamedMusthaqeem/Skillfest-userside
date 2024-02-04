import React from "react";
import { FaSquarePhone } from "react-icons/fa6";
import register from '../assets/Images/registered.png'
const Register_Card = ({reg}) => {
  return (
    <div>
      <div className="border border-black m-2 p-4 w-fit rounded-lg bg-blue-200">
        <div className="flex justify-between space-x-3">
          <div>
            <h1 className="font-Poppins font-semibold text-xl">
              {reg.name}
            </h1>
            <div className="flex space-x-1">
             <img src={register} alt="" className="h-7" />
            <h1 className="text-lg font-normal">{reg.event_name}</h1>
            </div>
          </div>
          <div>
            <p className="font-Poppins font-semibold text-xl">
              {reg.college}
            </p>
            <p className="text-lg font-normal">
              Rs.<span>{reg.fees}</span>
            </p>
          </div>
        </div>
        <div>
          <p className="text-wrap text-blue-950">
            If you have any doubts about the Events or Workshop .Please <br/>Feel free
            to contact the given Contact Details. Our team will guide you
            properly😊{" "}
          </p>
           <div className="space-y-1">
            <div className="flex space-x-2">
           <FaSquarePhone className="text-green-500" size={25}/>
            <p>{reg.supportnumone}</p>
            </div>
            <div className="flex space-x-2">
           <FaSquarePhone className="text-green-500" size={25}/>
            <p>{reg.supportnumtwo}</p>
            </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Register_Card;

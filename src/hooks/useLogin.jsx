import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import {useNavigate} from 'react-router-dom'

export const useLogin = () => {
  const navigate=useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  //login function
  const login = async (email, password) => {
    const res = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await res.json();

    if (!res.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (res.ok) {
      //save the user in localstorage
      localStorage.setItem("user", JSON.stringify(json));
      //update auth context
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
      navigate('/layout')
    }
  };
  return { login, error, isLoading };
};
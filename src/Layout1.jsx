import React from "react";
import Header1 from "./Components/Header1";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <Header1 />
      <Outlet />
    </>
  );
};

export default Layout;

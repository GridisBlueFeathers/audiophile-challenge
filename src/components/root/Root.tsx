import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const Root: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;

import React from "react";
import "../assets/styles/global.scss";
// import Login from "../pages/login/Login";
import AuthRoutes from "../routes/Auth.routes";
import UserProfileRoutes from "../routes/UserProfile.routes";
import { Route, Routes } from "react-router-dom";
import HomeRoutes from "../routes/Home.routes";
import OtherRoutes from "../routes/Other.routes";
const MainLayout = () => {
  const allRoutes = [
    ...AuthRoutes,
    ...UserProfileRoutes,
    ...HomeRoutes,
    ...OtherRoutes,
  ];
  console.log(allRoutes);
  return (
    <>
      <Routes>
        {allRoutes.map((item, index) => (
          <Route key={index} path={item?.path} element={item?.element} />
        ))}
        {/* <Route path="*" element={<h1>Page Not Found</h1>}/> */}
      </Routes>
    </>
  );
};

export default MainLayout;

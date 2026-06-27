import React, { useState } from "react";
import { APP_IMAGES } from "../../config/image-constants";
import Login from "./Login";
import { Typography } from "@mui/material";
import Signup from "./Signup";

const LoginSignupContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <div className="login-container">
        {/* Left Section */}
        <div className="left-section">
          <img src={APP_IMAGES.AppLogo} alt="Login Banner" />
        </div>
        <div className="right-section">
          <div className="login-signup-container">
           
            <div className="login-tab">
              <button
                className={isLoggedIn ? "active" : ""}
                onClick={() => setIsLoggedIn(true)}
              >
                Login
              </button>
              <button
                className={!isLoggedIn ? "active" : ""}
                onClick={() => setIsLoggedIn(false)}
              >
                Signup
              </button>
            </div>
            
            {isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn}  /> : <Signup  />}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignupContainer;

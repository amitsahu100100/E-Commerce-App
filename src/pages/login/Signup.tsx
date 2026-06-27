import { useState } from "react";
import { Box, Button,TextField, Typography } from "@mui/material";
// import {APP_IMAGES} from '../../config/image-constants'
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  // Validation
  if (!email || !password || !confirmPassword) {
    alert("Please fill all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Password and Confirm Password do not match.");
    return;
  }

  // Get existing users
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // Check if email already exists
  const userExists = users.find(
    (user: { email: string }) => user.email === email
  );

  if (userExists) {
    alert("Email already exists.");
    return;
  }

  // Create new user
  const newUser = {
    email,
    password,
  };

  // Save user
  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup Successful!");

  // Clear form
  setEmail("");
  setPassword("");
  setConfirmPassword("");

  // Redirect to login page
  navigate("/login2");
};

  return (
    <div>
      <div>
        <Typography variant="h5" className="title">
          Signup Form
        </Typography>
      </div>

      <Box component="form" onSubmit={handleSubmit} className="login-form">
        <TextField
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Confirm Password"
          type="password"
          fullWidth
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          className="common-button"
          onClick={() => navigate("/login2")}
        >
          Signup
        </Button>
       
      </Box>
    </div>
  );
};

export default Signup;

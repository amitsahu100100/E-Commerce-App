import { useState } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import {APP_IMAGES} from '../../config/image-constants'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  };

  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="left-section">
        <img
          src={APP_IMAGES.AppLogo}
          alt="Login Banner"
        />
      </div>

      {/* Right Section */}
      <div className="right-section">
        <Paper className="login-card" elevation={4}>
          <Typography variant="h4" className="title">
            Welcome Back
          </Typography>

          <Typography variant="body1" className="subtitle">
            Login to your account
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            className="login-form"
          >
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

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              className="common-button"
            >
              Login
            </Button>
          </Box>
        </Paper>
      </div>
    </div>
  );
};

export default Login;
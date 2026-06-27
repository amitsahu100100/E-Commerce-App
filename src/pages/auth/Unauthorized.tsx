import { Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import "./Unauthorized.scss";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box className="not-found-container">
        <Typography className="error-code">
          401
        </Typography>

        <Typography variant="h4" className="error-title">
          Unauthorized Access
        </Typography>

        <Typography variant="body1" className="error-description">
          You don't have permission to access this page. Please log in with the
          appropriate account or contact the administrator.
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/login")}
          className="common-button"
        >
          Go to Login
        </Button>
      </Box>
    </Container>
  );
};

export default Unauthorized;
import { Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import "./PageNotFound.scss";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box className="not-found-container">
        <Typography className="error-code">
          404
        </Typography>

        <Typography variant="h4" className="error-title">
          Oops! Page Not Found
        </Typography>

        <Typography variant="body1" className="error-description">
          The page you're looking for doesn't exist or may have been moved.
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/")}
          className="common-button"
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default PageNotFound;
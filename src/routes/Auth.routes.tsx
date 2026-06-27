import Login from '../pages/login/Login';
import LoginSignupContainer from '../pages/login/LoginSignupContainer';
import Signup from '../pages/login/Signup';

const AuthRoutes = [
//   { path: '/', element: <Login /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/login2', element: <LoginSignupContainer /> },
];
export default AuthRoutes

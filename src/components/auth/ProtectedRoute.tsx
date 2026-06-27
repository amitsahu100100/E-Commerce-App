import React from 'react'
import {Navigate} from 'react-router-dom';
import Unauthorized from '../../pages/auth/Unauthorized';
const ProtectedRoute = ({children, allowedRoles}:any) => {
const user = { login: true, role: 'manager' };
if(!user.login){
    return <Navigate to="/login" replace />;
}
if(user.role!=='admin'){
    return <Unauthorized />;
}
  return children
}

export default ProtectedRoute
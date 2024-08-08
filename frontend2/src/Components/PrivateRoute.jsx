import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('auth-token');
  return (
    <Route 
      {...rest} 
      render={(props) => 
        isAuthenticated ? 
          <Component {...props} /> 
          : <Navigate to="/login" />
      } 
    />
  );
};

export default PrivateRoute;

import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

// The RestrictedRoute component is responsible for a restricted route that is only available to non-logged in users
export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  // Redirecting to redirectTo if the user is already authorized, otherwise rendering the required Component
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component; 
};

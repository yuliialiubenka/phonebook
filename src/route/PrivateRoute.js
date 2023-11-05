import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

// The PrivateRoute component is responsible for a private route that is available only to authorized users
export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  const shouldRedirect = !isLoggedIn && !isRefreshing;
  // Redirecting to redirectTo if the user is not authorized, otherwise rendering the required Component
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component; 
};

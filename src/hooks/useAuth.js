import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/selectors';

// The useAuth hook provides access to the user's authorization data
export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn, // Indicates whether the user is authorized
    isRefreshing, // Indicates whether user information is being updated
    user, // An object containing the data of an authorized user
  };
};

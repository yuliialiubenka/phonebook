import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Wrapper } from './components/wrapper/wrapper';
import { PrivateRoute } from './route/PrivateRoute';
import { RestrictedRoute } from './route/RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from './hooks/useAuth';
import { useStyles } from "./AppStyles";
import data from './data/data';

const Home = lazy(() => import('pages/home'));
const Register = lazy(() => import('pages/register'));
const Login = lazy(() => import('pages/login'));
const Contacts = lazy(() => import('pages/contacts'));

export const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch(); // Getting the dispatch function for sending actions to the Redux store
  const { isRefreshing } = useAuth(); // Getting the state of user authentication

  useEffect(() => {
    dispatch(refreshUser()); // Calling the user update function when installing a component or changing dispatch
  }, [dispatch]);

  return isRefreshing ? (
    <p className={classes.info}>{data.userUpdate}</p>
  ) : (
    <div className={classes.container}>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          {/*Home page */}
          <Route index element={<Home />} />
          {/* User registration page */}
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/login" component={<Register />} />
            }
          />
          {/* User login page */}
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          {/* Contact page (available only to authorized users) */}
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
        {/* Default route (if no other route matches) */}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}
import { NavLink } from 'react-router-dom';
import { useStyles} from './notUserNavStyles';
import RegisterIcon from '../../data/registerUser.svg';
import LoginIcon from '../../data/log-in.svg';

// The authenticated component is responsible for the navigation bar for an unauthenticated user
export const NotUserNav = () => {
  const classes = useStyles();

  return (
    <>
      <NavLink to="/register" className={classes.link}>
        <img src={RegisterIcon} width={28} alt="Sign up" />
        Sign up
      </NavLink>
      <NavLink to="/login" className={classes.link}>
        <img src={LoginIcon} width={28} alt="Log in" />
        Log in
      </NavLink>
    </>
  );
};

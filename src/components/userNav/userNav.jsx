import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { NavLink } from 'react-router-dom';
import { useStyles} from './userNavStyles';
import LogoutIcon from '../../data/log-out.svg';
import ContactsIcon from '../../data/contacts.svg';

// The UserMenu component is responsible for the user menu if the user is authorized
export const UserNav = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <>
      <NavLink to="/contacts" className={classes.link}>
        <img src={ContactsIcon} width={28} alt="Log in" />
        Contacts
      </NavLink>
      <button className={classes.link} type="button" onClick={() => dispatch(logOut())}>
        <img src={LogoutIcon} width={28} alt="Log in" />
        Log out
      </button>{' '}
    </>
  );
};

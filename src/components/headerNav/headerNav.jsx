import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from "./headerNavStyles";
import { UserNav } from 'components/userNav/userNav';
import { NotUserNav } from 'components/notUserNav/notUserNav';
import { useAuth } from 'hooks/useAuth';
import MenuIcon from '../../data/menu.svg';
import CloseIcon from '../../data/close.svg';
import HomeIcon from '../../data/home.svg';
import data from "../../data/data";

// The HeaderNav component is responsible for the navigation menu
export const HeaderNav = () => {
  const { isLoggedIn } = useAuth(); 
  const [isOpen, setIsOpen] = useState(false);
  const [hideOrShow, setHideOrShow] = useState({});

  const handlerMenu = () => {
    setIsOpen((prev) => !prev);
    if (isOpen) {
      setHideOrShow(() => {
        return {};
      })
    } else {
      setHideOrShow(() => {
        return { display: "flex" };
      })
    }
  }
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <NavLink to="/" className={classes.logo}>
        {data.logo}
      </NavLink>

      { isOpen ? 
        <button className={classes.menuBtn} onClick={handlerMenu}>
          <img src={CloseIcon} width={48} alt="Close" />
        </button> :
        <button className={classes.menuBtn} onClick={handlerMenu}>
          <img src={MenuIcon} width={48} alt="Menu" />
        </button>
      }
      <div className={classes.navList} style={hideOrShow} onClick={handlerMenu}>
        <NavLink to="/" className={classes.homeLink}>
          <img src={HomeIcon} width={28} alt="Home" />
          {data.home}
        </NavLink>
        {isLoggedIn ? <UserNav /> : <NotUserNav />}{' '}
      </div>
    </nav>
  );
};

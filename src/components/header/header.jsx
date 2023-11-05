import { HeaderNav } from 'components/headerNav/headerNav';
import { useStyles } from "./headerStyles";

export const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <HeaderNav />
    </header>
  );
};

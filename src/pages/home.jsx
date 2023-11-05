import { useStyles } from './pagesStyles';
import { selectUser } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

export default function Home() {
  const classes = useStyles();
  const user = useSelector(selectUser);
  let homePageText;
  let homePageText2;

  if (user.name !== null) {
    homePageText = `Welcome to Phonebook,\n ${user.name}!`;
    homePageText2 = "View and save your contacts on the сontacts page."
  } else {
    homePageText = 'Welcome to Phonebook!';
    homePageText2 = "Please sign up or log in to see your contacts."
  }
  return (
    <div className={classes.homePageWrapper}>
      <h2 className={classes.title}>{homePageText}</h2>{' '}
      <p>{homePageText2}</p>
    </div>
  );
}

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useStyles } from './loginFormStyles';
import EmailIcon from "../../data/mail.svg";
import PasswordIcon from "../../data/password.svg";

// The LoginForm component is responsible for the user authorization form
export const LoginForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    // Calling the logIn action with the email and password parameters, which are getting from the values of the form fields
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // Clearing the values of the form fields after sending
    form.reset();
  };

  return (
    <form className={classes.loginForm} onSubmit={handleSubmit} autoComplete="off">
      <h2 className={classes.loginFormTitle}>Log in to your account</h2>
      <label className={classes.loginFormLabel}>
        <img 
          className={classes.labelImg}
          src={EmailIcon} alt="Email" 
          width={32}
        />
        <input
          className={classes.loginFormInput}
          type="email"
          name="email"
          placeholder="Email"
          title="Please enter a valid email address"
          required
        />
      </label>
      <label className={classes.loginFormLabel}>
        <img 
          className={classes.labelImg}
          src={PasswordIcon} alt="Password" 
          width={32}
        />
        <input
          className={classes.loginFormInput}
          type="password"
          name="password"
          placeholder="Password"
          minLength={8}
          title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
          required
        />
      </label>
      <button className={classes.loginButton} type="submit">Log in</button>
    </form>
  );
};

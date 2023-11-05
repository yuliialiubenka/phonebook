import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useStyles } from './registerFormStyles';
import NameIcon from "../../data/name-icon.svg";
import EmailIcon from "../../data/mail.svg";
import PasswordIcon from "../../data/password.svg";

// The RegisterForm component is responsible for the new user registration form
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    // Calling the register action with the parameters name, email and password, which are getting from the values of the form fields
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // Clearing the values of the form fields after sending
    form.reset();
  };

  return (
    <form className={classes.registerForm} onSubmit={handleSubmit} autoComplete="off">
      <h2 className={classes.registerFormTitle}>Register your account</h2>
      <label className={classes.registerFormLabel}>
        <img 
          className={classes.labelImg}
          src={NameIcon} alt="Name"
          width={32}
        />
        <input
          className={classes.registerFormInput}
          type="text"
          name="name"
          placeholder="Name"
          minLength={2}
          title="The name must contain only letters, apostrophes, hyphens and indents"
          required
        />
      </label>
      <label className={classes.registerFormLabel}>
        <img 
          className={classes.labelImg}
          src={EmailIcon} alt="Email"
          width={32}
        />
        <input
          className={classes.registerFormInput}
          type="email"
          name="email"
          placeholder="Email"
          // pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;"
          title="Please enter a valid email address"
          required
        />
      </label>
      <label className={classes.registerFormLabel}>
        <img 
          className={classes.labelImg}
          src={PasswordIcon} alt="Password"
          width={32}
        />
        <input
          className={classes.registerFormInput}
          type="password"
          name="password"
          placeholder="Password"
          minLength={8}
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
          title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
          required
        />
      </label>
      <button className={classes.registerButton} type="submit">Sign up</button>
    </form>
  );
};

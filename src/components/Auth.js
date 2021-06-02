import { useDispatch } from "react-redux";

import useInput from "../hooks/use-input";
import classes from "./Auth.module.css";
import { authActions } from "../store/index";

const Auth = () => {
  // email
  const {
    value: email,
    valueIsValid: emailIsValid,
    valueIsInvalid: emailIsInvalid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));
  // password
  const {
    value: password,
    valueIsValid: passwordIsValid,
    valueIsInvalid: passwordIsInvalid,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInput((value) => value.trim() !== "");
  const formIsValid = emailIsValid && passwordIsValid;

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    dispatch(authActions.login());
    const data = { email, password };
    console.log(data);
    emailReset();
    passwordReset();
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler} autoComplete="off">
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              autoFocus
            />
            {emailIsInvalid && (
              <p className={classes["error-text"]}>Please enter an email.</p>
            )}
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordIsInvalid && (
              <p className={classes["error-text"]}>Please enter a password.</p>
            )}
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;

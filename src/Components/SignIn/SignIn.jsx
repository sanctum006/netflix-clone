import React, { useRef } from "react";
import "./SignIn.css";
import { auth } from "./../../firebase";

function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {})
      .catch((error) => alert(error));
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => console.log(authUser))
      .catch((error) => alert(error));
  };
  return (
    <div className="signinScreen">
      <form action="">
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email address" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signinScreen__gray">New to Netflix? </span>
          <span className="signinScreen__link" onClick={register}>
            Sign up now.{" "}
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignIn;

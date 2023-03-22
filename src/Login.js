import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./Reducer";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => error.message);
  };

  return (
    <div className="login">
      <div className="login_logo">
        <a
          href="https://www.freepnglogos.com/pics/logo-facebookpng"
          title="Image from freepnglogos.com"
        >
          <img
            src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-clipart-flat-facebook-logo-png-icon-circle-22.png"
            width="200"
            alt="facebook clipart, flat, facebook icon circle, logo"
          />
        </a>
        <img
          src="https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-facebook-logo-png-transparent-svg-vector-bie-supply-13.png"
          width="200"
          alt="Facebook Icon Original Logo 2020"
        />
      </div>
      <button type="submit" onClick={signIn}>
        sign in{" "}
      </button>
    </div>
  );
}

export default Login;

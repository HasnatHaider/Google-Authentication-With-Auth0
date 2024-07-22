import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import google_icon from "../assets/google_icon.png"

const Login = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <>
      <div className="login-container">
        <div>
            {isAuthenticated && <h2>Signed as {user.name}</h2>}
        </div>
        {isAuthenticated ? (
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        ) : (
          <div className="login-container">
            <div className="login-form">
              <h2>Login</h2>
              <input type="text" placeholder="Email" className="input-field" />
              <input
                type="password"
                placeholder="Password"
                className="input-field"
              />
              <button className="login-button">Login</button>
              <div className="divider">
                <span style={{margin: 'auto'}}>or</span>
              </div>
              <button className="Google-login-button" onClick={() => loginWithRedirect()}>
              <img className="google-img" src={google_icon} /> Login with Google
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;

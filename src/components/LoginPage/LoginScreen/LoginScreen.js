import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { moveAidContext } from "../../../App";
import NavbarComponent from "../../Shared/Navbar/NavbarComponent";
import { signInWithGoogle } from "../LoginPageOtherComponents/LoginManager/LoginManager";

const LoginScreen = () => {
  const localURL = "http://localhost:5000";
  const { loggedInUser, setLoggedInUser } = useContext(moveAidContext);
  const [isAdmin, setIsAdmin] = useState(false);
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((res) => {
      setLoggedInUser(res);
    });
  };

  useEffect(() => {
    if (loggedInUser.email) {
      const newUser = {
        ...loggedInUser,
        admin: false,
      };

      fetch(`${localURL}/addNewUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
    }
  }, [loggedInUser]);

  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <div className="m-5 p-4">
        <Button variant="primary" onClick={handleGoogleSignIn}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginScreen;

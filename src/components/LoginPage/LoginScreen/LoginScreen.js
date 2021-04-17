import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { moveAidContext } from "../../../App";
import NavbarComponent from "../../Shared/Navbar/NavbarComponent";
import { signInWithGoogle } from "../LoginPageOtherComponents/LoginManager/LoginManager";

const LoginScreen = () => {
  const [loggedInUser, setLoggedInUser] = useContext(moveAidContext);
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((res) => {
      setLoggedInUser(res);
      history.replace(from);
    });
  };
  console.log(loggedInUser);

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

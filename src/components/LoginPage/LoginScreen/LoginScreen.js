import React, { useContext, useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { moveAidContext } from "../../../App";
import NavbarComponent from "../../Shared/Navbar/NavbarComponent";
import { signInWithGoogle } from "../LoginPageOtherComponents/LoginManager/LoginManager";

const LoginScreen = () => {
  const hostedURL = "https://infinite-mountain-73117.herokuapp.com";
  // const localURL = "http://localhost:5000";
  const { loggedInUser, setLoggedInUser } = useContext(moveAidContext);
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((res) => {
      setLoggedInUser(res);
      history.replace(from);
    });
  };

  useEffect(() => {
    if (loggedInUser.email) {
      const newUser = {
        ...loggedInUser,
        admin: false,
      };

      fetch(`${hostedURL}/addNewUser`, {
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
      <Container className="d-flex justify-content-center align-items-center m-5 ">
        <Card className="text-center m-3 shadow">
          <Card.Header>
            <h4>Login</h4>
          </Card.Header>
          <Card.Body>
            <Card.Title>Sign in using your google account</Card.Title>

            <Button variant="primary" onClick={handleGoogleSignIn}>
              Login
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default LoginScreen;

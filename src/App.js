import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./components/HomePage/HomePageScreen/HomeScreen";
import AboutScreen from "./components/AboutPage/AboutScreen/AboutScreen";
import AdminScreen from "./components/AdminPage/AdminScreen/AdminScreen";
import LoginScreen from "./components/LoginPage/LoginScreen/LoginScreen";
import ServiceDetailsPageScreen from "./components/ServiceDetailsPage/ServiceDetailsPageScreen/ServiceDetailsPageScreen";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFound from "./components/NotFound/NotFound";

export const moveAidContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
    email: "",
    success: "",
    error: "",
  });

  const value = {
    loggedInUser,
    setLoggedInUser,
  };

  return (
    <moveAidContext.Provider value={value}>
      <Router>
        <Switch>
          <Route path="/home">
            <HomeScreen></HomeScreen>
          </Route>
          <Route path="/about">
            <AboutScreen></AboutScreen>
          </Route>
          <PrivateRoute path="/serviceDetails">
            <ServiceDetailsPageScreen></ServiceDetailsPageScreen>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <AdminScreen></AdminScreen>
          </PrivateRoute>
          <Route path="/login">
            <LoginScreen></LoginScreen>
          </Route>
          <Route exact path="/">
            <HomeScreen></HomeScreen>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </moveAidContext.Provider>
  );
}

export default App;

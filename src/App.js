import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./components/HomePage/HomePageScreen/HomeScreen";
import AboutScreen from "./components/AboutPage/AboutScreen/AboutScreen";
import ServiceScreen from "./components/ServicesPage/ServiceScreen/ServiceScreen";
import AdminScreen from "./components/AdminPage/AdminScreen/AdminScreen";
import LoginScreen from "./components/LoginPage/LoginScreen/LoginScreen";
import ServiceDetailsPageScreen from "./components/ServiceDetailsPage/ServiceDetailsPageScreen/ServiceDetailsPageScreen";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <HomeScreen></HomeScreen>
          </Route>
          <Route path="/about">
            <AboutScreen></AboutScreen>
          </Route>
          <Route path="/services">
            <ServiceScreen></ServiceScreen>
          </Route>
          <Route path="/serviceDetails">
            <ServiceDetailsPageScreen></ServiceDetailsPageScreen>
          </Route>
          <Route path="/admin">
            <AdminScreen></AdminScreen>
          </Route>
          <Route path="/login">
            <LoginScreen></LoginScreen>
          </Route>
          <Route exact path="/">
            <HomeScreen></HomeScreen>
          </Route>

          <Route path="*"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

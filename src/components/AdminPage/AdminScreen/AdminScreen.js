import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DrawerComponent from "../../Shared/DrawerComponent/DrawerComponent";
import NavbarComponent from "../../Shared/Navbar/NavbarComponent";
import AddService from "../AdminPageOtherComponents/AddService/AddService";
import MakeAdmin from "../AdminPageOtherComponents/MakeAdmin/MakeAdmin";
import ManageServices from "../AdminPageOtherComponents/ManageServices/ManageServices";
import OrderList from "../AdminPageOtherComponents/OrderList/OrderList";

const AdminScreen = () => {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <Router>
        <DrawerComponent>
          <Switch>
            <Route exact path="/admin">
              <OrderList></OrderList>
            </Route>
            <Route exact path="/admin/addService">
              <AddService></AddService>
            </Route>
            <Route exact path="/admin/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route exact path="/admin/manageServices">
              <ManageServices></ManageServices>
            </Route>
          </Switch>
        </DrawerComponent>
      </Router>
    </div>
  );
};

export default AdminScreen;

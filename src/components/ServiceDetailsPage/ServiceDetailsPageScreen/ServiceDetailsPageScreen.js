import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DrawerComponent from "../../Shared/DrawerComponent/DrawerComponent";
import Book from "../ServiceDetailsOtherComponents/Book/Book";
import BookingList from "../ServiceDetailsOtherComponents/BookingList/BookingList";
import ReviewCard from "../ServiceDetailsOtherComponents/ReviewCard/ReviewCard";

const ServiceDetailsPageScreen = () => {
  return (
    <Router>
      <DrawerComponent>
        <Switch>
          <Route exact path="/serviceDetails">
            <Book></Book>
          </Route>
          <Route exact path="/serviceDetails/bookingList">
            <BookingList></BookingList>
          </Route>
          <Route exact path="/serviceDetails/review">
            <ReviewCard></ReviewCard>
          </Route>
        </Switch>
      </DrawerComponent>
    </Router>
  );
};

export default ServiceDetailsPageScreen;

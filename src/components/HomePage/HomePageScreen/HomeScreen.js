import React from "react";
import Header from "../HomePageOtherComponents/Header/Header";
import About from "../../Shared/About/About";
import HomeService from "../HomePageOtherComponents/HomeService/HomeService";
import Testimonial from "../../Shared/Testimonial/Testimonial";
import Footer from "../../Shared/Footer/Footer";
import HomeFAQ from "../HomePageOtherComponents/HomeFAQ/HomeFAQ";

const HomeScreen = () => {
  return (
    <div>
      <Header></Header>
      <About></About>
      <HomeService></HomeService>
      <Testimonial></Testimonial>
      <HomeFAQ></HomeFAQ>
      <Footer></Footer>
    </div>
  );
};

export default HomeScreen;

import React from "react";
import NavbarComponent from "../../Shared/Navbar/NavbarComponent";
import About from "../../Shared/About/About";
import Testimonial from "../../Shared/Testimonial/Testimonial";
import Footer from "../../Shared/Footer/Footer";

const AboutScreen = () => {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <About></About>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default AboutScreen;

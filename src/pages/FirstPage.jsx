import React from "react";
import Topbar from "../components/Topbar";
import Center from "../components/Center";
import Sidebar from "../components/Sidebar";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import PersonalProjects from '../components/PersonalProjects'

const FirstPage = () => {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <Center />
      <hr />
      <PersonalProjects />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default FirstPage;

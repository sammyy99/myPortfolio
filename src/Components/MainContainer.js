import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Services from "./Services";
import Blogs from "./Blogs";
import Footer from "./Footer";
import Contact from "./Contact";
import { useSelector } from "react-redux";

const MainContainer = () => {

  const form = useSelector((store) => {
    return store.form.status;
  });

  return (
     
      <div className="relative bg-zinc-900">
        {form?<Contact/>:""}
        <Header />
        <Home/>
        <About />
        <Projects />
        <Services />
        <Blogs />
        <Footer />
      </div>
    
  );
};

export default MainContainer;


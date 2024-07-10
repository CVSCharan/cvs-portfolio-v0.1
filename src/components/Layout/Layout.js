import React, { useContext, useEffect } from "react";
import Home from "../../pages/Home/Home";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { AppBarContext } from "../../context/AppBarContext";
import About from "../../pages/About/About";
import Projects from "../../pages/Projects/Projects";
import Contact from "../../pages/Contact/Contact";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const { headerContent } = useContext(AppBarContext);
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = () => {
      const hash = location.hash;
      if (hash) {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    scrollToSection();
  }, [location.hash]);

  const finalLayout =
    headerContent === "light" ? "layout-light" : "layout-dark";
  const finalappLayout = headerContent === "light" ? "app-light" : "app-dark";
  return (
    <div className={finalappLayout}>
      <Header />
      <div className={finalLayout}>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

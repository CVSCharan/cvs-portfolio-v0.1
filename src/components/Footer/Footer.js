import React, { useContext } from "react";
import { AppBarContext } from "../../context/AppBarContext";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const { headerContent } = useContext(AppBarContext);

  const finalFooterTxt =
    headerContent === "light" ? "light-footer-text" : "dark-footer-text";

  return (
    <div className="footer">
      <p className={finalFooterTxt}>
        &copy; Copyright {year} - Developed by CVS CHARAN. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

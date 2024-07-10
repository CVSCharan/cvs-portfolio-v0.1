import React, { useContext } from "react";
import { Col, Row } from "antd";
import { AppBarContext } from "../../context/AppBarContext";
import BrightnessLightIcon from "../../assets/Images/brightness-white-icon.png";
import BrightnessDarkIcon from "../../assets/Images/brightness-dark-icon.png";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LayersIcon from "@mui/icons-material/Layers";
import ContactPageIcon from "@mui/icons-material/ContactPage";

export default function Header() {
  const { headerContent, handleHeaderContent } = useContext(AppBarContext);
  const finalHeader =
    headerContent === "light" ? "light-header" : "dark-header";
  const finalHeaderText =
    headerContent === "light"
      ? "light-header-txt ml30"
      : "dark-header-txt ml30";
  const finalHeaderTextSpan =
    headerContent === "light"
      ? "light-header-txt-span"
      : "dark-header-txt-span";
  const finalHeaderAnchorText =
    headerContent === "light"
      ? "light-header-anchor-txt mr20 ml20"
      : "dark-header-anchor-txt mr20 ml20";
  const finalHeaderIcon =
    headerContent === "light"
      ? "light-header-icon mr10 ml10"
      : "dark-header-icon mr10 ml10";
  const finalHeaderAnchorTextDivider =
    headerContent === "light"
      ? "light-header-anchor-txt-divider mr20 ml20"
      : "dark-header-anchor-txt-divider mr20 ml20";
  const finalHeaderThemeIcon =
    headerContent === "dark" ? BrightnessLightIcon : BrightnessDarkIcon;

  const handleThemeChange = () => {
    if (headerContent === "light") {
      handleHeaderContent("dark");
    } else {
      handleHeaderContent("light");
    }
  };
  return (
    <div className={finalHeader}>
      <Row
        className="header-main-container"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="header-sub-container1" span={8}>
          <a href="#home">
            <h2 className={finalHeaderText}>
              <span className={finalHeaderTextSpan}>C</span>vs{" "}
              <span className={finalHeaderTextSpan}>C</span>haran
            </h2>
          </a>
        </Col>
        <Col className="header-sub-container2" span={16}>
          <a className={finalHeaderAnchorText} href="#home">
            Home
          </a>
          <a className={finalHeaderAnchorText} href="#about">
            About
          </a>
          <a className={finalHeaderAnchorText} href="#projects">
            Projects
          </a>
          <a className={finalHeaderAnchorText} href="#contact">
            Contact
          </a>
          <a className="header-icon" href="#home">
            <HomeIcon className={finalHeaderIcon} />
          </a>
          <a className="header-icon" href="#about">
            <PersonIcon className={finalHeaderIcon} />
          </a>
          <a className="header-icon" href="#projects">
            <LayersIcon className={finalHeaderIcon} />
          </a>
          <a className="header-icon" href="#contact">
            <ContactPageIcon className={finalHeaderIcon} />
          </a>
          <h2 className={finalHeaderAnchorTextDivider}> | </h2>
          <div className="mr50" onClick={handleThemeChange}>
            <img
              className="header-theme-icon"
              src={finalHeaderThemeIcon}
              alt="themeIcon"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

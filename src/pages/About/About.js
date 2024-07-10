import React, { useContext, useEffect, useRef, useState } from "react";
import { Col, Row } from "antd";
import { AppBarContext } from "../../context/AppBarContext";
import { certificatesData, orgData, univData } from "./AboutFun";
import LightCardImg from "../../assets/Images/card-1.svg";
import CardImg1 from "../../assets/Images/card-3.svg";
import CardImg2 from "../../assets/Images/card-4.svg";
import CircleIcon from "@mui/icons-material/Circle";
import LinkIcon from "@mui/icons-material/Link";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function About() {
  const { headerContent } = useContext(AppBarContext);
  const [subHeader, setSubHeader] = useState("exp");
  const location = useLocation();
  const Ref1 = useRef(null);
  const Ref2 = useRef(null);
  const Ref3 = useRef(null);

  useEffect(() => {
    const animateCardContentsRight = (ref) => {
      const cardContents = ref.current;
      if (cardContents) {
        cardContents.animate(
          [
            { transform: "translateX(-30px)", opacity: 0 },
            { transform: "translateX(0px)", opacity: 1 },
          ],
          {
            duration: 750,
            easing: "ease",
            fill: "forwards",
          }
        );
      }
    };

    const animateCardContentsTop = (ref) => {
      const cardContents = ref.current;
      if (cardContents) {
        cardContents.animate(
          [
            { transform: "translateY(-40px)", opacity: 0 },
            { transform: "translateY(0px)", opacity: 1 },
          ],
          {
            duration: 750,
            easing: "ease",
            fill: "forwards",
          }
        );
      }
    };

    const animateCardContentsBottom = (ref) => {
      const cardContents = ref.current;
      if (cardContents) {
        cardContents.animate(
          [
            { transform: "translateY(40px)", opacity: 0 },
            { transform: "translateY(0px)", opacity: 1 },
          ],
          {
            duration: 750,
            easing: "ease",
            fill: "forwards",
          }
        );
      }
    };

    animateCardContentsTop(Ref1);
    animateCardContentsBottom(Ref2);
    animateCardContentsRight(Ref3);
  }, [location, subHeader]);


  const finalAboutHeaderText2 =
    headerContent === "light"
      ? "light-about-header-text2"
      : "dark-about-header-text2";
  const finalAboutHeaderTextSpan =
    headerContent === "light"
      ? "light-about-header-text-span"
      : "dark-about-header-text-span";
  const finalAboutExpRole =
    headerContent === "light" ? "light-about-exp-role" : "dark-about-exp-role";
  const finalAboutEduOrg =
    headerContent === "light" ? "light-about-edu-org" : "dark-about-edu-org";
  const finalAboutCertName =
    headerContent === "light"
      ? "light-about-cert-name"
      : "dark-about-cert-name";
  const finalAboutExpOrg =
    headerContent === "light" ? "light-about-exp-org" : "dark-about-exp-org";
  const finalAboutCertInst =
    headerContent === "light"
      ? "light-about-cert-institution"
      : "dark-about-cert-institution";
  const finalAboutEduDegree =
    headerContent === "light"
      ? "light-about-edu-degree"
      : "dark-about-edu-degree";
  const finalAboutExpJoinedOn =
    headerContent === "light"
      ? "light-about-exp-joined-on"
      : "dark-about-exp-joined-on";
  const finalAboutExpDesc =
    headerContent === "light"
      ? "light-about-exp-desc ml20"
      : "dark-about-exp-desc ml20";
  const finalAboutEduDesc =
    headerContent === "light"
      ? "light-about-edu-desc ml20"
      : "dark-about-edu-desc ml20";
  const finalAboutEduDuration =
    headerContent === "light"
      ? "light-about-edu-duration"
      : "dark-about-edu-duration";
  const finalAboutCertIssued =
    headerContent === "light"
      ? "light-about-cert-issued-on"
      : "dark-about-cert-issued-on";
  const finalAboutExpLoc =
    headerContent === "light"
      ? "light-about-exp-location"
      : "dark-about-exp-location";
  const finalAboutEduGrade =
    headerContent === "light"
      ? "light-about-edu-grade"
      : "dark-about-edu-grade";
  const finalAboutCertCred =
    headerContent === "light"
      ? "light-about-cert-cred"
      : "dark-about-cert-cred";
  const finalAboutExpContainer =
    headerContent === "light"
      ? "light-about-experience-cards-sub-container"
      : "dark-about-experience-cards-sub-container";
  const finalAboutEduContainer =
    headerContent === "light"
      ? "light-about-education-cards-sub-container"
      : "dark-about-education-cards-sub-container";
  const finalAboutCertContainer =
    headerContent === "light"
      ? "light-about-certificates-cards-sub-container"
      : "dark-about-certificates-cards-sub-container";
  const finalPaginationDotsActive =
    headerContent === "light"
      ? "light-about-certificates-pagination-icon-active"
      : "dark-about-certificates-pagination-icon-active";
  const finalPaginationDots =
    headerContent === "light"
      ? "light-about-certificates-pagination-icon"
      : "dark-about-certificates-pagination-icon";
  const finalAboutCertCredContainer =
    headerContent === "light"
      ? "light-about-cert-cred-container"
      : "dark-about-cert-cred-container";
  const finalCertLink =
    headerContent === "light"
      ? "light-about-certificate-link-icon"
      : "dark-about-certificate-link-icon";
  const finalAboutSubHeader =
    headerContent === "light"
      ? "light-about-sub-header-items"
      : "dark-about-sub-header-items";
  const finalAboutSubHeaderCont =
    headerContent === "light"
      ? "light-about-sub-header"
      : "dark-about-sub-header";

  const handleSubHeader = (subHeaderVal) => {
    setSubHeader(subHeaderVal);
  };

  const AutoplayTextCards = ({ data, interval }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, interval);

      return () => clearInterval(timer);
    }, [data, interval]);

    const handlePaginationClick = (index) => {
      setCurrentIndex(index);
    };

    return (
      <div className="about-certificates-main-container">
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              display: index === currentIndex ? "block" : "none",
              width: "75%",
              height: "100%",
            }}
          >
            <div
              className={finalAboutCertContainer}
              style={{
                backgroundImage: `url(${CardImg2})`,
              }}
            >
              <div className="about-certificates-cards-sub-container-content1">
                <img
                  className="about-certificate-img mt20 ml30"
                  src={item.certificate_img}
                  alt="certificates card img"
                />
              </div>
              <div className="about-certificates-cards-sub-container-content2 ml30">
                <h2 className={finalAboutCertName}>{item.certificate_name}</h2>
                <img
                  className="about-certificate-icon mt20"
                  src={item.institution_logo}
                  alt="certificates card"
                />
                <p className={finalAboutCertInst}>{item.institution}</p>
                <p className={finalAboutCertIssued}>
                  Issued - {item.issues_on}
                </p>
                <div className="about-cert-cred-main-container">
                  <p className={finalAboutCertCred}>
                    Credential ID - {item.credential_id}
                  </p>
                  <div
                    onClick={() => handleClick(item.certificate_link)}
                    className={finalAboutCertCredContainer}
                  >
                    <p className={finalAboutCertCred}>Link</p>
                    <LinkIcon className={finalCertLink} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="pagination mt40">
          {data.map((_, index) => (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={index}
              className={`pagination-btn ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => handlePaginationClick(index)}
            >
              {index === currentIndex ? (
                <CircleIcon className={finalPaginationDotsActive} />
              ) : (
                <CircleIcon className={finalPaginationDots} />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    );
  };

  const renderExperienceComp = () => {
    return (
      <AnimatePresence mode="wait">
        {orgData.map((item, itemInd) => (
          <motion.div
            initial={{
              x: itemInd % 2 === 0 ? 15 : -15,
              opacity: 0,
            }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: itemInd * 0.5 }}
            style={{ backgroundImage: `url(${LightCardImg})` }}
            className={finalAboutExpContainer}
            key={itemInd}
          >
            <div className="about-experience-cards-sub-container pl20">
              <div className="about-experience-cards-sub-container-content1">
                <img
                  className="about-experience-icon mt20 ml20"
                  src={item.logo_src}
                  alt="org card"
                />
              </div>
              <div className="about-experience-cards-sub-container-content2 mt10 ml20">
                <h2 className={finalAboutExpRole}>{item.role}</h2>
                <p className={finalAboutExpOrg}>{item.organization}</p>
                <p className={finalAboutExpJoinedOn}>{item.role_type}</p>
                <p className={finalAboutExpJoinedOn}>{item.joined_on}</p>
                <p className={finalAboutExpLoc}>{item.location}</p>
              </div>
            </div>
            <h2 className={finalAboutExpDesc}>{item.description}</h2>
          </motion.div>
        ))}
        ;
      </AnimatePresence>
    );
  };

  const handleClick = (href) => {
    if (href) {
      window.open(href, "_blank");
    }
  };

  return (
    <div id="about" className="about">
      <Row
        className="about-main-container"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="about-sub-container1" span={24}>
          <h2 className={finalAboutHeaderText2}>
            <span className={finalAboutHeaderTextSpan}> ~ </span>who i am
            <span className={finalAboutHeaderTextSpan}> ~ </span>
          </h2>
        </Col>
        <Col className="about-sub-header-main" span={24}>
          <div ref={Ref1} className={finalAboutSubHeaderCont}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={finalAboutSubHeader}
              onClick={() => handleSubHeader("exp")}
              style={{
                borderBottom:
                  subHeader === "exp"
                    ? headerContent === "light"
                      ? "2px solid #035295"
                      : "2px solid #01d293"
                    : null,
                color:
                  subHeader === "exp"
                    ? headerContent === "light"
                      ? "#035295"
                      : "#01d293"
                    : null,
              }}
            >
              Experience
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={finalAboutSubHeader}
              onClick={() => handleSubHeader("edu")}
              style={{
                borderBottom:
                  subHeader === "edu"
                    ? headerContent === "light"
                      ? "2px solid #035295"
                      : "2px solid #01d293"
                    : null,
                color:
                  subHeader === "edu"
                    ? headerContent === "light"
                      ? "#035295"
                      : "#01d293"
                    : null,
              }}
            >
              Education
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={finalAboutSubHeader}
              onClick={() => handleSubHeader("cert")}
              style={{
                borderBottom:
                  subHeader === "cert"
                    ? headerContent === "light"
                      ? "2px solid #035295"
                      : "2px solid #01d293"
                    : null,
                color:
                  subHeader === "cert"
                    ? headerContent === "light"
                      ? "#035295"
                      : "#01d293"
                    : null,
              }}
            >
              Certificates
            </motion.button>
          </div>
        </Col>
        {subHeader === "exp" ? (
          <Col className="about-sub-container2" span={24}>
            <div className="about-experience-cards-container">
              {renderExperienceComp()}
            </div>
          </Col>
        ) : null}
        {subHeader === "edu" ? (
          <Col className="about-sub-container3" span={24}>
            <div className="about-education-cards-container">
              <AnimatePresence mode="wait">
                {univData.map((item, itemInd) => (
                  <motion.div
                    initial={{
                      x: itemInd % 2 === 0 ? 15 : -15,
                      opacity: 0,
                    }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: itemInd * 0.5 }}
                    style={{ backgroundImage: `url(${CardImg1})` }}
                    className={finalAboutEduContainer}
                    key={itemInd}
                  >
                    <div className="about-education-cards-sub-main">
                      <div className="about-education-cards-sub-container-content1">
                        <img
                          className="about-education-icon mt20 ml20"
                          src={item.institution_logo}
                          alt="org card"
                        />
                      </div>
                      <div className="about-education-cards-sub-container-content2 mt10 ml20">
                        <h2 className={finalAboutEduOrg}>{item.institute}</h2>
                        <p className={finalAboutEduDegree}>{item.degree}</p>
                        <p className={finalAboutEduDuration}>
                          {item.course_duration}
                        </p>
                        <p className={finalAboutEduGrade}>{item.grade}</p>
                      </div>
                    </div>
                    <p className={finalAboutEduDesc}>{item.description}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </Col>
        ) : null}
        {subHeader === "cert" ? (
          <Col ref={Ref3} className="about-sub-container4" span={24}>
            <AutoplayTextCards data={certificatesData} interval={4000} />
          </Col>
        ) : null}
      </Row>
    </div>
  );
}

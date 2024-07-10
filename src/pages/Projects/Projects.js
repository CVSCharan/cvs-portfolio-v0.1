import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Col, Row } from "antd";
import { Link, useLocation } from "react-router-dom";
import { AppBarContext } from "../../context/AppBarContext";
import htmlIcon from "../../assets/Images/html-5-color.png";
import cssIcon from "../../assets/Images/css-3-color.png";
import jsIcon from "../../assets/Images/js-color.png";
import tsIcon from "../../assets/Images/typeScriptIcon.png";
import bootstrapIcon from "../../assets/Images/bootstrap-color.png";
import tailwindIcon from "../../assets/Images/tailwindcss.png";
import reactIcon from "../../assets/Images/react-color.png";
import reactNativeIcon from "../../assets/Images/react-native-black.png";
import reactReduxIcon from "../../assets/Images/redux-icon.png";
import nodeJSIcon from "../../assets/Images/nodeJsIcon.png";
import expressJSIcon from "../../assets/Images/node-js-color.png";
import sqLiteIcon from "../../assets/Images/sqLite.png";
import postgresqlIcon from "../../assets/Images/postgre-color.png";
import gitIcon from "../../assets/Images/git-black.png";
import gitHubIcon from "../../assets/Images/git-hub-black.png";
import cPlusPlusIcon from "../../assets/Images/OOPS-color.png";
import pythonIcon from "../../assets/Images/python-color.png";
import netlifyIcon from "../../assets/Images/netlifyIcon.png";
import herokuIcon from "../../assets/Images/heroku-color.png";
import unityIcon from "../../assets/Images/unity-black.png";
import vsCodeIcon from "../../assets/Images/vsCodeIcon.png";
import firebaseIcon from "../../assets/Images/googlefirebase.png";
import azureIcon from "../../assets/Images/azurecloudservices.png";
import databricksIcon from "../../assets/Images/databricks.png";
import powerBiIcon from "../../assets/Images/powerBiIcon.png";
import powerAutomateIcon from "../../assets/Images/powerAutomateIcon.png";
import powerAppsIcon from "../../assets/Images/powerAppsIcon.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const { headerContent } = useContext(AppBarContext);
  const [counter, setCounter] = useState(1);
  const [selectedHeader, setSelectedHeader] = useState("skills");

  const location = useLocation();

  const Ref1 = useRef(null);
  const Ref2 = useRef(null);
  const Ref3 = useRef(null);
  const Ref4 = useRef(null);

  useEffect(() => {
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

    animateCardContentsBottom(Ref1);
    animateCardContentsTop(Ref4);
  }, [location, selectedHeader]);

  const skillsHeaderList = [
    { id: "frontend", title: "Frontend" },
    { id: "backend", title: "Backend" },
    { id: "tools", title: "Tools" },
    { id: "others", title: "Others" },
  ];

  const frontEndSkillsList = useMemo(
    () => [
      { id: "html", title: "HTML", imgSrc: htmlIcon },
      { id: "css", title: "CSS", imgSrc: cssIcon },
      { id: "js", title: "JavaScript", imgSrc: jsIcon },
      { id: "ts", title: "TypeScript", imgSrc: tsIcon },
      { id: "bootstrap", title: "Bootstrap", imgSrc: bootstrapIcon },
      { id: "tailwind", title: "Tailwind", imgSrc: tailwindIcon },
      { id: "react", title: "React JS", imgSrc: reactIcon },
      { id: "reactNative", title: "React Native", imgSrc: reactNativeIcon },
      { id: "reactRedux", title: "React Redux", imgSrc: reactReduxIcon },
    ],
    []
  );

  const backEndSkillsList = useMemo(
    () => [
      {
        id: "nodeJS",
        title: "Node JS",
        imgSrc: nodeJSIcon,
      },
      {
        id: "expressJS",
        title: "Express JS",
        imgSrc: expressJSIcon,
      },
      { id: "postgresql", title: "PostgreSQL", imgSrc: postgresqlIcon },
      {
        id: "sqlite",
        title: "SQLite",
        imgSrc: sqLiteIcon,
      },
    ],
    []
  );

  const toolsSkillsList = useMemo(
    () => [
      { id: "git", title: "Git", imgSrc: gitIcon },
      { id: "github", title: "GitHub", imgSrc: gitHubIcon },
      { id: "netlify", title: "Netlify", imgSrc: netlifyIcon },
      { id: "heroku", title: "Heroku", imgSrc: herokuIcon },
      { id: "firebase", title: "Firebase", imgSrc: firebaseIcon },
      { id: "vscode", title: "VS Code", imgSrc: vsCodeIcon },
      { id: "unity", title: "Unity", imgSrc: unityIcon },
    ],
    []
  );

  const othersSkillsList = useMemo(
    () => [
      { id: "powerBI", title: "Power BI", imgSrc: powerBiIcon },
      {
        id: "powerAutomate",
        title: "Power Automate",
        imgSrc: powerAutomateIcon,
      },
      { id: "powerApps", title: "Power Apps", imgSrc: powerAppsIcon },
      { id: "python", title: "Python", imgSrc: pythonIcon },
      { id: "c++", title: "C++", imgSrc: cPlusPlusIcon },
      { id: "azureCloud", title: "Azure Cloud", imgSrc: azureIcon },
      { id: "databricks", title: "Databricks", imgSrc: databricksIcon },
    ],
    []
  );

  const [selectedSkillsHeader, setSelectedSkillsHeader] = useState(
    skillsHeaderList[0].id
  );
  const [selectedSkillsHeaderList, setSelectedSkillsHeaderList] =
    useState(frontEndSkillsList);

  useEffect(() => {
    if (selectedSkillsHeader === "frontend") {
      setSelectedSkillsHeaderList(frontEndSkillsList);
    } else if (selectedSkillsHeader === "backend") {
      setSelectedSkillsHeaderList(backEndSkillsList);
    } else if (selectedSkillsHeader === "tools") {
      setSelectedSkillsHeaderList(toolsSkillsList);
    } else if (selectedSkillsHeader === "others") {
      setSelectedSkillsHeaderList(othersSkillsList);
    }
  }, [
    selectedSkillsHeader,
    frontEndSkillsList,
    backEndSkillsList,
    toolsSkillsList,
    othersSkillsList,
  ]);

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

    const animateCardContentsLeft = (ref) => {
      const cardContents = ref.current;
      if (cardContents) {
        cardContents.animate(
          [
            { transform: "translateX(30px)", opacity: 0 },
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

    animateCardContentsLeft(Ref3);
    animateCardContentsRight(Ref2);
  }, [location, selectedSkillsHeaderList]);

  const finalProjectsHeaderText =
    headerContent === "light"
      ? "light-projects-header-txt"
      : "dark-projects-header-txt";
  const finalProjectsHeaderTextSpan =
    headerContent === "light"
      ? "light-projects-header-txt-span"
      : "dark-projects-header-txt-span";
  const finalProjectsSubContainerContain =
    headerContent === "light"
      ? "light-projects-sub-container-sub-container1"
      : "dark-projects-sub-container-sub-container1";
  const finalSkillsHeaderList =
    headerContent === "light"
      ? "light-projects-skills-header-list-container"
      : "dark-projects-skills-header-list-container";
  const finalSkillsHeaderListItems =
    headerContent === "light"
      ? "light-projects-skills-header-list-container-items"
      : "dark-projects-skills-header-list-container-items";
  const finalSkillsSubContainerCont2 =
    headerContent === "light"
      ? "light-projects-sub-container-sub-container2"
      : "dark-projects-sub-container-sub-container2";
  const finalSkillsListContainer =
    headerContent === "light"
      ? "light-projects-skills-list-container"
      : "dark-projects-skills-list-container";
  const finalSkillsListContainerTxt =
    headerContent === "light"
      ? "light-projects-skills-list-container-txt"
      : "dark-projects-skills-list-container-txt";
  const finalSubHeaderCont =
    headerContent === "light"
      ? "light-projects-sub-header"
      : "dark-projects-sub-header";
  const finalSubHeaderItems =
    headerContent === "light"
      ? "light-projects-sub-header-items"
      : "dark-projects-sub-header-items";

  const handleSkillsActiveHeader = (val) => {
    setCounter(counter + 1);
    setSelectedSkillsHeader(val);
  };

  const handleHeaderClick = (headerVal) => {
    setSelectedHeader(headerVal);
  };

  return (
    <div id="projects" className="projects">
      <Row
        className="projects-main-container"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="projects-sub-container1" span={24}>
          <h2 className={finalProjectsHeaderText}>
            <span className={finalProjectsHeaderTextSpan}>S</span>kills &{" "}
            <span className={finalProjectsHeaderTextSpan}>P</span>
            rojects
          </h2>
        </Col>
        <Col className="projects-sub-header-main" span={24}>
          <div ref={Ref4} className={finalSubHeaderCont}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleHeaderClick("skills")}
              className={finalSubHeaderItems}
              style={{
                borderBottom:
                  selectedHeader === "skills"
                    ? headerContent === "light"
                      ? "2px solid #035295"
                      : "2px solid #01d293"
                    : null,
                color:
                  selectedHeader === "skills"
                    ? headerContent === "light"
                      ? "#035295"
                      : "#01d293"
                    : null,
              }}
            >
              Skills
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleHeaderClick("projects")}
              className={finalSubHeaderItems}
              style={{
                borderBottom:
                  selectedHeader === "projects"
                    ? headerContent === "light"
                      ? "2px solid #035295"
                      : "2px solid #01d293"
                    : null,
                color:
                  selectedHeader === "projects"
                    ? headerContent === "light"
                      ? "#035295"
                      : "#01d293"
                    : null,
              }}
            >
              Projects
            </motion.div>
          </div>
        </Col>
        {selectedHeader === "skills" ? (
          <Col className="projects-sub-container2" span={24}>
            <div className="projects-sub-container-main-container">
              <div ref={Ref1} className={finalProjectsSubContainerContain}>
                {skillsHeaderList.map((headerItem, headerItemInd) => (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleSkillsActiveHeader(headerItem.id)}
                    className={finalSkillsHeaderList}
                    key={headerItemInd}
                  >
                    <h2
                      style={{
                        fontSize:
                          headerItem.id === selectedSkillsHeader
                            ? "16px"
                            : null,
                        color:
                          headerItem.id === selectedSkillsHeader
                            ? headerContent === "light"
                              ? "#035295"
                              : "#e0e1dd"
                            : null,
                        textDecoration:
                          headerItem.id === selectedSkillsHeader
                            ? "underline"
                            : "none",
                      }}
                      className={finalSkillsHeaderListItems}
                    >
                      {headerItem.title}
                    </h2>
                  </motion.div>
                ))}
              </div>
              <div
                ref={counter % 2 === 0 ? Ref2 : Ref3}
                className={finalSkillsSubContainerCont2}
              >
                <AnimatePresence mode="wait">
                  {selectedSkillsHeaderList.map((listItem, listItemInd) => (
                    <motion.div
                      initial={{
                        x: listItemInd % 2 === 0 ? 15 : -15,
                        opacity: 0,
                      }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.7, delay: listItemInd * 0.3 }}
                      className={finalSkillsListContainer}
                      key={listItemInd}
                    >
                      <img
                        className="projects-skills-list-icon"
                        src={listItem.imgSrc}
                        alt="skills list icon"
                      />
                      <h2 className={finalSkillsListContainerTxt}>
                        {listItem.title}
                      </h2>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </Col>
        ) : null}
        {selectedHeader === "projects" ? (
          <Col className="projects-sub-container3" span={24}>
            <div>
              <Link to="/projects/snake-mania">Projects Container 1</Link>
              <div>Projects Container 2</div>
            </div>
          </Col>
        ) : null}
      </Row>
    </div>
  );
}

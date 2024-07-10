import React, { useContext, useEffect, useRef, useState } from "react";
import { Col, Row, notification } from "antd";
import SocialMediaIcon from "./SocialMediaIcon";
import { AppBarContext } from "../../context/AppBarContext";
import ProfilePic from "../../assets/Images/profile-pic.png";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import QRCode from "qrcode-generator";
import Axios from "axios";
import FileDownload from "js-file-download";
import { useLocation } from "react-router-dom";
import CardImg1 from "../../assets/Images/light-home-blob.png";
import CardImg2 from "../../assets/Images/dark-home-blob.png";
import { motion } from "framer-motion";

export default function Home() {
  const resumeURL = "https://cvs-charan-resume.tiiny.site/";
  const { headerContent } = useContext(AppBarContext);
  const [qrCodeSVG, setQrCodeSVG] = useState("");
  const [typedText, setTypedText] = useState("");
  const fullText = ["CVS CHARAN"];
  const typingSpeed = 170; // Speed of typing and deletion
  const delayBeforeDeletion = 3700; // Delay before deletion starts
  const delayBeforeRestart = 2700; // Delay before restart

  const location = useLocation();
  const Ref1 = useRef(null);
  const Ref2 = useRef(null);
  const Ref3 = useRef(null);
  const Ref4 = useRef(null);

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

    animateCardContentsRight(Ref1);
    animateCardContentsRight(Ref2);
    animateCardContentsRight(Ref4);
    animateCardContentsTop(Ref3);
  }, [location]);

  useEffect(() => {
    const qr = QRCode(0, "L");
    qr.addData(resumeURL);
    qr.make();
    const svg = qr.createSvgTag({ cellSize: 3.5 });
    const modifiedSvg =
      headerContent === "dark"
        ? svg.replace("<path", '<path fill="#01d293"')
        : svg.replace("<path", '<path fill="#74bdcb"');
    setQrCodeSVG(modifiedSvg);
  }, [headerContent]);

  useEffect(() => {
    const textLoop = async () => {
      for (const text of fullText) {
        await typeText(text);
        await deleteText(text);
      }
      textLoop();
    };

    const typeText = async (text) => {
      for (let i = 0; i <= text.length; i++) {
        await new Promise((resolve) =>
          setTimeout(() => {
            setTypedText(text.substring(0, i));
            resolve();
          }, typingSpeed)
        );
      }
    };

    const deleteText = async (text) => {
      await new Promise((resolve) => setTimeout(resolve, delayBeforeDeletion));
      for (let i = text.length; i >= 0; i--) {
        await new Promise((resolve) =>
          setTimeout(() => {
            setTypedText(text.substring(0, i));
            resolve();
          }, typingSpeed)
        );
      }
      await new Promise((resolve) => setTimeout(resolve, delayBeforeRestart));
    };

    textLoop();

    return () => clearInterval();
  }, []);

  useEffect(() => {
    console.log(location);
  }, [location]);

  const finalHomeHeaderText =
    headerContent === "light"
      ? "light-home-header-text mb30"
      : "dark-home-header-text mb30";
  const finalHomeHeaderTextSpan =
    headerContent === "light"
      ? "light-home-header-text-span"
      : "dark-home-header-text-span";
  const finalHomePara =
    headerContent === "light"
      ? "light-home-para1 mt20"
      : "dark-home-para1 mt20";
  const finalHomeParaSpan =
    headerContent === "light"
      ? "light-home-para1-span"
      : "dark-home-para1-span";
  const finalHomeSpan =
    headerContent === "light" ? "light-home-span mb30" : "dark-home-span mb30";
  const finalHomeFollowMe =
    headerContent === "light"
      ? "light-home-follow-me-on mt20 mb30"
      : "dark-home-follow-me-on mt20 mb30";
  const finalQr =
    headerContent === "light"
      ? "light-home-qr-container"
      : "dark-home-qr-container";
  const finalResumeBtn =
    headerContent === "light"
      ? "light-home-resume-btn"
      : "dark-home-resume-btn";
  const finalProfilePic =
    headerContent === "light"
      ? "light-home-profile-pic-container mb20"
      : "dark-home-profile-pic-container mb20";

  const download = (e) => {
    e.preventDefault();
    Axios({
      url: "https://my-portfolio-24-server-2cf37196a6ea.herokuapp.com/resume-service",
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      console.log(response);
      FileDownload(response.data, "Charan_Resume.pdf");
      notification.success({
        message: "Success",
        description: "Resume Downloaded",
        placement: "bottomRight",
      });
    });
  };

  return (
    <div id="home" className="home">
      <Row
        className="home-main-container"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="home-sub-container1" xs={24} md={14}>
          <div className="home-container1-sub-container1 ml50">
            <h2 ref={Ref4} className={finalHomeHeaderText}>
              <span className={finalHomeHeaderTextSpan}> - </span>Hello
            </h2>
            <span className={finalHomeSpan}>
              I'm {typedText} <span className="home-span-cursor">|</span>
            </span>
            <p className={finalHomePara}>
              Welcome to a
              <span className={finalHomeParaSpan}> Web Developer's</span>{" "}
              digital playground, where creativity meets functionality, and
              innovation is the driving force behind every pixel.
            </p>
            <p className={finalHomePara}>
              Adept at crafting immersive and dynamic web experiences that
              captivate and engage users using{" "}
              <span className={finalHomeParaSpan}>
                React JS, Express JS, Bootstrap, Tailwind CSS,{" "}
              </span>
              and more.,
            </p>
            <p className={finalHomePara}>
              Every line of code I write is committed to quality and fueled by
              continuous learning. I turn ideas into captivating realities
              infused with passion and dedication.
            </p>
          </div>
          <div className="home-download-qr-container mt10">
            <div
              ref={Ref1}
              className={finalQr}
              dangerouslySetInnerHTML={{ __html: qrCodeSVG }}
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={download}
              className={finalResumeBtn}
            >
              RESUME
              <FileDownloadOutlinedIcon className="home-resume-download-icon" />
            </motion.button>
          </div>
        </Col>
        <Col className="home-sub-container2" xs={24} md={10}>
          <div
            style={{
              backgroundImage:
                headerContent === "light"
                  ? `url(${CardImg1})`
                  : `url(${CardImg2})`,
            }}
            className={finalProfilePic}
            ref={Ref3}
          >
            <img
              className="home-profile-pic"
              src={ProfilePic}
              alt="profile pic"
            />
          </div>
          <div ref={Ref2} className="home-container1-sub-container2">
            <h2 className={finalHomeFollowMe}>Stay Connected</h2>
            <div className="home-card2">
              <SocialMediaIcon
                icon="github"
                href="https://github.com/CVSCharan"
              />
              <SocialMediaIcon
                icon="linkedin"
                href="https://www.linkedin.com/in/charan-cvs/"
              />
              <SocialMediaIcon
                icon="whatsapp"
                href="https://wa.me/7337525111?text=Hey CVS!"
              />
              <SocialMediaIcon
                icon="discord"
                href="https://discord.gg/cf7fYHa4"
              />
              {/* <SocialMediaIcon icon="youtube" href="" /> */}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

import React, { useContext, useEffect, useRef, useState } from "react";
import { Col, Row, notification } from "antd";
import { AppBarContext } from "../../context/AppBarContext";
import CardImg1 from "../../assets/Images/card-5.svg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";

export default function Contact() {
  const { headerContent } = useContext(AppBarContext);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const finalContactCardContentsRef1 = useRef(null);
  const finalContactCardContentsRef2 = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const animateCardContents = (ref) => {
      const cardContents = ref.current;
      if (cardContents) {
        cardContents.animate(
          [
            { transform: "translateY(-30px)", opacity: 0 },
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

    animateCardContents(finalContactCardContentsRef1);
    animateCardContents(finalContactCardContentsRef2);
  }, [location.hash]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any required field is empty
    if (!fullName || !email || !subject || !message) {
      setFormSubmitted(true);
    } else {
      // Submit the form
      // Example: Send form data to server
      console.log("Form submitted:", { fullName, email, subject, message });
      emailjs
        .sendForm(
          "service_n2w8a5c",
          "template_t4a4rtm",
          e.target,
          "u8bVfJlgy9QJKeMhz"
        )
        .then((result) => {
          notification.success({
            message: "Success",
            description: "E-Mail successfully sent!",
          });
          // Reset form state
          setFormSubmitted(false);
          setFullName("");
          setEmail("");
          setSubject("");
          setMessage("");
        })
        .catch((error) => {
          notification.error({
            message: "Error",
            description: "Something went wrong..!!",
          });
        });
    }
  };

  const finalContactMeHeaderText =
    headerContent === "light"
      ? "light-contact-me-header-text mb30 ml20"
      : "dark-contact-me-header-text mb30 ml20";
  const finalContactMeHeaderTextSpan =
    headerContent === "light"
      ? "light-contact-me-header-text-span mb30 ml20"
      : "dark-contact-me-header-text-span mb30 ml20";
  const finalContactMeSubHeading =
    headerContent === "light"
      ? "light-contact-me-sub-heading mb20"
      : "dark-contact-me-sub-heading mb20";
  const finalContactMeInput =
    headerContent === "light"
      ? "light-contact-me-input mb20"
      : "dark-contact-me-input mb20";
  const finalContactMeBtn =
    headerContent === "light"
      ? "light-contact-me-btn mt20"
      : "dark-contact-me-btn mt20";
  const finalContactCardContents =
    headerContent === "light"
      ? "light-contact-sub-container1-card-contents"
      : "dark-contact-sub-container1-card-contents";
  const finalContactCardContentsTxt1 =
    headerContent === "light"
      ? "light-contact-sub-container1-card-contents-txt1"
      : "dark-contact-sub-container1-card-contents-txt1";
  const finalContactCardContentsTxt2 =
    headerContent === "light"
      ? "light-contact-sub-container1-card-contents-txt2"
      : "dark-contact-sub-container1-card-contents-txt2";
  const finalContactIcons =
    headerContent === "light"
      ? "light-contact-icons mt20"
      : "dark-contact-icons mt20";

  return (
    <div id="contact" className="contact">
      <Row
        className="contact-main-container"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="contact-sub-container1" span={12}>
          <div className="contact-sub-container1-card">
            <div
              ref={finalContactCardContentsRef1}
              className={finalContactCardContents}
              style={{ backgroundImage: `url(${CardImg1})` }}
            >
              <PhoneOutlinedIcon className={finalContactIcons} />
              <h2 className={finalContactCardContentsTxt1}>Mobile</h2>
              <h2 className={finalContactCardContentsTxt2}>+91 7337525111</h2>
            </div>
            <div
              ref={finalContactCardContentsRef2}
              className={finalContactCardContents}
              style={{ backgroundImage: `url(${CardImg1})` }}
            >
              <LocationOnOutlinedIcon className={finalContactIcons} />
              <h2 className={finalContactCardContentsTxt1}>Location</h2>
              <h2 className={finalContactCardContentsTxt2}>
                HYD - 500084, IND 🇮🇳
              </h2>
              <h2 className={finalContactCardContentsTxt2}>Planet EARTH 🌍</h2>
            </div>
          </div>
        </Col>
        <Col className="contact-sub-container2" span={12}>
          <div className="contact-me-container">
            <div className="contact-me-header-container">
              <h2 className={finalContactMeHeaderText}>
                <span className={finalContactMeHeaderTextSpan}> - </span>
                Contact Me
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="contact-me-container1">
              <div className="contact-me-container1-contents">
                <h2 className={finalContactMeSubHeading}>Full Name</h2>
                <input
                  id="full_name"
                  name="full_name"
                  className={finalContactMeInput}
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                {formSubmitted && !fullName && (
                  <span className="tooltip">Full Name is required</span>
                )}
              </div>
              <div className="contact-me-container1-contents">
                <h2 className={finalContactMeSubHeading}>Email</h2>
                <input
                  id="email_id"
                  name="email_id"
                  className={finalContactMeInput}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {formSubmitted && !email && (
                  <span className="tooltip">Email is required</span>
                )}
              </div>
              <div className="contact-me-container1-contents">
                <h2 className={finalContactMeSubHeading}>Subject</h2>
                <input
                  id="subject"
                  name="subject"
                  className={finalContactMeInput}
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
                {formSubmitted && !subject && (
                  <span className="tooltip">Subject is required</span>
                )}
              </div>
              <div className="contact-me-container1-textarea-contents">
                <h2 className={finalContactMeSubHeading}>Message</h2>
                <textarea
                  id="message"
                  name="message"
                  className={finalContactMeInput}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  cols={50}
                  required
                />
              </div>
              {formSubmitted && !message && (
                <span className="tooltip">Message is required</span>
              )}
              <div className="contact-me-container1-btn-contents">
                <button className={finalContactMeBtn}>Send Message</button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

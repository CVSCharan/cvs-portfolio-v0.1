import React, { useContext } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { DiscordOutlined } from "@ant-design/icons";
import { AppBarContext } from "../../context/AppBarContext";

const SocialMediaIcon = ({ icon, href }) => {
  const { headerContent } = useContext(AppBarContext);
  const finalHomeIcon =
    headerContent === "light"
      ? "light-home-socialmedia-icon"
      : "dark-home-socialmedia-icon";
  const renderIcon = () => {
    switch (icon) {
      case "github":
        return <GitHubIcon className={finalHomeIcon} />;
      case "linkedin":
        return <LinkedInIcon className={finalHomeIcon} />;
      case "youtube":
        return <YouTubeIcon className={finalHomeIcon} />;
      case "whatsapp":
        return <WhatsAppIcon className={finalHomeIcon} />;
      case "discord":
        return <DiscordOutlined className={finalHomeIcon} />;
      default:
        return null;
    }
  };

  const handleClick = () => {
    if (href) {
      window.open(href, "_blank");
    }
  };

  return (
    <div
      className="home-follow-me"
      style={{
        pointerEvents: href ? "auto" : "none",
        cursor: href ? "pointer" : "default",
      }}
      onClick={handleClick}
    >
      {renderIcon()}
    </div>
  );
};

export default SocialMediaIcon;

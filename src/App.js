import { useContext, useEffect, useRef, useState } from "react";
import Layout from "./components/Layout/Layout";

import SnakeGame from "./pages/Projects/SnakeGame/SnakeGame";
import "./styles.scss";
import { Route, Routes } from "react-router-dom";
import { AppBarContext } from "./context/AppBarContext";
import LightCvsLogo from "./assets/Images/light-cvs-logo.png";
import DarkCvsLogo from "./assets/Images/dark-cvs-logo.png";
import { ReactComponent as Logo } from "./assets/Svgs/main-logo.svg";

function App() {
  const [showLogo, setShowLogo] = useState(true);

  const { headerContent } = useContext(AppBarContext);
  const Ref1 = useRef(null);
  const Ref2 = useRef(null);

  useEffect(() => {
    const animateCardContents = (ref) => {
      const cardContents = ref.current;
      if (cardContents) {
        cardContents.animate(
          [
            { transform: "translateY(-60px)", opacity: 0 },
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

    animateCardContents(Ref1);
    animateCardContents(Ref2);
  }, []);

  const finalMainContainer =
    headerContent === "light" ? "light-logo-container" : "dark-logo-container";
  const finalMainLogo =
    headerContent === "light" ? "light-main-logo" : "dark-main-logo";

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowLogo(false);
    }, 5400);

    return () => clearTimeout(delay);
  }, []);
  return (
    <>
      <div>
        {showLogo ? (
          <div className={finalMainContainer}>
            <img
              ref={Ref1}
              src={headerContent === "light" ? LightCvsLogo : DarkCvsLogo}
              alt="cvsLogo"
              className="cvs-logo"
            />
            <Logo className={finalMainLogo} />
          </div>
        ) : (
          <Routes>
            <Route exact path="/" element={<Layout />} />
            <Route exact path="/projects/snake-mania" element={<SnakeGame />} />
          </Routes>
        )}
      </div>
    </>
  );
}

export default App;

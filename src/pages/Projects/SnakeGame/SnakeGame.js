import React, { useState, useRef, useEffect, useContext } from "react";
import { useInterval } from "./useInterval";
import { useNavigate } from "react-router-dom";
import NorthIcon from "@mui/icons-material/North";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SouthIcon from "@mui/icons-material/South";
import EastIcon from "@mui/icons-material/East";
import "./SnakeGame.css";
import { AppBarContext } from "../../../context/AppBarContext";
import BrightnessLightIcon from "../../../assets/Images/brightness-white-icon.png";
import BrightnessDarkIcon from "../../../assets/Images/brightness-dark-icon.png";
import useDynamicConstants from "./constants";
import { motion } from "framer-motion";

const SnakeGame = () => {
  const { CANVAS_SIZE, SNAKE_START, APPLE_START, SCALE, SPEED, DIRECTIONS } =
    useDynamicConstants();
  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const { headerContent, handleHeaderContent } = useContext(AppBarContext);
  const navigate = useNavigate();

  const finalSnakeGameCanvas =
    headerContent === "light"
      ? "light-snake-game-canvas-container"
      : "dark-snake-game-canvas-container";
  const finalSnakeGameMainContainer =
    headerContent === "light"
      ? "light-snake-game-main-container"
      : "dark-snake-game-main-container";
  const finalSnakeGameMainContainerTxt =
    headerContent === "light"
      ? "light-snake-game-main-container-txt"
      : "dark-snake-game-main-container-txt";
  const finalSnakeGameMainContainerBtn =
    headerContent === "light"
      ? "light-snake-game-main-container-btn"
      : "dark-snake-game-main-container-btn";
  const finalSnakeGameContainer2 =
    headerContent === "light"
      ? "light-snake-game-sub-container2"
      : "dark-snake-game-sub-container2";
  const finalSnakeGameHeaderContainer =
    headerContent === "light"
      ? "light-snake-game-header-container"
      : "dark-snake-game-header-container";
  const finalSnakeGameScore =
    headerContent === "light"
      ? "light-snake-game-score"
      : "dark-snake-game-score";
  const finalSnakeGameHighScore =
    headerContent === "light"
      ? "light-snake-game-high-score"
      : "dark-snake-game-high-score";
  const finalSnakeGameBtn =
    headerContent === "light" ? "light-snake-game-btn" : "dark-snake-game-btn";
  const finalSnameGameConatiner2Main =
    headerContent === "light"
      ? "light-snake-game-sub-container2-main"
      : "dark-snake-game-sub-container2-main";
  const finalSnakeGameArrows =
    headerContent === "light"
      ? "light-snake-game-arrows"
      : "dark-snake-game-arrows";

  useInterval(() => gameLoop(), speed);

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
    updateHighScore();
  };

  const moveSnake = ({ keyCode }) =>
    keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);

  const createApple = () =>
    apple.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));

  const checkCollision = (piece, snk = snake) => {
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
      piece[1] < 0
    )
      return true;

    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
    }
    return false;
  };

  const checkAppleCollision = (newSnake) => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = createApple();
      while (checkCollision(newApple, newSnake)) {
        newApple = createApple();
      }
      setApple(newApple);
      setScore(score + 1);
      return true;
    }
    return false;
  };

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) endGame();
    if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
    setSnake(snakeCopy);
  };

  const startGame = () => {
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(SPEED);
    setGameOver(false);
    setScore(0);
    canvasRef.current.tabIndex = 1;
    canvasRef.current.focus();
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = "pink";
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
    context.fillStyle = "lightblue";
    context.fillRect(apple[0], apple[1], 1, 1);
  }, [snake, apple, gameOver, SCALE]);

  const updateHighScore = () => {
    if (score > highScore) {
      setHighScore(score);
    }
  };

  const finalHeaderThemeIcon =
    headerContent === "dark" ? BrightnessLightIcon : BrightnessDarkIcon;

  const handleThemeChange = () => {
    if (headerContent === "light") {
      handleHeaderContent("dark");
    } else {
      handleHeaderContent("light");
    }
  };

  const handleLinkClick = () => {
    navigate("/#projects");
  };

  return (
    <div className={finalSnakeGameMainContainer}>
      <div className={finalSnakeGameHeaderContainer}>
        <div
          onClick={handleLinkClick}
          className={finalSnakeGameMainContainerBtn}
        >
          Back
        </div>
        <h2 className={finalSnakeGameMainContainerTxt}>Snake Mania</h2>
        <div onClick={handleThemeChange}>
          <img
            className="header-theme-icon"
            src={finalHeaderThemeIcon}
            alt="themeIcon"
          />
        </div>
      </div>
      <div className="snake-game-sub-container1">
        <div role="button" tabIndex="0" onKeyDown={(e) => moveSnake(e)}>
          <canvas
            className={finalSnakeGameCanvas}
            ref={canvasRef}
            width={`${CANVAS_SIZE[0]}px`}
            height={`${CANVAS_SIZE[1]}px`}
          />
        </div>
        <div className={finalSnameGameConatiner2Main}>
          <div className={finalSnakeGameContainer2}>
            <h2 className={finalSnakeGameHighScore}>Controls</h2>
            <NorthIcon className={finalSnakeGameArrows} />
            <div className="snake-game-arrows-container1">
              <KeyboardBackspaceIcon className={finalSnakeGameArrows} />
              <EastIcon className={finalSnakeGameArrows} />
            </div>
            <SouthIcon className={finalSnakeGameArrows} />
          </div>
          <div className={finalSnakeGameContainer2}>
            <h2 className={finalSnakeGameHighScore}>
              High Score - {highScore}
            </h2>
            <h2 className={finalSnakeGameScore}>Score - {score}</h2>
            {gameOver && <h2 className="snake-game-over">GAME OVER !!</h2>}
            {!speed && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={finalSnakeGameBtn}
                onClick={startGame}
              >
                Start
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;

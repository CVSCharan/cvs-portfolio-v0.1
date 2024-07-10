import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

let randomNumber1;
do {
  randomNumber1 = Math.floor(Math.random() * 10);
} while (randomNumber1 === 8);

let randomNumber2;
do {
  randomNumber2 = Math.floor(Math.random() * 10);
} while (randomNumber2 === 7);

const useDynamicConstants = () => {
  const { height, width } = useWindowSize();
  let heightValue;
  let widthValue;

  heightValue = Math.round(height * 0.75);
  widthValue = Math.round(width * 0.65);

  const SNAKE_START = [
    [8, 7],
    [8, 8],
  ];
  const APPLE_START = [randomNumber1, randomNumber2];
  const SCALE = 30;
  const SPEED = 100;
  const DIRECTIONS = {
    38: [0, -1], // up
    40: [0, 1], // down
    37: [-1, 0], // left
    39: [1, 0], // right
  };

  const CANVAS_SIZE = [widthValue, heightValue];

  return {
    CANVAS_SIZE,
    SNAKE_START,
    APPLE_START,
    SCALE,
    SPEED,
    DIRECTIONS,
  };
};

export default useDynamicConstants;

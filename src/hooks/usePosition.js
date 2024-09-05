import React, {useState} from 'react'
import { generateRandomNumber } from '../lib/util';

const useSideImage = () => {
  const [randomSide, setRandomSide] = useState();

  const getImagePositions = () => {
    if (randomSide === 1) {
      return "frame pos-top-left";
    } else if (randomSide === 2) {
      return "frame pos-top-right";
    } else if (randomSide === 3) {
      return "frame pos-bottom-left";
    } else if (randomSide === 4) {
      return "frame pos-bottom-right";
    } else if (randomSide === 5) {
      return "frame pos-deffault"; 
    } else {
      return "frame-init pos-init";
    }
  }

  const questionPosition = () => {
    setRandomSide(generateRandomNumber(1, 4));
  }
  const deffaultPosition = () => {
    setRandomSide(5);
  }
  const resultPosition = () => {
    setRandomSide();
  }

  return {
    randomSide,
    deffaultPosition,
    getImagePositions,
    questionPosition,
    resultPosition,
  }
}

export default useSideImage
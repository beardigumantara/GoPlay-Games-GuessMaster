import { useState, useEffect } from "react";
import { shuffleArray } from "../lib/util";
import dataImages from "../lib/imageTheme";
import { DEFAULT_QUESTION_COUNT_PER_MATCH } from "../lib/config";

let currentIndex = {
  actress: -1,
  actor: -1,
  pokemon: -1,
  waifu: -1,
  city: -1,
  flag: -1,
};
let questions = [];
let theme;

const shuffledDataImages = {
  actress: shuffleArray(dataImages.actress),
  actor: shuffleArray(dataImages.actor),
  pokemon: shuffleArray(dataImages.pokemon),
  waifu: shuffleArray(dataImages.waifu),
  city: shuffleArray(dataImages.city),
  flag: shuffleArray(dataImages.flag),
};

const useQuestion1 = () => {
  const [currentQuestion, setCurrentQuestion] = useState();
  const [questionLeft, setQuestionLeft] = useState(
    DEFAULT_QUESTION_COUNT_PER_MATCH
  );

  const hasQuestion = questionLeft > 0;
  const hasTheme = theme !== undefined;


  const providedThemes = Object.keys(shuffledDataImages); // ['aktris', 'aktor', 'pokemon', 'waifu']

  const getTheme = () => {
    const pickOneRandomly = (array) =>
      array[Math.floor(Math.random() * array.length)];
    // SET THEME VARIABLE
    theme = pickOneRandomly(providedThemes); // 'aktris'
  };

  let res;
  const chooseTheme = (input) => {
    if (hasTheme) {
      return ;
    }
   res = providedThemes.find((theme) => theme == input)
    if (input === res) {
      theme = input;
      console.log('set theme', theme);
    }
  };

  const resetTheme = () => {
    theme = undefined;
    console.log('reset theme', theme);
  }

  console.log("current theme", theme);
  console.log("currentIndex", currentIndex);
  console.log("CurrenQuestion", currentQuestion);

  const questionNext = () => {
    currentIndex[theme] = currentIndex[theme] + 1;
    setCurrentQuestion(questions[currentIndex[theme]]);
    setQuestionLeft(questionLeft - 1);
  };

  const getQuestions = () => {
    // getTheme();
    questions = shuffledDataImages[theme];
    console.log("Getting questions and shuffled it:", questions);
  };

  const questionsIsEmpty = currentIndex[theme] === questions.length - 1;
  useEffect(() => {
    if (questionsIsEmpty) {
      // reset index for current theme
      currentIndex[theme] = -1;
      // reshuffle questions for current theme
      shuffledDataImages[theme] = shuffleArray(dataImages[theme]);
    }
  }, [questionsIsEmpty]);

  return {
    currentQuestion,
    questionNext,
    getTheme,
    getQuestions,
    currentIndex,
    questionLeft,
    setQuestionLeft,
    theme,
    hasQuestion,
    providedThemes,
    chooseTheme,
    res,
    resetTheme,
    // setThemeQuestion,
    // themeQuestion,
  };
};

export default useQuestion1;

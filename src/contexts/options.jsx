import { createContext, useState } from "react";
import {
  DEFAULT_AUTO_START_PER_MATCH,
  DEFAULT_COOLDOWN_PER_MATCH,
  DEFAULT_COUNTDOWM_PER_MATCH,
  DEFAULT_GAME_REGISTRATION_VIP_STICKER_ID,
  DEFAULT_LEADERBOARD_TIMER_PER_MATCH,
  DEFAULT_QUESTION_COUNT_PER_MATCH,
  DEFAULT_RESULT_TIME_PER_MATCH,
  DEFAULT_START_GAME_MESSAGE,
  ENV,
  INITIAL_PRIZE,
  SESSION_DURATION,
  STICKER_IMAGE,
  STICKER_NAME,
  STICKER_PRICE,
  THEME_LISTS,
} from "../lib/config";
import {
  DEFAULT_AUTO_START_PER_MATCH_NAME,
  DEFAULT_COOLDOWN_PER_MATCH_NAME,
  DEFAULT_COUNTDOWM_PER_MATCH_NAME,
  DEFAULT_GAME_REGISTRATION_VIP_STICKER_ID_NAME,
  DEFAULT_LEADERBOARD_TIMER_PER_MATCH_NAME,
  DEFAULT_QUESTION_COUNT_PER_MATCH_NAME,
  DEFAULT_RESULT_TIME_PER_MATCH_NAME,
  DEFAULT_START_GAME_MESSAGE_NAME,
  ENV_NAME,
  INITIAL_PRIZE_NAME,
  SESSION_DURATION_NAME,
  STICKER_IMAGE_NAME,
  STICKER_NAME_NAME,
  STICKER_PRICE_NAME,
  THEME_LISTS_NAME,
} from "../lib/staticName";
import useSticker from "../hooks/useSticker";

export const OptionsContext = createContext({});

export const OptionsProvider = ({ children }) => {
  const [themeLists, setThemeLists] = useState(THEME_LISTS);
  const [autostart, setAutostart] = useState(DEFAULT_AUTO_START_PER_MATCH);
  const [cooldown, setCooldown] = useState(DEFAULT_COOLDOWN_PER_MATCH);
  const [countdown, setCountdown] = useState(DEFAULT_COUNTDOWM_PER_MATCH);
  const [resultTimer, setResultTimer] = useState(DEFAULT_RESULT_TIME_PER_MATCH);
  const [leaderboardTimer, setLeaderboardTimer] = useState(
    DEFAULT_LEADERBOARD_TIMER_PER_MATCH
  );
  const [sessionDuration, setSessionDuration] = useState(SESSION_DURATION);
  const [registerVipStickerId, setRegisterVipStickerId] = useState(
    DEFAULT_GAME_REGISTRATION_VIP_STICKER_ID
  );
  const [messageStart, setMessageStart] = useState(DEFAULT_START_GAME_MESSAGE);
  const [env, setEnv] = useState(ENV);
  const [stickerName, setStickerName] = useState(STICKER_NAME);
  const [stickerImage, setStickerImage] = useState(STICKER_IMAGE);
  const [stickerPrice, setStickerPrice] = useState(STICKER_PRICE);
  const [initialPrize, setInitialPrize] = useState(INITIAL_PRIZE);
  const [questionSet, setQuestionSet] = useState(
    DEFAULT_QUESTION_COUNT_PER_MATCH
  );
  const sticker = useSticker();

  const handleChangeEnv = (e) => {
    setEnv(e.currentTarget.value);
  };

  const handleChangeThemeLists = (e) => {
    setThemeLists(e.currentTarget.value);
  };
  const handleChangeMessageStart = (e) => {
    setMessageStart(e.target.value);
  };

  const handleChangeSessionDuration = (e) => {
    setSessionDuration(parseInt(e.currentTarget.value));
  };

  const handleChangeSticker = (e) => {
    setRegisterVipStickerId(e.value.id);
    setStickerName(e.value.title);
    setStickerImage(e.value.image);
    console.log("testsss.", e);
  };

  const handleChangeInitialPrize = (e) => {
    setInitialPrize(parseInt(e.currentTarget.value));
  };

  const handleChangeStickerPrice = (e) => {
    setStickerPrice(parseInt(e.currentTarget.value));
  };
  const handleChangeQuestionSet = (e) => {
    setQuestionSet(parseInt(e.currentTarget.value));
  };
  const handleChangeResultTimer = (e) => {
    setResultTimer(parseInt(e.currentTarget.value));
  };
  const handleChangeAutostart = (e) => {
    setAutostart(parseInt(e.currentTarget.value));
  };
  const handleLeaderboardTimer = (e) => {
    setLeaderboardTimer(parseInt(e.currentTarget.value));
  };
  const handleChangeCooldown = (e) => {
    setCooldown(parseInt(e.currentTarget.value));
  };
  const handleChangeCountdown = (e) => {
    setCountdown(parseInt(e.currentTarget.value));
  };

  const handleOnlySave = () => {
    localStorage.setItem(ENV_NAME, env);
    localStorage.setItem(THEME_LISTS_NAME, themeLists);
    localStorage.setItem(DEFAULT_START_GAME_MESSAGE_NAME, messageStart);
    localStorage.setItem(DEFAULT_QUESTION_COUNT_PER_MATCH_NAME, questionSet);
    localStorage.setItem(DEFAULT_AUTO_START_PER_MATCH_NAME, autostart);
    localStorage.setItem(DEFAULT_RESULT_TIME_PER_MATCH_NAME, resultTimer);
    localStorage.setItem(DEFAULT_COOLDOWN_PER_MATCH_NAME, cooldown);
    localStorage.setItem(DEFAULT_COUNTDOWM_PER_MATCH_NAME, countdown);
    localStorage.setItem(
      DEFAULT_GAME_REGISTRATION_VIP_STICKER_ID_NAME,
      registerVipStickerId
    );
    localStorage.setItem(STICKER_NAME_NAME, stickerName);
    localStorage.setItem(STICKER_IMAGE_NAME, stickerImage);
    localStorage.setItem(STICKER_PRICE_NAME, stickerPrice);
    localStorage.setItem(SESSION_DURATION_NAME, sessionDuration);
    localStorage.setItem(INITIAL_PRIZE_NAME, initialPrize);
    localStorage.setItem(
      DEFAULT_LEADERBOARD_TIMER_PER_MATCH_NAME,
      leaderboardTimer
    );
  };

  const handleSubmit = () => {
    localStorage.setItem(ENV_NAME, env);
    localStorage.setItem(THEME_LISTS_NAME, themeLists);
    localStorage.setItem(DEFAULT_START_GAME_MESSAGE_NAME, messageStart);
    localStorage.setItem(DEFAULT_QUESTION_COUNT_PER_MATCH_NAME, questionSet);
    localStorage.setItem(DEFAULT_AUTO_START_PER_MATCH_NAME, autostart);
    localStorage.setItem(DEFAULT_RESULT_TIME_PER_MATCH_NAME, resultTimer);
    localStorage.setItem(DEFAULT_COOLDOWN_PER_MATCH_NAME, cooldown);
    localStorage.setItem(DEFAULT_COUNTDOWM_PER_MATCH_NAME, countdown);
    localStorage.setItem(
      DEFAULT_GAME_REGISTRATION_VIP_STICKER_ID_NAME,
      registerVipStickerId
    );
    localStorage.setItem(STICKER_NAME_NAME, stickerName);
    localStorage.setItem(STICKER_IMAGE_NAME, stickerImage);
    localStorage.setItem(STICKER_PRICE_NAME, stickerPrice);
    localStorage.setItem(SESSION_DURATION_NAME, sessionDuration);
    localStorage.setItem(INITIAL_PRIZE_NAME, initialPrize);
    localStorage.setItem(
      DEFAULT_LEADERBOARD_TIMER_PER_MATCH_NAME,
      leaderboardTimer
    );
    window.location.reload();
  };

  return (
    <OptionsContext.Provider
      value={{
        env,
        messageStart,
        registerVipStickerId,
        autostart,
        cooldown,
        countdown,
        questionSet,
        stickerImage,
        stickerName,
        stickerPrice,
        resultTimer,
        themeLists,
        sessionDuration,
        initialPrize,
        leaderboardTimer,
        handleLeaderboardTimer,
        handleChangeSessionDuration,
        handleChangeThemeLists,
        handleChangeAutostart,
        handleChangeResultTimer,
        handleChangeCooldown,
        handleChangeCountdown,
        handleChangeQuestionSet,
        handleChangeSticker,
        handleChangeStickerPrice,
        handleChangeInitialPrize,
        handleOnlySave,
        handleSubmit,
        handleChangeEnv,
        handleChangeMessageStart,
        ...sticker,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
};

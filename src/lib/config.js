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
  NOTIFICATION_TIMER_NAME,
  SESSION_DURATION_NAME,
  STICKER_IMAGE_NAME,
  STICKER_NAME_NAME,
  STICKER_PRICE_NAME,
  THEME_LISTS_NAME,
} from "./staticName";

// debug game config
export const DEFAULT_DEBUG_GAME = true;

// set questions  config
export const THEME_LISTS=  localStorage.getItem(THEME_LISTS_NAME) || 'Actress, Actor, Waifu, Pokemon, City, Flag.';
export const DEFAULT_QUESTION_COUNT_PER_MATCH =
  parseInt(localStorage.getItem(DEFAULT_QUESTION_COUNT_PER_MATCH_NAME)) || 10;

// timer config
export const DEFAULT_COUNTDOWM_PER_MATCH =
  parseInt(localStorage.getItem(DEFAULT_COUNTDOWM_PER_MATCH_NAME)) || 10;
export const DEFAULT_COOLDOWN_PER_MATCH =
  parseInt(localStorage.getItem(DEFAULT_COOLDOWN_PER_MATCH_NAME)) || 3;
export const DEFAULT_AUTO_START_PER_MATCH =
  parseInt(localStorage.getItem(DEFAULT_AUTO_START_PER_MATCH_NAME)) || 30;
export const DEFAULT_RESULT_TIME_PER_MATCH =
  parseInt(localStorage.getItem(DEFAULT_RESULT_TIME_PER_MATCH_NAME)) || 2;
export const DEFAULT_LEADERBOARD_TIMER_PER_MATCH =
  parseInt(localStorage.getItem(DEFAULT_LEADERBOARD_TIMER_PER_MATCH_NAME)) || 8;
export const NOTIFICATION_TIMER =
  parseInt(localStorage.getItem(NOTIFICATION_TIMER_NAME)) || 2000;
export const SESSION_DURATION = parseInt(localStorage.getItem(SESSION_DURATION_NAME)) || 24;

// registration player
export const NON_VIP_REGISTRATION = "play";
export const DEFAULT_GAME_REGISTRATION_VIP_STICKER_ID =
  parseInt(
    localStorage.getItem(DEFAULT_GAME_REGISTRATION_VIP_STICKER_ID_NAME)
  ) || 40;
export const ENV = localStorage.getItem(ENV_NAME) || "integration";

//START GAME
export const DEFAULT_START_GAME_MESSAGE = localStorage.getItem(DEFAULT_START_GAME_MESSAGE_NAME) || "start";

export const LOCALHOST_PORT = "/guessmaster";
export const INITIAL_PRIZE =  parseInt(localStorage.getItem(INITIAL_PRIZE_NAME)) || 0 ;

//sticker config
export const STICKER_NAME = localStorage.getItem(STICKER_NAME_NAME) || "Test-1";
export const STICKER_PRICE =
  parseInt(localStorage.getItem(STICKER_PRICE_NAME)) || 500;
export const STICKER_IMAGE =
  localStorage.getItem(STICKER_IMAGE_NAME) ||
  "https://storage.googleapis.com/goplay-cms/integration/1639460232-goplay-icon-500x500-(1).png";

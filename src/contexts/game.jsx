import { useState, createContext } from "react";
import usePlayer from "../hooks/usePlayer";
import useTimer1 from "../hooks/useTimer1";
import useSideImage from "../hooks/usePosition";
import useSession from "../hooks/useSession";
import usePrize from "../hooks/usePrize";
import useScore from "../hooks/useScore";
import useWinner from "../hooks/useWinner";
import useQuestion1 from "../hooks/useQuestionscopy";
import useAudio from "../hooks/useSound";
import { DEFAULT_DEBUG_GAME, INITIAL_PRIZE, SESSION_DURATION } from "../lib/config";
import { toast } from "react-toastify";

// Game State Constants
export const GAME_STATES = {
  EMPTY: "empty",
  REGISTER: "register",
  READY: "ready",
  MATCH: "match",
  RESULT: "result",
  ENDING: "ending",
};

export const GameContext = createContext();

let isInitiated = false;

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState(GAME_STATES.REGISTER);
  const question = useQuestion1();
  const players = usePlayer();
  const timer = useTimer1();
  const positionImage = useSideImage();
  const session = useSession();
  const prize = usePrize();
  const score = useScore();
  const winner = useWinner();
  const audio = useAudio();
  const slug = "guessmaster";
  const [votingTheme, setVotingTheme] = useState([]);
  // const [votingresult, setVotingresult] = useState();

  const isGameDebug = DEFAULT_DEBUG_GAME;

  const appInit = async () => {
    console.log("Initialize app");
    // Get current session data by slug
    session.getSession(slug);
    const sessionData = session.getSession(slug);

    await session.getSession(slug).then((sessions) => {
      session.initCountdown(sessions.sessionEnd, () => {
        // session.createSession(slug, 24);
        winner.postWinner(sessions.sessionId, INITIAL_PRIZE).then(() => {
          // And create a new session
          session.createSession(slug, SESSION_DURATION);
        });
      });
    });
    // Marked as initiated
    isInitiated = true;
    console.log("sessionData", sessionData);
  };

  //functiom  for nextGamestate and change screen
  const nextGameState = () => {
    setGameState(() => {
      const { REGISTER, READY, MATCH, RESULT, EMPTY, ENDING } = GAME_STATES;
      switch (gameState) {
        case REGISTER:
          return READY;
        case READY:
          return MATCH;
        case MATCH:
          return RESULT;
        case RESULT:
          return question.hasQuestion ? READY : ENDING;
        case ENDING:
          return REGISTER;

        default:
          return REGISTER;
      }
    });
  };

  //Function for players to answer question
  const handleAnswer = (name, answer) => {
    const _answer = answer.toLowerCase();
    if (_answer === question.currentQuestion.name) {
      players.addScorePlayer(name);
      audio.correctAnswer();
      toast.success(`${name} menjawab dengan benar`);
      positionImage.resultPosition();
      nextGameState();
    }
  };

  // catch voting theme
  const votingPlayers = (voting, playerName) => {
    question.res = question.providedThemes.find((theme) => theme === voting);
    if (players.vipPlayers.find((vipPlayer) => vipPlayer.name === playerName)) {
      if (voting === question.res) {
        setVotingTheme({ ...votingTheme, [playerName]: voting });
      }
    }
  };

// theme voting storage
  const votingresult = {};
  Object.keys(votingTheme).forEach((key) => {
    const value = votingTheme[key];
    votingresult[value] = votingresult[value] ? votingresult[value] + 1 : 1;
  });
  console.log("hasil voting result", votingresult);

  console.log("check voting array", votingTheme);


  return (
    <GameContext.Provider
      value={{
        gameState,
        appInit,
        isInitiated,
        isGameDebug,
        timer,
        players,
        question,
        nextGameState,
        positionImage,
        handleAnswer,
        votingPlayers,
        votingresult,
        votingTheme,
        setVotingTheme,
        // choosevip,
        ...audio,
        ...session,
        ...prize,
        ...score,
        ...winner,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

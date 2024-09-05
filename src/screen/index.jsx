import { useContext } from "react";
import { GameContext, GAME_STATES } from "../contexts/game";
import Register from "./register";
import Ready from "./ready";
import Match from "./match";
import Result from "./result";
import Empty from "./empty";
import Ending from "./end";

const ActiveScreen = () => {
  const { gameState } = useContext(GameContext);

  switch (gameState) {
    case GAME_STATES.REGISTER:
      return <Register />;
    case GAME_STATES.READY:
      return <Ready />;
    case GAME_STATES.MATCH:
      return <Match />;
    case GAME_STATES.RESULT:
      return <Result />;
    case GAME_STATES.ENDING:
      return <Ending />;
    default:
      return <Empty />;
  }
};

export default function Screen() {
  return <ActiveScreen />;
}

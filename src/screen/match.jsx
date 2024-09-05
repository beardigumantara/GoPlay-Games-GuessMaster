import { useContext, useEffect } from "react";
import { GameContext } from "../contexts/game";
import { toast } from "react-toastify";
import Players from "../components/players";
import Question from "../components/question";
import Session from "../components/session";
import Logo from "../components/logo";
import Theme from "../components/theme";

import {
  DEFAULT_COUNTDOWM_PER_MATCH,
  DEFAULT_GAME_REGISTRATION_VIP_STICKER_ID,
  NON_VIP_REGISTRATION,
} from "../lib/config";
import CountdownBar from "../components/countdownBar";
import PolaroidCard from "../components/PolaroidCard";

function Match() {
  const {
    sessionId,
    getLastWinner,
    nextGameState,
    question,
    positionImage,
    handleAnswer,
    postScore,
    players,
    correctAnswer,
  } = useContext(GameContext);

  console.log("status quest", question.hasQuestion);

  useEffect(() => {
    window.chatSocket.onChat = (id, username, message, userid, timestamp) => {
      // const _message = message.toLowerCase();
      const isPlayer =
        players.players.filter((player) => player.name === username).length ===
        1;
      if (isPlayer) {
        handleAnswer(username, message);
      }
    };
    return () => {
      window.chatSocket.onChat = () => {};
    };
  }, [window.chatSocket, players.players.length]);

  useEffect(() => {
    window.chatSocket.onGift = (gift) => {
    };

    return () => {
      window.chatSocket.onGift = () => {};
    };
  }, [window.chatSocket, players.players.length]);

  useEffect(() => {
    if (sessionId !== undefined) {
      getLastWinner(sessionId);
    }
  }, [sessionId]);

  console.log("positionImage.randomSide", positionImage.randomSide);
  console.log("sisa question", question.questionLeft);

  return (
    <div className="match-container">
      <div className="info">
        <div style={{ width: "100%", justifyContent: "center" }}>
          <Logo height={100} />
        </div>
        <Session />
      </div>
      <div className="game">
        <PolaroidCard
          imgSrc={question.currentQuestion.imageUrl}
          text={`Guess the ${question.theme}`}
          positionImage={positionImage}
          cropping
        />
        <CountdownBar
          time={DEFAULT_COUNTDOWM_PER_MATCH}
          onFinish={() => {
            positionImage.resultPosition();
            nextGameState();
          }}
        />
      </div>
      <div className="players-match">
        <Players />
      </div>
    </div>
  );
}

export default Match;

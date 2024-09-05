import { useContext, useEffect } from "react";
import Timer from "../components/timer";
import Players from "../components/players";
import { GameContext } from "../contexts/game";
import Session from "../components/session";
import Logo from "../components/logo";
import Theme from "../components/theme";
import {
  DEFAULT_GAME_REGISTRATION_VIP_STICKER_ID,
  DEFAULT_RESULT_TIME_PER_MATCH,
  NON_VIP_REGISTRATION,
} from "../lib/config";
import CountdownBar from "../components/countdownBar";
import PolaroidCard from "../components/PolaroidCard";

function Result() {
  const {
    nextGameState,
    positionImage,
    question,
    players,
    postScore,
    sessionId,
  } = useContext(GameContext);
  console.log("positionImage.randomSide", positionImage.randomSide);
  
  return (
    // style screenn result in app.css
    <div className="match-container">
      <style jsx>{`
        .container-resultTimer {
          display: none;
        }
        .container-result {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 90%;
          height: 80%;
          background-color: #fff;
          border: 3px solid black;
        }
        .pos-init {
          position: relative;
          bottom: 4%;
        }
      `}</style>
      <div className="info">
        <div style={{ width: "100%", justifyContent: "center" }}>
          <Logo height={100} />
        </div>
        <Session />
      </div>
      <div className="game">
        <PolaroidCard
          imgSrc={question.currentQuestion.imageUrl}
          text={question.currentQuestion.name}
        />
        <div className="container-resultTimer">
          <CountdownBar
            time={DEFAULT_RESULT_TIME_PER_MATCH}
            onFinish={() => {
              if (!question.hasQuestion) {
                postScore(sessionId, players.players);
              }
              nextGameState();
            }}
          />
        </div>
      </div>
      <div className="players-match">
        <Players />
      </div>
    </div>
  );
}
export default Result;

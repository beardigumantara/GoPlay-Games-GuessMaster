import { useContext, useEffect } from "react";
import Brand from "../components/brand";
import CountdownBar from "../components/countdownBar";
import Logo from "../components/logo";
import Players from "../components/players";
import PolaroidCard from "../components/PolaroidCard";
import ReadyTimer from "../components/readyTime";
import Session from "../components/session";
import Theme from "../components/theme";
import Timer from "../components/timer";
import { GameContext } from "../contexts/game";
import useTimer1 from "../hooks/useTimer1";
import {
  DEFAULT_COOLDOWN_PER_MATCH,
  DEFAULT_GAME_REGISTRATION_VIP_STICKER_ID,
  NON_VIP_REGISTRATION,
} from "../lib/config";
import { generateRandomNumber } from "../lib/util";

function Ready() {
  const { nextGameState, question, players, positionImage } =
    useContext(GameContext);
  const nextQuestion = () => {
    question.questionNext();
    console.log("currentQuestion", question.curentQuestion);
    // setRandomSide(sideImagePosition);
  };
  console.log("positionImage.randomSide", positionImage.randomSide);

  const countdown = useTimer1(DEFAULT_COOLDOWN_PER_MATCH);

  if (countdown.isFinished) {
    setTimeout(() => {
      nextQuestion();
      nextGameState();
      if (question.theme === 'city' || question.theme === 'flag') {
        positionImage.deffaultPosition();
      } else positionImage.questionPosition();
    }, 1);
  }

  return (
    <div className="match-container">
      <style jsx>{`
        .frame,
        .frame-init {
          margin-bottom: 10px;
          margin-top: 20px;
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
          imgSrc={""}
          imgText={countdown.timeLeft}
          text={`Get Ready ${countdown.timeLeft}`}
        />
      </div>

      <div className="players-match">
        <Players />
      </div>
    </div>
  );
}

export default Ready;

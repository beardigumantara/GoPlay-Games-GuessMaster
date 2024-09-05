import { GameContext } from "../contexts/game";
import { useContext, useEffect } from "react";

const Question = () => {
  const { question, positionImage } = useContext(GameContext);

  return (
    <>
      <div className="layout">
        <h2>Question</h2>
        <div className={positionImage.getImagePositions()}>
          <img
            onError={console.log("gambar error")}
            alt="question"
            src={question.currentQuestion.imageUrl}
          />
        </div>
      </div>
    </>
  );
};

export default Question;

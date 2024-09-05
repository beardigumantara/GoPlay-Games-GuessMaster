import { useContext } from "react";
import { GameContext } from "../contexts/game";
const Theme = () => {
  const { question } = useContext(GameContext);
  return (
    <div className="theme">
      <style jsx>{`
        .theme {
          margin: 5px 30px;
          color: black;
          background-color: #fff;
          border: 3px solid black;
          width: 80%;
          text-align: left;
        }
        .theme p {
          margin: 20px 20px;
          font-size: 24px;
        }
      `}</style>
      <p>theme : {question.theme}</p>
    </div>
  );
};

export default Theme;

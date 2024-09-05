import { useContext } from "react";
import { GameContext } from "../contexts/game";

const Session = () => {
  const { sessionCountdown, totalPrize, lastWinner, lastPrize } =
    useContext(GameContext);
  return (
    <div className="container-session">
      <style jsx>{`
        .container-session {
          display: flex;
          flex-direction: column;
          margin: 5px 30px;
          color: black;
          background-color: #fff;
          border: 3px solid black;
          width: 90%;
          text-align: left;
        }
        .container-session p {
          margin: 10px 10px;
          font-size: 24px;
        }
        marquee {
          font-size: 24px;
          font-weight: bold;
          margin: 0 15px;
        }
      `}</style>
      <p>
        <span>🏆</span> Last Session winner
      </p>
      <marquee>{`${lastWinner} with Reward Rp. ${lastPrize} `}</marquee>
      {sessionCountdown.toString() ? (
        <p>
          <span>⏱️</span> {sessionCountdown.toString()}
        </p>
      ) : (
        <p>
          <span>⏱️</span> Loading ...
        </p>
      )}
      <p>
        <span>💰️</span> Rp. {totalPrize}
      </p>
    </div>
  );
};

export default Session;

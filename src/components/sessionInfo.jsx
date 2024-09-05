import { useContext } from "react";
import { GameContext, GAME_STATES } from "../contexts/game";

const SessionInfo = () => {
  const { playersScore, players } = useContext(GameContext);
  console.log("data players score", playersScore);
  return (
    <></>
    // <div className="card-session">
    //   <style jsx>{`
    //     .card-session {
    //       display: flex;
    //       flex-direction: row;
    //       align-items: space-around;
    //       background-color: #fff;
    //       height: 100%;
    //       width: 500px;
    //       border: 5px solid black;
    //       border-radius: 8px;
    //     }
    //     .card-session p {
    //       font-size: 18px;
    //     }
    //     .top-players ol {
    //       margin: 0;
    //     }
    //     .top-players p {
    //       margin-bottom: 10px;
    //       margin-top: 5px;
    //     }
    //   `}</style>
    //   <div className="top-players">
    //     <p>
    //       <span>🏆</span> Top Player
    //     </p>
    //     <ol>
    //       <li>tes</li>
    //       <li>tes1</li>
    //       <li>tes3</li>
    //       {playersScore.slice(0, 3).map((player, i) => {
    //         return (
    //           <li key={i}>{`${player.player_name} : ${player.total_score}`}</li>
    //         );
    //       })}
    //     </ol>
    //   </div>
    //   <div className="players-join">
    //     <div className="title-timer">
    //       <p>{`Joined : ${players.players.length}`}</p>
    //       {players.players.length > 0 ? (
    //         <Timer
    //           time={DEFAULT_AUTO_START_PER_MATCH}
    //           onFinish={() => {
    //             gameStart();
    //             nextGameState();
    //           }}
    //         />
    //       ) : null}
    //     </div>
    //   </div>
    // </div>
  );
};

export default SessionInfo;

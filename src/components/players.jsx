import { useContext, useEffect } from "react";
import { GameContext } from "../contexts/game";
import { ReactComponent as VipBadge } from "../assets/images/badge-vip.svg";
import { toast } from "react-toastify";
import { DEFAULT_GAME_REGISTRATION_VIP_STICKER_ID } from "../lib/config";
import sanitizeName from "../lib/sanitizeName";

const Players = () => {
  const { players } = useContext(GameContext);

  players.players.sort((a, b) => b.score - a.score);

  return (
    <>
      <div className="players">
        <style jsx>{`
          .players {
            display: flex;
            flex-direction: column;
            margin-top: 55px;
            color: black;
            background-color: #fff;
            border: 3px solid black;
            width: 90%;
            text-align: left;
            height: 72%;
            font-size: 24px
            justify-content: flex-start;
            overflow: hidden;
          }
          p {
            font-size: 24px;
            margin: 0;
            margin-bottom: 13px;
            margin-left: 15px;
          }
          .players h2 {
            margin-left: 20px;
          }
          .list {
            display: flex;
            flex-direction: row;
            width: 250px;
          }
          .no {
            width: 30px;
          }
          .name {
            margin-left: 0;
            white-space: nowrap; 
            width: 125px; 
            overflow: hidden;
            text-overflow: ellipsis; 
          }
          .badge {
            margin: 0;
            margin-left: 5px;
          }
        `}</style>
        <h2>Players</h2>
        {players.players.map((player, i) => {
          return (
            <div className="list" key={i}>
              <p className="no">{i + 1}.</p>
              <p className="name">{player.name}</p>
              {player.isVip ? (
                        <p className="badge" style={{ paddingBottom: "5px" }}>
                          <VipBadge />
                        </p>
                      ) : null}
              <p className="score">: {player.score}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Players;

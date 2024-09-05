import { useContext, useEffect, useState } from "react";
import CountdownBar from "../components/countdownBar";
import Logo from "../components/logo";
import Confetti from "react-confetti";
import Players from "../components/players";
import { GameContext } from "../contexts/game";
import {
  DEFAULT_GAME_REGISTRATION_VIP_STICKER_ID,
  DEFAULT_LEADERBOARD_TIMER_PER_MATCH,
  DEFAULT_QUESTION_COUNT_PER_MATCH,
  DEFAULT_START_GAME_MESSAGE,
  NON_VIP_REGISTRATION,
} from "../lib/config";
import BgImg from "../assets/images/background.png";

function Ending() {
  const {
    nextGameState,
    players,
    lastWinner,
    question,
    lastPrize,
    lastScore,
    sessionCountdown,
    playersScore,
    postScore,
    sessionId,
    getScore,
  } = useContext(GameContext);

  players.players.sort((a, b) => b.score - a.score);
  const [confettiTotal, setConfettiTotal] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      if (confettiTotal > 0) setConfettiTotal(confettiTotal - 20);
      else clearInterval(interval);
    }, 500);

    return () => clearInterval(interval);
  }, [confettiTotal]);

  useEffect(() => {
    window.chatSocket.onChat = (id, username, message, userid, timestamp) => {
      const _message = message.toLowerCase();
      const isPlayer =
        players.players.filter((player) => player.name === username).length ===
        1;

      if (!isPlayer && _message === NON_VIP_REGISTRATION) {
        return;
      }
    };

    return () => {
      // Reset on chat callback
      window.chatSocket.onChat = () => {};
    };
  }, [window.chatSocket, players.players.length]);

  useEffect(() => {
    window.chatSocket.onGift = (gift) => {
      const isPlayer =
        players.players.filter((player) => player.name === gift.frm).length ===
        1;
      const isChatHistory = window.chatSocket.connectionTime > gift.time * 1000;
      if (isChatHistory) {
        return;
      }
      if (
        !isPlayer &&
        gift.item_id === DEFAULT_GAME_REGISTRATION_VIP_STICKER_ID
      ) {
        return;
      }
    };

    return () => {
      window.chatSocket.onGift = () => {};
    };
  }, [window.chatSocket, players.players.length]);

  useEffect(() => {
    if (sessionId !== undefined) {
      getScore(sessionId);
    }
  }, [sessionId]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: 0.8,
        }}
      >
        <img src={BgImg} alt="" />
      </div>
      <div
        className="container-end"
        style={{ position: "relative", width: "100%", height: "100%" }}
      >
        <Confetti
          tweenDuration={5000}
          numberOfPieces={confettiTotal}
          height="1280px"
        />
        <style jsx>{`
          .container-end {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100%;
          }
          .timer-leaderboard {
            display: none;
          }
          .logo-end {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
            width: 100%;
            height: 20%;
          }
          .logo-end p {
            margin: 0;
            font-size: 24px;
          }
          .logo-end p span {
            font-weight: bold;
            font-size: 24px;
          }
          .container-winnersession {
            display: flex;
            flex-direction: row;
            margin: 20px auto;
            height: 8%;
            width: 55%;
            justify-content: space-between;
            color: black;
            align-items: center;
            padding: 10px;
          }
          .container-winnersession p {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 5px solid black;
            border-radius: 8px;
            background-color: white;
            display: flex;
            justify-content: flex-start;
            height: 100%;
            width: 25%;
            font-size: 20px;
            font-weight: bold;
            padding: 7px;
            margin: 0;
          }
          .container-winnersession p span {
            margin: 0 10px;
            font-weight: bold;
          }
          .container-winnersession marquee {
            margin-right: 20px;
            margin-left: 10px;
          }
          .column-winner {
            display: flex;
            height: 100%;
            margin: 0;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-end;
          }
          .column-winner p {
            height: 20%;
            margin: 0;
          }
          .column-winner marquee {
            width: 80%;
            font-size: 24px;
            margin-top: 25px;
            font-weight: bold;
          }
          .container-desc {
            display: flex;
            flex-direction: column;
            width: 50%;
            height: 10%;
            font-size: 24px;
          }
          .container-desc p {
            margin: 0;
          }
          .container-desc p span {
            font-size: 28px;
            font-weight: bold;
          }
          .leaderboard-container {
            display: flex;
            flex-direction: column;
            height: 60%;
          }
          .title p {
            letter-spacing: 5px;
            font-size: 24px;
            font-weight: bold;
          }
        `}</style>
        <div className="timer-leaderboard">
          <CountdownBar
            time={DEFAULT_LEADERBOARD_TIMER_PER_MATCH}
            onFinish={() => {
              players.resetPlayers();
              question.resetTheme();
              question.setQuestionLeft(DEFAULT_QUESTION_COUNT_PER_MATCH);
              nextGameState();
            }}
          />
        </div>
        <div className="logo-end">
          <Logo />
          {players.getWinner() && (
            <>
              <p>
                CONGRATULATIONS <span>{players.getWinner().name}</span>
              </p>
              <p>{`You did it and won ${
                players.getWinner().score
              } points!!!!`}</p>
            </>
          )}
        </div>
        <div className="container-winnersession">
          <p>
            <span>🏆</span>
            <marquee>{`${lastWinner}`}</marquee>
          </p>
          <p>
            <span>💰️</span>Rp. <span>{lastPrize}</span>
          </p>
          {sessionCountdown.toString() ? (
            <p>
              <span>⏱️</span>
              <span>{sessionCountdown.toString()}</span>
            </p>
          ) : (
            <p>
              <span>⏱️</span>Loading...
            </p>
          )}
        </div>
        <div className="leaderboard-container">
          <div className="title">
            <p>Top 10 LEADERBOARD</p>
          </div>
          <div className="leaderboard-table">
            <style jsx>{`
              .leaderboard-table {
                display: flex;
                margin: 0 auto;
                width: 60%;
                font-size: 24px;
              }
              td {
                margin: 0 !important;
              }
              tr {
                margin: 0;
              }
            `}</style>
            <div className="left-table">
              <table>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
                {playersScore
                  .filter((player) => player.total_score > 0)
                  .slice(0, 5)
                  .map((player, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}.</td>
                        <td>
                          <div className="truncate">{player.player_name}</div>
                        </td>
                        <td>{player.total_score}</td>
                      </tr>
                    );
                  })}
              </table>
            </div>
            <div className="right-table">
              <table>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
                {playersScore.slice(5, 10).map((player, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 6}</td>
                      <td>
                        <div className="truncate">{player.player_name}</div>
                      </td>
                      <td>{player.total_score}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ending;

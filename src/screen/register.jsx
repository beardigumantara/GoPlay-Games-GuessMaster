import { useContext, useEffect } from "react";
import sanitizeName from "../lib/sanitizeName";
import { toast } from "react-toastify";
import { GameContext, GAME_STATES } from "../contexts/game";
import { ReactComponent as VipBadge } from "../assets/images/badge-vip.svg";
import {
  DEFAULT_AUTO_START_PER_MATCH,
  DEFAULT_GAME_REGISTRATION_VIP_STICKER_ID,
  DEFAULT_START_GAME_MESSAGE,
  INITIAL_PRIZE,
  NON_VIP_REGISTRATION,
  STICKER_PRICE,
  ENV,
  THEME_LISTS,
  STICKER_NAME,
} from "../lib/config";
import Timer from "../components/timer";
import Brand from "../components/brand";
import SessionInfo from "../components/sessionInfo";
import logotheme from "../assets/images/logotheme.png";
import { decodeVipUserId, decodeUserId } from "../lib/decodeUserId.js";
import BgImg from "../assets/images/background.png";
import { STICKER_NAME_NAME } from "../lib/staticName";

function Register() {
  const {
    players,
    nextGameState,
    isInitiated,
    appInit,
    question,
    sessionCountdown,
    postPrize,
    sessionId,
    getScore,
    getLastWinner,
    getTotalPrize,
    votingPlayers,
    playersScore,
    lastPrize,
    lastWinner,
    totalPrize,
    getVoting,
    votingresult,
    votingTheme,
    setVotingTheme,
    notifRegister,
    timer,
  } = useContext(GameContext);

  const votingTotal = Object.keys(votingresult);
  console.log("total voting", votingTotal);

  const gameStart = () => {
    console.log("getting vote", getVoting);
    if (Object.keys(votingresult).length > 0) {
      const themeResult = Object.keys(votingresult)
        .map((key) => ({
          theme: key,
          voters: votingresult[key],
        }))
        .sort((a, b) => b.voters - a.voters)[0].theme;
      console.log("themeResult", themeResult);
      if (themeResult !== undefined) {
        question.chooseTheme(themeResult);
      }
    }

    if (votingTheme.length === 0 && question.theme === undefined) {
      console.log("check");
      question.getTheme();
    }
    question.getQuestions();
    question.setQuestionLeft(question.questionLeft);
    setVotingTheme([]);
    console.log("set question", question.questionLeft);
  };

  useEffect(() => {
    if (!isInitiated) {
      appInit();
    }
    if (sessionId !== undefined) {
      getScore(sessionId);
      getLastWinner(sessionId);
      getTotalPrize(sessionId, INITIAL_PRIZE);
    }
  }, [sessionId]);

  useEffect(() => {
    window.chatSocket.onChat = (id, username, message, userid, timestamp) => {
      console.log("Remote chat", id, username, message, userid, timestamp);
      const _message = message.toLowerCase();
      const isChatHistory = window.chatSocket.connectionTime > timestamp;
      const isPlayer =
        players.players.filter((player) => player.name === username).length ===
        1;
      if (isChatHistory) {
        return;
      }
      if (!isPlayer && _message === NON_VIP_REGISTRATION) {
        players.registerPlayer(
          decodeUserId(userid),
          sanitizeName(username),
          false
        );
        toast.success(`${username}, berhasil mendaftar`);
      } else if (isPlayer) {
        if (_message === NON_VIP_REGISTRATION) {
          console.log(username, _message, "gagal");
          toast.error(`${username} sudah mendaftar`);
        }
        if (_message === DEFAULT_START_GAME_MESSAGE && ENV === "integration") {
          gameStart();
          nextGameState();
          toast.success(`Game Start`);
        }
        votingPlayers(_message, sanitizeName(username));
        console.log("list players", players.players);
        console.log("mengisi", _message);
      }
    };
    return () => {
      // Reset on chat callback
      window.chatSocket.onChat = () => {};
    };
  }, [window.chatSocket, players.players.length, votingPlayers]);

  // console.log('getting upgrade players', players.players);

  useEffect(() => {
    window.chatSocket.onGift = (gift) => {
      console.log("Remote gift", gift);
      console.log("waktu chatsocket", window.chatSocket.connectionTime);
      const isPlayer =
        players.players.filter((player) => player.name === gift.frm).length ===
        1;
      const regularPlayer =
        players.regularPlayers.filter((player) => player.name === gift.frm)
          .length === 1;
      const isChatHistory = window.chatSocket.connectionTime > gift.time * 1000;
      if (isChatHistory) {
        return;
      }
      if (
        !isPlayer &&
        gift.item_id === DEFAULT_GAME_REGISTRATION_VIP_STICKER_ID
      ) {
        players.registerPlayer(
          decodeVipUserId(gift.frm_id),
          sanitizeName(gift.frm),
          true
        );
        notifRegister();
        toast.success(`${gift.frm}, berhasil mendaftar sebagai vip`);
        if (postPrize) postPrize(sessionId, STICKER_PRICE, gift);
      } else if (
        regularPlayer &&
        gift.item_id === DEFAULT_GAME_REGISTRATION_VIP_STICKER_ID
      ) {
        players.upgradeStatusPlayer(
          decodeUserId(gift.frm_id),
          sanitizeName(gift.frm),
          true
        );
        notifRegister();
        toast.success(`${gift.frm}, Upgrade sebagai vip`);
        if (postPrize) postPrize(sessionId, STICKER_PRICE, gift);
      }
    };

    return () => {
      window.chatSocket.onGift = () => {};
    };
  }, [window.chatSocket, players]);
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
        className="register-container"
        style={{ position: "relative", width: "100%", height: "100%" }}
      >
        <style jsx>{`
        .register-container {
          color: black;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
        }
        .content-session{
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
          width: 55%;
          height: 10%;
          margin: 25px 0;
        }
        .content-session p{
          display: flex;
          margin: 0;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          padding-left: 20px;
          background-color: white;
          height: 100%;
          width: 180px;
          font-size: 20px;
          font-weight: bold;
          border: 5px solid black;
          border-radius: 8px;
        }
        .content-session p span {
          margin-right: 20px;
        }
        marquee{
          margin-right: 20px;
        }
        .card-register {
          display: flex;
          flex-direction: row;
          height:20%
        }
        .register-desc {
          display: flex;
          flex-direction: column;
          justify-content: center
          align-items: center;
          height: 20%;
          width: 50%;
          color: white;
        }
        .register-desc marquee {
          display: flex;
          width: 100%;
          font-weight: bold;
          margin-top: 20px;
          font-size: 24px;
        }
        .register-desc p {
          font-size: 24px;
          margin: 0;
          margin-top: 10px;
        }
        .register-desc p span {
          font-size: 28px;
          font-weight: bold;
        }
        .card-register {
          width: 55%;
        }
      `}</style>
        <div className="Header">
          <Brand />
        </div>
        <div className="content-session">
          <p>
            <span>🏆</span>
            <marquee>{` Last Winner ${lastWinner} Rp. ${lastPrize} `}</marquee>
          </p>
          <p>
            <span>💰️</span>Rp. {totalPrize}
          </p>
          {sessionCountdown.toString() ? (
            <p>
              <span>⏱️</span>
              {sessionCountdown.toString()}
            </p>
          ) : (
            <p>
              <span>⏱️</span>
              Loading...
            </p>
          )}
        </div>
        <div className="card-register">
          <div className="card-session">
            <style jsx>{`
              .card-session {
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: space-between;
                background-color: #fff;
                height: 100%;
                width: 100%;
                border: 5px solid black;
                border-radius: 8px;
              }
              .card-session p {
                font-size: 20px;
              }
              .top-players {
                width: 40%;
                overflow: hidden;
              }
              .top-players ol {
                margin: 0;
              }
              .top-players p {
                margin-left: 15px;
                margin-bottom: 10px;
                margin-top: 5px;
                font-weight: bold;
                width: 100%;
              }
              .list {
                display: flex;
                flex-direction: row;
                width: 90%;
                height: 30px;
              }
              .name-top-player {
                width: 140px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              p.no {
                margin: 0;
                margin-left: 20px;
                margin-top: 5px;
                width: 5px;
                padding-right: 10px;
              }
            `}</style>
            <div className="top-players">
              <p>
                <span>🏆</span> Top Player
              </p>
              {playersScore
                .filter((player) => player.total_score > 0)
                .slice(0, 3)
                .map((player, i) => {
                  return (
                    <div className="list" key={i}>
                      <p className="no">{i + 1}. </p>
                      <p>
                        <div className="name-top-player">
                          {player.player_name}
                        </div>
                      </p>
                      <p className="score">{player.total_score}</p>
                    </div>
                  );
                })}
            </div>
            <div className="players-join">
              <div className="title-timer">
                <style jsx>
                  {`
                    .players-join {
                      width: 60%;
                    }
                    .title-timer {
                      display: flex;
                      justify-content: space-between;
                      flex-direction: row;
                      width: 100%;
                    }
                    .title-timer p {
                      margin: 11px 0 10px 10px;
                      font-weight: bold;
                    }
                  `}
                </style>
                <p>{`Joined : ${players.players.length}`}</p>
                {players.players.length > 0 ? (
                  <Timer
                    time={DEFAULT_AUTO_START_PER_MATCH}
                    onFinish={() => {
                      gameStart();
                      nextGameState();
                    }}
                  />
                ) : null}
              </div>
              <div className="player-lists">
                <style jsx>{`
                  .player-lists {
                    height: 80%;
                  }
                  .player-lists {
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    align-items: flex-start;
                    justify-content: flex-start;
                    max-height: 100px;
                    margin: 0;
                    overflow: hidden;
                  }
                  .lists {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: flex-start;
                    width: 140px;
                    height: 32px;
                  }
                  .lists p {
                    margin: 0;
                  }
                  .no {
                    margin-right: 10px;
                    margin-top: 10px;
                    width: 20px;
                  }
                  .name {
                    margin-right: 10px;
                    margin-top: 10px;
                    width: 80px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  }
                `}</style>
                {[...players.players].reverse().map((player, i) => {
                  return (
                    // <li key={i}>{player.name} {player.isVip ? (<span>VIP</span>) : null}</li>
                    <div className="lists" key={player.name}>
                      <p className="name">{player.name}</p>
                      {player.isVip ? (
                        <p className="badge" style={{ paddingBottom: "5px" }}>
                          <VipBadge />
                        </p>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="theme-container">
          <style jsx>{`
            .theme-container {
              display: flex;
              flex-direction: row;
              background-color: white;
              border: 5px solid black;
              border-radius: 8px;
              margin-top: 25px;
              width: 54%;
              height: 8%;
              font-size: 20px;
              font-weight: bold;
            }
            .voting {
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: flex-start;
              width: 75%;
            }
            .voting p {
              margin-right: 10px;
              width: 120px;
            }
            .theme-res {
              float: left;
              width: 25%;
            }
          `}</style>
          <div className="voting">
            {Object.keys(votingresult)
              .map((key) => ({
                theme: key,
                voters: votingresult[key],
              }))
              .sort((a, b) => b.voters - a.voters)
              .map((data) => {
                return (
                  <p>
                    {data.theme}: {data.voters}
                  </p>
                );
              })}
          </div>
          <div className="theme-res">
            {Object.keys(votingresult)
              .map((key) => ({
                theme: key,
                voters: votingresult[key],
              }))
              .sort((a, b) => b.voters - a.voters)
              .slice(0, 1)
              .map((data, i) => {
                return <p key={i}>Theme: {data.theme}</p>;
              })}
          </div>
        </div>
        <div className="register-desc">
          <marquee>
            {`GuessMaster Theme : ${THEME_LISTS} || VIP Players can
          vote for theme`}
          </marquee>
          <p>
            Send a <b> {STICKER_NAME} </b>
            sticker to join the game as VIP or type <b> play </b> to join for
            free
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;

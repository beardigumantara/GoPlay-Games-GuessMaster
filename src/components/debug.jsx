import { useContext } from "react";
import { toast } from "react-toastify";
import { GameContext } from "../contexts/game";
import { OptionsContext } from "../contexts/options";

const Debug = () => {
  const {
    isGameDebug,
    players,
    nextGameState,
    question,
    handleAnswer,
    votingPlayers,
    choosevip,
    notifRegister,
    correctAnswer,
  } = useContext(GameContext);

  console.log(question.theme);

  return (
    <div className="debug-game">
      <style jsx>{`
        .debug-game {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          margin-top: 20px;
          width: 1280px;
          height: 200px;
        }
        input {
          font-size: 20px;
          color: white;
          background-color: transparent;
          border: none;
          border-bottom: 3px solid #df1995;
        }
        button {
          font-size: 20px;
          font-weight: bold;
          height: 40px;
          width: 50%;
          border: 2px solid white;
          margin-left: 20px;
        }
      `}</style>
      <div className="container-regist">
        <style jsx>{`.container-regist {
          display: flex;
          flex-direction: row;
        }`}</style>
        <input
          type="text"
          placeholder="Register Player..."
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              players.registerPlayer(
                players.players.length,
                event.target.value,
                true
              );
              event.target.value = "";
            }
          }}
        />
        <input
          type="text"
          placeholder="Pilih Tema"
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              question.chooseTheme(event.target.value);
              event.target.value = "";
            }
          }}
        />
        <button
          onClick={() => {
            if (question.theme === undefined) {
              question.getTheme();
            }
            question.getQuestions();
            
            question.setQuestionLeft(question.questionLeft);
            console.log("set question", question.questionLeft);
            nextGameState();
          }}
        >
          Start
        </button>
      </div>
      <div className="container-match">
        {players.players.map((player, i) => {
          return (
            <div key={i}>
              <input
                type="text"
                placeholder={player.name}
                onKeyUp={(event) => {
                  if (event.key === "Enter") {
                    handleAnswer(player.name, event.target.value);
                    event.target.value = "";
                  }
                }}
              />
            </div>
          );
        })}
        {players.players.map((player, i) => {
          return (
            <div key={i}>
              <input
                type="text"
                placeholder={player.name}
                onKeyUp={(event) => {
                  if (event.key === "Enter") {
                    votingPlayers(event.target.value, player.name);
                    event.target.value = "";
                  }
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Debug;

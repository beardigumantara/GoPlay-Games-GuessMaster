import { useContext } from "react";
import { OptionsContext } from "../contexts/options";
import OptionsSticker from "./optionsSticker";
import { GameContext, GAME_STATES } from "../contexts/game";

const Option = () => {
  const {
    env,
    themeLists,
    messageStart,
    autostart,
    cooldown,
    countdown,
    questionSet,
    resultTimer,
    sessionDuration,
    initialPrize,
    leaderboardTimer,
    handleLeaderboardTimer,
    handleChangeAutostart,
    handleChangeResultTimer,
    handleChangeCooldown,
    handleChangeCountdown,
    handleOnlySave,
    handleSubmit,
    handleChangeQuestionSet,
    handleChangeEnv,
    handleChangeThemeLists,
    handleChangeMessageStart,
    handleChangeInitialPrize,
    handleChangeSessionDuration,
  } = useContext(OptionsContext);
  const { nextGameState, question } = useContext(GameContext);

  return (
    <div className="option-container">
      <style jsx>{`
        .option-container {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          width: 500px;
          margin-left: 10px;
          color: #fff;
          font-size: 22px;
        }
      `}</style>
      <div className="options-submit">
        <style jsx>{`
          .options-submit {
            display: flex;
            flex-direction: row;
            width: 80%;
            justify-content: space-between;
          }
          .options-submit button {
            font-size: 20px;
            font-weight: bold;
            height: 50px;
            width: 100px;
            border: 2px solid white;
            margin: 20px auto;
          }
          .options-submit h3{
            margin: 0;
            margin-left: 10px;
            margin-top: 30px;
        `}</style>
        <h3>Option Config</h3>
        <button onClick={handleSubmit}>
          Apply
        </button>
        <button onClick={handleOnlySave}>Save</button>
      </div>
      <div className="option-config">
        <style jsx>{`
          .option-config {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            margin-top: 10px;
            overflow-y: scroll;
            overflow-x: hidden;
            width: 100%;
            height: 620px;
          }
          .option-config label {
            margin: 0;
            margin-left: 20px;
            margin-top: 10px;
          }
          input {
            font-size: 20px;
            color: white;
            width: 94%;
            background-color: transparent;
            border: none;
            border-bottom: 3px solid #df1995;
          }
          select {
            margin-left: 20px;
            font-size: 22px;
            background-color: #df1995;
            padding: 10px;
            color: white;
            width: 260px;
          }
        `}</style>
        <select
          id="config-env"
          name="env"
          value={env}
          onChange={handleChangeEnv}
          sty
        >
          <option value="integration">Integration</option>
          <option value="production">Production</option>
        </select>
        <button
          onClick={() => {
            if (question.theme === undefined) {
              question.getTheme();
              question.getQuestions();
              question.setQuestionLeft(question.questionLeft);
              question.questionNext();
            }
            nextGameState();
          }}
          style={{ marginBottom:"10px", marginTop: "10px", fontSize: "20px", height: "50px", padding: "10px", width: "260px" }}
        >
          Next Game State
        </button>
        <label htmlFor="setInitialPrize">Initial Prize</label>
        <input
          type="number"
          onChange={handleChangeInitialPrize}
          value={initialPrize}
        />
        <label htmlFor="setSessionDuration">Session Duration</label>
        <input
          type="number"
          onChange={handleChangeSessionDuration}
          value={sessionDuration}
        />
        <label htmlFor="setQuestion">Question</label>
        <input
          type="number"
          onChange={handleChangeQuestionSet}
          value={questionSet}
        />
        <label htmlFor="setMessageStart">Words to Regist Player</label>
        <input
          type="text"
          onChange={handleChangeMessageStart}
          value={messageStart}
        />
        <label htmlFor="autostart">autostart time</label>
        <input
          type="number"
          onChange={handleChangeAutostart}
          value={autostart}
        />
        <label htmlFor="cooldown">Cooldown time</label>
        <input type="number" onChange={handleChangeCooldown} value={cooldown} />
        <label htmlFor="countdown">Countdown time</label>
        <input
          type="number"
          onChange={handleChangeCountdown}
          value={countdown}
        />
        <label htmlFor="resulTimer">result time</label>
        <input
          type="number"
          onChange={handleChangeResultTimer}
          value={resultTimer}
        />
        <label htmlFor="leaderboardTimer">Leaderboard time</label>
        <input
          type="number"
          onChange={handleLeaderboardTimer}
          value={leaderboardTimer}
        />
        <OptionsSticker />
        <label htmlFor="themeLists">Theme List</label>
        <input
          type="string"
          onChange={handleChangeThemeLists}
          value={themeLists}
        />
      </div>
    </div>
  );
};

export default Option;

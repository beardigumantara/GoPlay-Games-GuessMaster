// import logo from './logo.svg';
import "./App.css";
import QuestionPage from "./components/question";
import Players from "./components/players";
import { GameProvider } from "./contexts/game";
import Viewport from "./components/viewport";
import Debug from "./components/debug";
import Notification from "./components/notifications";
import Screen from "./screen";
import { OptionsProvider } from "./contexts/options";
import Option from "./components/option";

function App() {
  return (
    <div className="App">
      <style jsx>{`
        .App {
          display: flex;
          flex-direction: row;
        }
      `}</style>
      <GameProvider>
        <div className="container-gamedebug">
          <Viewport>
            <Notification />
            <Screen />
          </Viewport>
          <Debug />
        </div>
        <OptionsProvider>
          <Option />
        </OptionsProvider>
      </GameProvider>
    </div>
  );
}

export default App;

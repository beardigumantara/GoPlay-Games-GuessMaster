import { useState, useContext } from "react";
import { toast } from "react-toastify";
import useAudio from "./useSound";

const usePlayer = () => {
  const [players, setPlayers] = useState([]);
  const audio = useAudio();

  const registerPlayer = (id, name, isVip) => {
    console.log("idPlayers", players);
    const isPlayer =
      players.filter((player) => player.name === name).length === 1;
    const newPlayer = { id, name, score: 0, isVip };

    if (!isPlayer) {
      console.log("Registering a new player:", newPlayer);
      audio.notifRegister();
      setPlayers([...players, newPlayer]);
      // question.getQuestions();
      // toast.success(`${name}, berhasil mendaftar`);
    } else if (isPlayer) {
      toast.error(`${name} sudah mendaftar`);
    }
  };

  const regularPlayers = players.filter((player) => player.isVip === false);
  const vipPlayers = players.filter((player) => player.isVip === true);
  const vipPlayersId =
    vipPlayers.filter((vipPlayer) => vipPlayer.id === vipPlayer.id).length ===
    1;
  const upgradeStatusPlayer = (id, name, isVip) => {
    const isRegularPlayer =
      regularPlayers.filter((player) => player.name === name)[0];
    console.log("isRegularPlayer", isRegularPlayer);
    isRegularPlayer.id = id;
    isRegularPlayer.isVip = isVip;
    console.log("isRegularPlayer 1", isRegularPlayer);
    const newPlayer = players.map((player) => {
      if (player.name === name) {
        return isRegularPlayer;
      }
      return player;
    })
    setPlayers(newPlayer);
  };
  console.log('cek status players', players);
  const addScorePlayer = (name) => {
    const newPlayers = players.map((player) => {
      if (player.name === name) {
        return { ...player, score: player.score + 1 };
      } else return player;
    });
    setPlayers(newPlayers);
  };

  const getWinner = () => {
    if (players.length === 0) {
      return [];
    }
    let winner;
    const allPlayers = players.map((player) => {
      return player.score;
    });
    const highestScore = Math.max(...allPlayers);
    winner = players.find((player) => player.score === highestScore);
    if (winner.score === 0) {
      return "";
    }
    return winner;
  };

  const resetPlayers = () => {
    setPlayers([]);
  };

  return {
    players,
    registerPlayer,
    addScorePlayer,
    getWinner,
    resetPlayers,
    vipPlayers,
    vipPlayersId,
    regularPlayers,
    upgradeStatusPlayer,
    // handleAnswer,
  };
};

export default usePlayer;

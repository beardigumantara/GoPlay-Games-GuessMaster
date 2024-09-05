import sfxregist from "../assets/sounds/sfxregist.wav"
import sfxcorrect from "../assets/sounds/sfxcorrect.mp3"

export default function useAudio() {
	const notifRegister = () => {
		const regist = new Audio(sfxregist);
		regist.play();
    console.log('sound masuk');
	};
  const correctAnswer = () => {
    const correct = new Audio(sfxcorrect);
    correct.play();
  }

	return { notifRegister, correctAnswer,};
}

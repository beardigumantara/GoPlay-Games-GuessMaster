import { useEffect, useState } from 'react';

const useTimer1 = (startAt) => {
	const [timeLeft, setTimeLeft] = useState(startAt);
	const isFinished = timeLeft === 0;

	useEffect(() => {
		if (!isFinished) {
			const intervalId = setInterval(() => {
				setTimeLeft(timeLeft - 1);
			}, 1000);

			return () => clearInterval(intervalId);
		}
	}, [isFinished, timeLeft]);

	return {
		startAt,
		timeLeft,
		isFinished,
	};
};

export default useTimer1;

import { useState } from 'react';
import axios from 'axios';
import { LOCALHOST_PORT } from "../lib/config";

export default function useWinner() {
	const [lastPrize, setLastPrize] = useState(0);
	const [lastWinner, setLastWinner] = useState('');

	const getLastWinner = (session_id) => {
		if (session_id === undefined) {
			return console.log('Get last winner aborted. Session ID is not defined.');
		}
		console.log('Get last Winner');
		axios({
			method: 'get',
			url: `${LOCALHOST_PORT}/api/winner/last`,
			params: {
				session_id,
			},
		}).then(res => {
			const hasLastWinner = res.data[0].player_name;
			console.log(hasLastWinner);

			if (hasLastWinner) {
				setLastWinner(res.data[0].player_name);
				setLastPrize(res.data[0].total_prize);
				console.log('Set last winner', res.data[0].player_name);
				console.log('Set last total prize', res.data[0].total_prize);
			}
		});
	};

	const postWinner = (session_id, initial_prize) => {
		console.log('Posting current session winner');

		if (session_id === undefined) {
			console.log('Aborting post winner, session_id is undefined');
		}

		return axios({
			url: `${LOCALHOST_PORT}/api/winner`,
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			data: new URLSearchParams({
				session_id,
				initial_prize,
			}).toString(),
		});
	};

	return {
		lastPrize,
		lastWinner,
		getLastWinner,
		postWinner,
	};
}

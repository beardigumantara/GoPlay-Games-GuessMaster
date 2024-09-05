import { useState } from 'react';
import axios from 'axios';
import { LOCALHOST_PORT } from '../lib/config';

export default function usePrize() {
	const [totalPrize, setTotalPrize] = useState(0);

	const getTotalPrize = (session_id, initial_prize) => {
		if (session_id === undefined) {
			return console.log('Get total prize aborted. Session ID is not defined.');
		}
		console.log('Get total prize');
		axios({
			method: 'get',
			url: `${LOCALHOST_PORT}/api/prize`,
			params: {
				session_id,
				initial_prize,
			},
		}).then(res => {
			const hasTotalPrize = res.data[0].total_prize !== '';

			if (hasTotalPrize) {
				setTotalPrize(res.data[0].total_prize);
				console.log('Set total prize', res.data[0].total_prize);
			} else {
				console.log('No total prize data');
			}
		});
	};

	const addPrize = (amount) => {
		console.log('Add total prize:', amount);
		setTotalPrize(totalPrize + amount);
	};

	const postPrize = (session_id, amount, gift) => {
		gift.item_id = gift.item_id.toString();
		axios({
			method: 'post',
			url: `${LOCALHOST_PORT}/api/prize`,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			data: new URLSearchParams({
				amount,
				player_name: gift.frm,
				vg_id: gift.item_id,
				vg_name: gift.title_id,
				vg_price: gift.price,
				session_id,
			}).toString(),
		}).then(() => {
			// Add total prize
			addPrize(parseInt(amount));
		});
	};

	return {
		totalPrize,
		addPrize,
		getTotalPrize,
		postPrize,
	};
}

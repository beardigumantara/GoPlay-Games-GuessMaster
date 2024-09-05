import { useState } from 'react';
import axios from 'axios';
import { LOCALHOST_PORT } from '../lib/config';
import { ENV } from '../lib/config';

export default function useSticker() {
	const [stickerOptions, setStickerOptions] = useState([]);

	const getStickers = async () => {
		console.log('Get Stickers Option');
		const res = await axios({
			method: 'get',
			url: `${LOCALHOST_PORT}/api/sticker/${ENV}`,
		});
		setStickerOptions(res.data);
	};

	return { getStickers, stickerOptions };
}

import { useState } from "react";
import axios from "axios";
import { LOCALHOST_PORT } from "../lib/config";
const useScore = () => {
    const [playersScore, setPlayersScore] = useState([]);
    
    const getScore = async (session_id) => {
        console.log("Getting score for session:", session_id);
        const res = await axios({
            url: `${LOCALHOST_PORT}/api/score`,
            method: "get",
            headers: { "content-type": "application/json" },
            params: {
                session_id,
            },
        });
        console.log("Got score:", res.data);
        setPlayersScore(res.data);
        return res.data;
    }

    const postScore = (session_id, scores) => {
		console.log('Post score data', scores);
		axios({
			method: 'post',
			url: `${LOCALHOST_PORT}/api/score`,
			headers: {
				'Content-Type': 'application/json',
			},
			data: {
				session_id,
				scores,
			},
		});
	};


    return {
        playersScore,
        getScore,
        postScore,
    }
}

export default useScore;

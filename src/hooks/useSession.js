import { useState } from "react";
import { getCountdown } from "../lib/util";
import axios from "axios";
import { LOCALHOST_PORT } from "../lib/config";

let sessionCountdownId;

export default function useSession() {
  const [sessionId, setSessionId] = useState();
  const [sessionCountdown, setSessionCountdown] = useState({
    toString: () => {},
  });
  const [timeFinish, setTimeFinish] = useState();

  const getSession = async (slug) => {
    console.log("Getting session for slug:", slug);

    const res = await axios({
      url: `${LOCALHOST_PORT}/api/session`,
      method: "get",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      params: {
        slug,
      },
    });
    // If there are no session id from given slug
    if (res.data[0] === undefined) {
      // Create a new session
      return console.log("theres no session id from");
    }
    // Otherwise Set session ID
    setSessionId(res.data[0].id);
    console.log("Set session ID to:", res.data[0].id);
    const id = res.data[0].id;
    const time_end = res.data[0].time_end;
    setTimeFinish(time_end);
    return {
      sessionId: id,
      sessionEnd: time_end,
    };
  };

  const clearCountdown = () => {
    clearInterval(sessionCountdownId);
  };

  const createSession = (slug, duration) => {
    console.log("Create new session");
    if (slug === null) {
      return console.log("Create new session aborted, slug is undefined");
    }

    axios({
      url: `${LOCALHOST_PORT}/api/session`,
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams({
        slug,
        duration,
      }).toString(),
    }).then((res) => {
      // Reload page on new session
      window.location.reload();
    });
  };

  const initCountdown = (timeEnd, callback = () => {}) => {
    // // Convert time to UTC
    // timeEnd = `${timeEnd} UTC`;

    // // Fix date format for IE and Safari by replacing "-" to "/"
    // timeEnd = timeEnd.replace(/-/g, "/");

    console.log("Set session countdown to:", new Date(timeEnd));

    sessionCountdownId = setInterval(() => {
      // Calculate session time
      const countdown = getCountdown(timeEnd);

      if (countdown.isFinished) {
        console.log("Session is ended");
        clearCountdown();

        // Post winner data on countdown finish using a callback
        callback();
      } else {
        setSessionCountdown(countdown);
      }
    }, 1000);

    console.log("sessionCountdownId", sessionCountdownId);
  };

  // const hasSufficientTimeForMatch = () => {
  // 	console.log('totalTimePerMatch', totalTimePerMatch);
  // 	console.log('sessionCountdown.secondsLeft', sessionCountdown?.secondsLeft);

  // 	if (sessionCountdown)
  // 		return sessionCountdown.secondsLeft > totalTimePerMatch;
  // };

  return {
    getSession,
    sessionId,
    setSessionId,
    createSession,
    sessionCountdown,
    setSessionCountdown,
    sessionCountdownId,
    initCountdown,
    // hasSufficientTimeForMatch,
    timeFinish,
  };
}

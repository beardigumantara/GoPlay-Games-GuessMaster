import React from 'react'
import useTimer1 from '../hooks/useTimer1'

const Timer = ({time, onFinish}) => {
  const countdown = useTimer1(time)

  if (countdown.isFinished) {
		// Execute on finish callback on 1ms delay
		// to avoid setTimer error
		setTimeout(onFinish, 1);
  }

  return (
    <div className='autostart'>
      <style jsx>{`.autostart p{
        font-size: 20px;
        margin: 10px 0 10px 10px;
      }`}</style>
      <p>Start in : {countdown.timeLeft}</p>
    </div>
  )
}

export default Timer
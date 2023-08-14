import { useEffect, useState } from 'react';

const Timer = ({ dispatch, remainingTime }) => {
  useEffect(() => {
    if (remainingTime === 0) {
      dispatch({ type: 'next' });
      return;
    }

    const intervalID = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);

    return () => clearInterval(intervalID);
  }, [remainingTime]);

  return (
    <div className="timer">
      <h3>
        Time left: {remainingTime < 10 ? 0 : null}
        {remainingTime}
      </h3>
      <button
        className="btn btn--skip"
        onClick={() => dispatch({ type: 'next' })}
      >
        Skip
      </button>
    </div>
  );
};

export default Timer;

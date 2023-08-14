const calculateScoreStats = (answerArr, correctAnswers) => {
  const result = answerArr.reduce(
    (stats, userAnswer, index) => {
      const correctAnswer = correctAnswers[index];

      if (userAnswer === -1) {
        stats.skippedCount++;
      } else if (userAnswer === correctAnswer) {
        stats.correctCount++;
      } else {
        stats.incorrectCount++;
      }

      return stats;
    },
    {
      correctCount: 0,
      incorrectCount: 0,
      skippedCount: 0,
    }
  );

  return result;
};

const Finished = ({ dispatch, correctArr, answerArr }) => {
  const scoreStats = calculateScoreStats(answerArr, correctArr);

  return (
    <>
      <div className="finished">
        <h2 className="finished-heading">Finished!</h2>
        <p className="finished-text">
          You scored {scoreStats.correctCount} out of {answerArr.length}!
        </p>
        <button
          className="btn btn--reset"
          onClick={() => dispatch({ type: 'reset' })}
        >
          Retry?
        </button>
      </div>
      <div className="score">
        <h3>Result</h3>
        <div className="progress-container">
          <p>Correct:</p>
          <progress
            className="progress correct"
            max={answerArr.length}
            value={scoreStats.correctCount}
          />
          <p>
            {scoreStats.correctCount}/{answerArr.length}
          </p>
        </div>
        <div className="progress-container">
          <p>Incorrect:</p>
          <progress
            className="progress incorrect"
            max={answerArr.length}
            value={scoreStats.incorrectCount}
          />
          <p>
            {scoreStats.incorrectCount}/{answerArr.length}
          </p>
        </div>
        <div className="progress-container">
          <p>Skipped:</p>
          <progress
            className="progress skipped"
            max={answerArr.length}
            value={scoreStats.skippedCount}
          />
          <p>
            {scoreStats.skippedCount}/{answerArr.length}
          </p>
        </div>
      </div>
    </>
  );
};

export default Finished;

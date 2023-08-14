const StartScreen = ({ dispatch }) => {
  return (
    <div className="start-screen">
      <h2 className="start-heading">Welcome to the React Quiz App!</h2>
      <p className="start-text">Click the button to get started.</p>
      <button
        className="btn btn--start"
        onClick={() => dispatch({ type: 'start' })}
      >
        Start
      </button>
    </div>
  );
};

export default StartScreen;

const Options = ({ question, dispatch }) => {
  return (
    <>
      {question.choices.map((choice, index) => {
        return (
          <button
            className="btn btn--option"
            key={choice}
            index={index}
            onClick={() => {
              dispatch({ type: 'answer', payload: index });
              dispatch({ type: 'next' });
            }}
          >
            {choice}
          </button>
        );
      })}
    </>
  );
};

export default Options;

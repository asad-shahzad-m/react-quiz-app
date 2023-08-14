import Options from './Options';

const Question = ({ question, index, answer, dispatch }) => {
  return (
    <div className="question">
      <p className="mb-4">
        Question {index + 1}: {question.statement}
      </p>
      <Options question={question} dispatch={dispatch} />
    </div>
  );
};

export default Question;

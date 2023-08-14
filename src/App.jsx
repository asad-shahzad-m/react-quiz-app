import { useReducer } from 'react';

// component imports
import Header from './components/Header';
import Progress from './components/Progress';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import Timer from './components/Timer';
import Finished from './components/Finished';

// css imports
import './App.css';

// const initialState = {
//   questions: [
//     {
//       statement: 'What is the capital of France?',
//       choices: ['London', 'Berlin', 'Paris', 'Madrid'],
//     },
//     {
//       statement: 'What is the largest mammal in the world?',
//       choices: ['Elephant', 'Giraffe', 'Lion', 'Blue Whale'],
//     },
//   ],

//   // 'ready', 'active', 'finished'
//   status: 'ready',
//   index: 0,
//   points: 0,
//   correctArr: [2, 3],
//   answerArr: Array(2).fill(-1),
//   remainingTime: 30,
// };

const initialState = {
  questions: [
    {
      statement: 'What is the capital of France?',
      choices: ['London', 'Berlin', 'Paris', 'Madrid'],
    },
    {
      statement: 'What is the largest mammal in the world?',
      choices: ['Elephant', 'Giraffe', 'Lion', 'Blue Whale'],
    },
    {
      statement: 'Which planet is known as the "Red Planet"?',
      choices: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    },
    {
      statement: 'What is the chemical symbol for gold?',
      choices: ['Au', 'Ag', 'Fe', 'Cu'],
    },
    {
      statement: 'Which gas do plants use for photosynthesis?',
      choices: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
    },
    {
      statement: 'What is the tallest mountain in the world?',
      choices: [
        'Mount Kilimanjaro',
        'Mount Everest',
        'Mount McKinley',
        'Mount Fuji',
      ],
    },
    {
      statement: 'Which animal is known as the "King of the Jungle"?',
      choices: ['Giraffe', 'Lion', 'Elephant', 'Hippopotamus'],
    },
    {
      statement: 'What is the chemical symbol for water?',
      choices: ['H2O', 'CO2', 'O2', 'NaCl'],
    },
    {
      statement: 'Which famous scientist developed the theory of relativity?',
      choices: [
        'Isaac Newton',
        'Albert Einstein',
        'Galileo Galilei',
        'Nikola Tesla',
      ],
    },
    {
      statement: 'What is the smallest prime number?',
      choices: ['1', '2', '3', '5'],
    },
    {
      statement: "Which gas is responsible for the Earth's ozone layer?",
      choices: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Ozone'],
    },
    {
      statement: 'Which instrument is used to measure atmospheric pressure?',
      choices: ['Thermometer', 'Barometer', 'Hygrometer', 'Altimeter'],
    },
    {
      statement: 'What is the chemical symbol for iron?',
      choices: ['Fe', 'Au', 'Ag', 'Cu'],
    },
    {
      statement: "Which gas is most abundant in the Earth's atmosphere?",
      choices: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'],
    },
    {
      statement: 'What is the process by which plants make their own food?',
      choices: ['Respiration', 'Photosynthesis', 'Fermentation', 'Combustion'],
    },
  ],

  status: 'ready',
  index: 0,
  points: 0,
  correctArr: [2, 3, 0, 0, 1, 1, 1, 0, 1, 1, 3, 1, 0, 2, 2],
  answerArr: Array(15).fill(-1),
  remainingTime: 30,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'start':
      return {
        ...state,
        status: 'active',
      };
    case 'next':
      if (state.index + 1 > state.questions.length - 1) {
        return {
          ...state,
          status: 'finished',
        };
      }
      return {
        ...state,
        index: state.index + 1,
        remainingTime: initialState.remainingTime,
      };
    case 'tick':
      return {
        ...state,
        remainingTime: state.remainingTime - 1,
      };
    case 'answer':
      const updatedArr = [...state.answerArr];
      updatedArr[state.index] = action.payload;
      return {
        ...state,
        answerArr: updatedArr,
        remainingTime: initialState.remainingTime,
      };
    case 'reset':
      return initialState;
    default:
      throw new Error('Action not defined!');
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    status,
    questions,
    index,
    answer,
    remainingTime,
    correctArr,
    answerArr,
  } = state;

  return (
    <>
      <Header />
      {status === 'ready' && <StartScreen dispatch={dispatch} />}
      {status === 'active' && (
        <>
          <Timer dispatch={dispatch} remainingTime={remainingTime} />
          <Question
            question={questions[index]}
            index={index}
            answer={answer}
            dispatch={dispatch}
          />
        </>
      )}
      {status === 'finished' && (
        <Finished
          dispatch={dispatch}
          correctArr={correctArr}
          answerArr={answerArr}
        />
      )}
    </>
  );
}

export default App;

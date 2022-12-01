import FlashCards from './components/FlashCards';
import Counter from './components/Counter';
import Logo from './components/Logo';
import { useState } from 'react';
import Login from './components/Login';

function App() {
  const [questionsAnswered, setQuestionsAnswered] = useState(0); // number of questions answered
  const [orderOfQuestions, setOrderOfQuestions] = useState([]);
  const [startApplication, setStartApplication] = useState(false);

  return (
    <>
      {startApplication &&
        <div>
          <Logo />
          <FlashCards
            setQuestionsAnswered={setQuestionsAnswered}
            questionsAnswered={questionsAnswered}
            orderOfQuestions={orderOfQuestions}
            setOrderOfQuestions={setOrderOfQuestions}
          />
          <Counter
            questionsAnswered={questionsAnswered}
            orderOfQuestions={orderOfQuestions}
          />
        </div>
      }
      {!startApplication &&
        <Login setStartApplication={setStartApplication} />
      }
    </>
  );
}

export default App;

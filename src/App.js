import FlashCards from './components/FlashCards';
import Counter from './components/Counter';
import Logo from './components/Logo';
import { useState } from 'react';

function App() {
  const [questionsAnswered, setQuestionsAnswered] = useState(0); // number of questions answered
  const [orderOfQuestions, setOrderOfQuestions] = useState([]);

  return (
    <>
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
    </>
  );
}

export default App;

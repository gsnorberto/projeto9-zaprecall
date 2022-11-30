import FlashCards from './components/FlashCards';
import Counter from './components/Counter'; 
import Logo from './components/Logo';
import { useState } from 'react';

function App() {
  const [questionsAnswered, setQuestionsAnswered] = useState(0); // number of questions answered
  return (
    <>
      <Logo />
      <FlashCards setQuestionsAnswered={setQuestionsAnswered} questionsAnswered={questionsAnswered}/>
      <Counter questionsAnswered={questionsAnswered} />
    </>
  );
}

export default App;

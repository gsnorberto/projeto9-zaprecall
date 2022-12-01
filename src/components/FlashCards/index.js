import { useState } from "react";
import { Container, FlashCardsArea } from "./style"
import FlashCard from "./FlashCard";
import cards from "../../cards";

export default ({questionsAnswered, setQuestionsAnswered, orderOfQuestions, setOrderOfQuestions}) => {
    const [turnedQuestion, setTurnedQuestion] = useState(0); // 0 = no question turned

    return (
        <FlashCardsArea>
            <Container >
                {cards.map((card, i) => (
                    <FlashCard key={i}
                        question={card.question}
                        answer={card.answer}
                        number={i}
                        turnedQuestion={turnedQuestion}
                        setTurnedQuestion={setTurnedQuestion}
                        questionsAnswered={questionsAnswered}
                        setQuestionsAnswered={setQuestionsAnswered}
                        orderOfQuestions={orderOfQuestions}
                        setOrderOfQuestions={setOrderOfQuestions}
                    />
                ))}
            </Container>
        </FlashCardsArea>
    )
}
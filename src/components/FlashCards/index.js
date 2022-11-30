import { useState } from "react";
import { Container, FlashCardsArea } from "./style"
import FlashCard from "./FlashCard";
import cards from "../../cards";

export default () => {
    const [cardState, setCardState] = useState('answer'); // initial, question or answer

    return (
        <FlashCardsArea>
            <Container >
                {cards.map((card, i) => (
                    <FlashCard key={i}
                        question={card.question}
                        answer={card.answer}
                        number={i}
                        cardState={cardState}
                    />
                ))}
            </Container>
        </FlashCardsArea>
    )
}
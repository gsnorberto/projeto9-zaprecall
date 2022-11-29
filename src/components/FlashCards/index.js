import { Container, FlashCardsArea } from "./style"
import FlashCard from "./FlashCard";
import cards from "../../cards";

export default () => {
    return(
        <FlashCardsArea>
            <Container >
                {cards.map(card => <FlashCard question={card.question} />)}
            </Container>
        </FlashCardsArea>
    )
}
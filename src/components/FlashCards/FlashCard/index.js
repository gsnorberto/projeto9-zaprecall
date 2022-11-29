import { Button, FlashCardArea, Title } from "./style"


export default ({ question }) => {
    return(
        <FlashCardArea>
            <Title>{question}</Title>
            <Button src="./assets/img/seta_play.png" />
        </FlashCardArea>
    )
}
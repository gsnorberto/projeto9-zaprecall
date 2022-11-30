import { CounterArea, Description } from "./style"
import cards from "../../cards";

export default ({questionsAnswered}) => {
    return(
        <CounterArea>
            <Description>{questionsAnswered}/{cards.length} CONCLUÍDOS</Description>
        </CounterArea>
    )
}
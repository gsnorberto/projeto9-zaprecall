import { CounterArea, Description, ResponseIcons, Icons } from "./style"
import cards from "../../cards";

export default ({questionsAnswered, orderOfQuestions}) => {
    return(
        <CounterArea>
            <Description>{questionsAnswered}/{cards.length} CONCLUÍDOS</Description>
            {orderOfQuestions && 
                <ResponseIcons>
                    {orderOfQuestions.map((icon, i) => (
                        <Icons key={i} src={`./assets/img/${icon}`} />
                    ))}
                </ResponseIcons>
            }
        </CounterArea>
    )
}
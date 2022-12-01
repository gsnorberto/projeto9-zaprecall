import { CounterArea, Description, ResponseIcons, Icons, Response, Title, Icon, Text, Desc } from "./style"
import cards from "../../cards";

export default ({questionsAnswered, orderOfQuestions}) => {

    function message(){
        console.log(orderOfQuestions.includes('icone_erro.png'));
        if(orderOfQuestions.includes('icone_erro.png')){
            return false;
        }
        return true;
    }

    return(
        <CounterArea>
            {orderOfQuestions.length === cards.length &&
                <Response>
                    <Title>
                        <Icon src={message() ? './assets/img/party.png' : './assets/img/sad.png'} />
                        <Text>
                            {message() ? 'Parabéns!' : 'Putz...'}
                        </Text>
                    </Title>
                    <Desc>
                        {message() ? 'Você não esqueceu de nenhum flashcard!' : 'Ainda faltam alguns... Mas não desanime!'}
                    </Desc>
                </Response>
            }

            <Description>{questionsAnswered}/{cards.length} CONCLUÍDOS</Description>

            {orderOfQuestions.length !== 0 && 
                <ResponseIcons className="testando...">
                    {orderOfQuestions.map((icon, i) => (
                        <Icons key={i} src={`./assets/img/${icon}`} />
                    ))}
                </ResponseIcons>
            }
        </CounterArea>
    )
}
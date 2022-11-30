import { Button,  Title, InitialState, QuestionState, AnswerState } from "./style"


export default ({ number, question, answer, cardState }) => {
    return(
        <>
            {cardState == 'initial' ?
                <InitialState>
                    <div className="title">Questão {number+1}</div>
                    <img className="button" src="./assets/img/seta_play.png" />
                </InitialState> : ''
            }
            {cardState == 'question' ?
                <QuestionState>
                    <div className="title">{question}</div>
                    <img className="button" src="./assets/img/seta_virar.png" alt="" />
                </QuestionState> : ''
            }
            {cardState == 'answer' ?
                <AnswerState>
                    <div className="title">{answer}</div>
                    <div className="buttonsArea">
                        <button className="button red">Não lembrei</button>
                        <button className="button yellow">Quase não lembrei</button>
                        <button className="button green">Zap</button>
                    </div>
                </AnswerState> : ''
            }
        </>
    )
}
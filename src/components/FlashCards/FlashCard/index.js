import { InitialState, QuestionState, AnswerState, CardContent } from "./style"

import { useState } from "react";

export default ({ number, question, answer, turnedQuestion, setTurnedQuestion }) => {
    const [cardResponse, setCardResponse] = useState(false); //question or answer
    return (
        <>
            {number + 1 == turnedQuestion ?
                <CardContent>
                    {/* Question */}
                    <QuestionState style={{ display: cardResponse ? 'none' : 'flex' }} >
                        <div className="title">{question}</div>
                        <img onClick={() => setCardResponse(true)} className="button" src="./assets/img/seta_virar.png" alt="" />
                    </QuestionState>

                    {/* Response */}
                    <AnswerState style={{ display: cardResponse ? 'flex' : 'none' }}>
                        <div className="title">{answer}</div>
                        <div className="buttonsArea">
                            <button className="button red">Não lembrei</button>
                            <button className="button yellow">Quase não lembrei</button>
                            <button className="button green">Zap</button>
                        </div>
                    </AnswerState>
                </CardContent>
                :
                <InitialState onClick={() => setTurnedQuestion(number + 1)}>
                    <div className="title">Questão {number + 1}</div>
                    <img className="button" src="./assets/img/seta_play.png" />
                </InitialState>
            }



        </>
    )
}
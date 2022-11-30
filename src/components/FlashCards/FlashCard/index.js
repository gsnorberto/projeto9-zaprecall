import { InitialState, QuestionState, AnswerState, CardContent } from "./style"

import { useState } from "react";

export default ({ number, question, answer, turnedQuestion, setTurnedQuestion, setQuestionsAnswered, questionsAnswered }) => {
    const [cardResponse, setCardResponse] = useState(false); //question or answer
    const [cardColor, setCardColor] = useState(''); //question or answer
    const [iconName, seticonName] = useState('seta_play.png');

    function disableCard  (color) {
        setQuestionsAnswered(questionsAnswered+1);
        setTurnedQuestion(0);
        setCardColor(color);
        if(color == 'redAnswer') seticonName('icone_erro.png');
        else if(color == 'yellowAnswer') seticonName('icone_quase.png');
        else if(color == 'greenAnswer') seticonName('icone_certo.png');
    }
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
                            <button onClick={() => disableCard("redAnswer")} className="button red">Não lembrei</button>
                            <button onClick={() => disableCard("yellowAnswer")} className="button yellow">Quase não lembrei</button>
                            <button onClick={() => disableCard("greenAnswer")} className="button green">Zap</button>
                        </div>
                    </AnswerState>
                </CardContent>
                :
                <InitialState className={cardColor} onClick={() => cardColor == '' ? setTurnedQuestion(number + 1): ''}>
                    <div className="title">Questão {number + 1}</div>
                    <img className="button" src={`./assets/img/${iconName}`} />
                </InitialState>
            }



        </>
    )
}
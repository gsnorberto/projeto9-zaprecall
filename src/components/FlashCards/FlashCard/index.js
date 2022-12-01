import { InitialState, QuestionState, AnswerState, CardContent } from "./style"

import { useState } from "react";

export default ({ number, question, answer, turnedQuestion, setTurnedQuestion, setQuestionsAnswered, questionsAnswered, orderOfQuestions, setOrderOfQuestions }) => {
    const [cardResponse, setCardResponse] = useState(false); //question or answer
    const [cardColor, setCardColor] = useState(''); //question or answer
    const [iconName, seticonName] = useState('seta_play.png');

    function disableCard  (color) {
        setQuestionsAnswered(questionsAnswered+1);
        setTurnedQuestion(0);
        setCardColor(color);
        
        if(color == 'redAnswer'){
            seticonName('icone_erro.png');
            setOrderOfQuestions(orderOfQuestions => [...orderOfQuestions, 'icone_erro.png']);
        }
        else if(color == 'yellowAnswer'){
            seticonName('icone_quase.png');
            setOrderOfQuestions(orderOfQuestions => [...orderOfQuestions, 'icone_quase.png']);
        }
        else if(color == 'greenAnswer'){
            seticonName('icone_certo.png');
            setOrderOfQuestions(orderOfQuestions => [...orderOfQuestions, 'icone_certo.png']);
        }
    }
    return (
        <>
            {number + 1 == turnedQuestion ?
                <CardContent>
                    {/* Question */}
                    <QuestionState style={{ display: cardResponse ? 'none' : 'flex' }} >
                        <div data-test="flashcard-text" className="title">{question}</div>
                        <img  data-test="turn-btn" onClick={() => setCardResponse(true)} className="button" src="./assets/img/seta_virar.png" alt="" />
                    </QuestionState>

                    {/* Response */}
                    <AnswerState style={{ display: cardResponse ? 'flex' : 'none' }}>
                        <div data-test="flashcard-text" className="title">{answer}</div>
                        <div className="buttonsArea">
                            <button  data-test="no-btn" onClick={() => disableCard("redAnswer")} className="button red">Não lembrei</button>
                            <button data-test="partial-btn" onClick={() => disableCard("yellowAnswer")} className="button yellow">Quase não lembrei</button>
                            <button data-test="zap-btn" onClick={() => disableCard("greenAnswer")} className="button green">Zap</button>
                        </div>
                    </AnswerState>
                </CardContent>
                :
                <InitialState data-test="flashcard" className={cardColor} >
                    <div data-test="flashcard-text" className="title">Pergunta {number + 1}</div>
                    
                    {iconName == 'seta_play.png' &&
                        <img  data-test="play-btn" onClick={() => cardColor == '' ? setTurnedQuestion(number + 1): ''} className="button" src={`./assets/img/seta_play.png`} />
                    }
                    {iconName == 'icone_erro.png' &&
                        <img  data-test="no-icon" onClick={() => cardColor == '' ? setTurnedQuestion(number + 1): ''} className="button" src={`./assets/img/icone_erro.png`} />
                    }
                    {iconName == 'icone_quase.png' &&
                        <img  data-test="partial-icon" onClick={() => cardColor == '' ? setTurnedQuestion(number + 1): ''} className="button" src={`./assets/img/icone_quase.png`} />
                    }
                    {iconName == 'icone_certo.png' &&
                        <img  data-test="zap-icon" onClick={() => cardColor == '' ? setTurnedQuestion(number + 1): ''} className="button" src={`./assets/img/icone_certo.png`} />
                    }
                    
                </InitialState>
            }



        </>
    )
}
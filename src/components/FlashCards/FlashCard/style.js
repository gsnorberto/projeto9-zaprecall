import styled from "styled-components";

export const InitialState = styled.div`
    width: 80%;
    height: 65px;
    background-color: #FFFFFF;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    margin-bottom: 25px;
    cursor: pointer;

    .title{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &.greenAnswer{
        color: #2FBE34;
        text-decoration: line-through;
        cursor: default;
    }

    &.redAnswer{
        color: #FF3030;
        text-decoration: line-through;
        cursor: default;
    }

    &.yellowAnswer{
        color: #FF922E;
        text-decoration: line-through;
        cursor: default;
    }
`

export const CardContent = styled.div`

`

export const QuestionState = styled.div`
    position: relative;
    width: 80%;
    height: 130px;
    background-color: #FFFFD4;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px 30px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    margin-bottom: 25px;

    .title{
        font-weight: 400;
        color: #333333;
        font-size: 18px;
    }

    img.button{
        position: absolute;
        bottom: 15px;
        right: 15px;

        &:hover{
            cursor: pointer;
        }
    }
`
export const AnswerState = styled.div`
    width: 80%;
    height: auto;
    background-color: #FFFFD4;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px 30px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;

    .title{
        font-weight: 400;
        color: #333333;
        font-size: 18px;
    }

    .buttonsArea{
        margin-top:  15px;
        .button{
            border: 0;
            padding: 10px;
            border-radius: 5px;
            margin: 5px 5px;
            cursor: pointer;
            color: #FFFFFF;

            &:hover{
                opacity: 0.8;
            }
        }

        .red{
            background-color: #FF3030;
        }
        .yellow{
            background-color: #FF922E;
        }
        .green{
            background-color: #2FBE34;
        }
    }
`

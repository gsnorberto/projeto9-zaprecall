import styled from "styled-components";

export const LoginArea = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FB6B6B;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Logo = styled.img`
    
`
export const Title = styled.div`
    margin: 40px 0 30px 0;
    font-family: 'Righteous';
    font-size: 36px;
    color: #FFFFFF;
`
export const Button = styled.button`
    border: 0;
    width: 246px;
    height: 54px;
    border-radius: 5px;
    font-family: 'Recursive';
    color: #D70900;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    &:hover{
        opacity: 0.8;
    }
`
import styled from "styled-components";

export const FlashCardsArea = styled.div`
    padding-top:  150px;
    padding-bottom: 70px;
    background-color: #FB6B6B;
    width: 100vw;
    height: 100vh;
    
`

export const Container = styled.div`
    font-family: 'Recursive';
    max-width: 1170px;
    height: 100%;
    margin: 0 auto;
    color: #333333;
    font-size: 16px;
    font-weight: Bold;
    overflow-y: scroll;
    overflow-x: hidden;
    
    &::-webkit-scrollbar {
        width: 12px;               /* width of the entire scrollbar */
    }
    &::-webkit-scrollbar-track {
        background: #FB6B6E;        /* color of the tracking area */
    }

    &::-webkit-scrollbar-thumb {
        background-color: #FFFFFF;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        border: 3px solid #FB6B6E;  /* creates padding around scroll thumb */
        
    }
`
import { LoginArea, Logo, Title, Button } from "./styled"

export default ({setStartApplication}) => {
    return(
        <LoginArea>
            <Logo src="./assets/img/logo.png"/>
            <Title>ZapRecall</Title>
            <Button data-test="start-btn" onClick={() => setStartApplication(true)}>Iniciar Recall!</Button>
        </LoginArea>
    )
}
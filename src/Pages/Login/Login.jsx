import React, {useContext, useState} from "react";
import Modal from "./Modal";
import {
    ModalContainer,
    Header,
    Message,
    CloseBtn,
    CloseX,
    LoginForm,
    InputLogin, InputTxt, SubmitLogin, Warn
} from "./Login.styles";
import {useNavigate} from "react-router-dom";

interface  LoginModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
    header: String;
}

const Login: React.FC<LoginModalWrapperProps> = ({onBackdropClick, isModalVisible, header, message}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [warn, setWarn] = useState("")
    const [uid, setUid] = useState(localStorage.getItem("id"));

    const navigate = useNavigate();

    const submitLogin = async () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({email: email, password:password}),
        }
        /*
        const response = await fetch("http://localhost:8000/login", requestOptions);
        const data = await response.json();
        const id = data.id
        const msg = data.message

        if (!response.ok) {
            console.log("Something went wrong :(");
        } else if (id !== undefined){
            setWarn("")
            setUid(id)
            localStorage.setItem("id", id)
            navigate('/profile');
            console.log(id);
        } else{
            setWarn(msg)
        }
    */
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        submitLogin()

    }


    if(!isModalVisible){
        return null
    }

    return (<Modal onBackdropClick={onBackdropClick}>
        <ModalContainer>
            <CloseBtn onClick={onBackdropClick}>
                <CloseX />
            </CloseBtn>
            <Header>Inicia Sesión</Header>
            <Message>¡Bienvenido!</Message>
            <LoginForm onSubmit={handleSubmit}>
                <InputTxt><InputLogin type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} required/></InputTxt>
                <InputTxt><InputLogin type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required/></InputTxt>
                <InputTxt><SubmitLogin>Ir al portal</SubmitLogin></InputTxt>
            </LoginForm>
            <Warn>{warn}</Warn>
        </ModalContainer>
    </Modal>);
}

export default Login
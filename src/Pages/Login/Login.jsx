import React, {useContext, useState} from "react";
import {Navigate, useLocation} from "react-router-dom";

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
import RegAndAuthService from "../../services/reg_and_auth.service";

interface  LoginModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
    header: String;
}

const Login: React.FC<LoginModalWrapperProps> = ({onBackdropClick, isModalVisible, header, message}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [warn, setWarn] = useState("");
    const [logged, setLogged] = useState(false);
    const [uid, setUid] = useState(localStorage.getItem("id"));


    const navigate = useNavigate();

    const commitLogin = ({name, email}) => {
        console.log(name);
        localStorage.setItem("user", email);
        localStorage.setItem("name", name);
        localStorage.setItem("logged", true);
        setLogged(true);
    }

    const verifyLogin = (login) => {
        if (login) {
            console.log(login);
            RegAndAuthService.getUser(commitLogin);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        RegAndAuthService.login(email, password, verifyLogin);

    }


    if(!isModalVisible){
        return null
    }

    return (<Modal onBackdropClick={onBackdropClick}>
        {logged && <Navigate replace to="/home" />}
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
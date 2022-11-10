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


    const verifyLogin = (login) => {
        console.log("verify login: " + login);
        if (login) {//el rest obtubo una respuesta en login
            console.log("existe el login??:");
            console.log(login);
            localStorage.setItem('user',JSON.stringify(login.user));
            localStorage.setItem("logged", true);
            localStorage.setItem("token", login.token);
            setLogged(true);
            RegAndAuthService.getUser(login.user, userGot);

        }
    }

    const userGot = (user) => {
        console.log("user got: ");
        console.log(user);
        localStorage.setItem("user_names", user.names);
    }


    const handleSubmit = (e) => {
        //print a message to the console
        console.log("The form was submitted with the following data:");
        console.log("Email: " + email);
        console.log("Password: " + password);
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
                <InputTxt><InputLogin type="text" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} required/></InputTxt>
                <InputTxt><InputLogin type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required/></InputTxt>
                <InputTxt><SubmitLogin>Ir al portal</SubmitLogin></InputTxt>
            </LoginForm>
            <Warn>{warn}</Warn>
        </ModalContainer>
    </Modal>);
}

export default Login
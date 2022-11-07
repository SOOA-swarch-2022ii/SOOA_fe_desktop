import React, {useEffect, useState} from "react";
import './App.css'
import Login from "./Pages/Login/Login";
import Logo from "./assets/sooa_logo_2.png"

const App = () => {
    const [message, setMessage] = useState("")
    const [isModalVisible, setIsModalVisible] = useState(false)


    const toggleModal = () => {
        setIsModalVisible(wasModalVisible => !wasModalVisible)
    }

    const getLandingPage = async () =>{
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    }

    useEffect(() => {
        getLandingPage();
    }, [])
        return (
            <section className="showcase">
                <div className="background"></div>

                <div className="content">
                    <img className="logo" src={Logo} alt="image"/>
                    <h1>Sistema Ordenado de Operaciones Académicas</h1>
                    <a className="btn" onClick={toggleModal}>Iniciar sesión</a>
                    <Login header="Login" message="Welcome!" isModalVisible={isModalVisible} onBackdropClick={toggleModal} />
                </div>
            </section>

        );
}

export default App;

import React from "react";
import Logo from "../../assets/sooa_logo_2.png";
import {NavLink, useNavigate} from 'react-router-dom'
import './Header.css';
import RegAndAuthService from "../../services/reg_and_auth.service";

const Header = ({isLogged}) =>{
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
        RegAndAuthService.logout()
        localStorage.clear();
    };

    function refreshPage() {
        window.location.reload(false);
    }

    return(
        <div className="header-nav">
            <div className="container">

                <div onClick={refreshPage} className="brand">
                    <img className="navLogo" src={Logo} alt="image"/>
                </div>

                <div>
                    <a onClick={handleClick} className="logout" >cerrar sesión</a>
                </div>
            </div>
        </div>
    )
}

export default Header;
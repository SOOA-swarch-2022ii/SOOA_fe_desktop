import React from "react";
import Logo from "../../assets/sooa_logo_2.png";
import {NavLink, useNavigate} from 'react-router-dom'
import './Header.css';

const Header = ({isLogged}) =>{
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
        isLogged(false)
    };
    return(
        <div className="header-nav">
            <div className="container">

                <div onClick={handleClick} className="brand">
                    <img className="navLogo" src={Logo} alt="image"/>
                </div>

                <div>
                    <a className="logout" >cerrar sesión</a>
                </div>
            </div>
        </div>
    )
}

export default Header;
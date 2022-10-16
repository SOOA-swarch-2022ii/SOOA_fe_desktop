import React from "react";
import Logo from "../../assets/sooa_logo_2.png";
import {NavLink, useNavigate} from 'react-router-dom'
import './Header.less';

const Header = ({isLogged}) =>{
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
        isLogged(false)
    };
    return(
        <div id="header-nav">
            <div class="container">

                <div class="brand">
                    <a href="/"><h1>Ghostlab</h1></a>
                </div>

                <a href="#menu" class="menu-link">
                    <span class="bar1"></span>
                    <span class="bar2"></span>
                    <span class="bar3"></span>
                </a>

                <nav id="menu" role="navigation">
                    <ul>
                        <li><a >About</a></li>
                        <li><a >Products</a></li>
                        <li><a >Services</a></li>
                        <li><a >Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;
import React from "react";
import Logo from "../../assets/sooa_logo_2.png";
import {NavLink, useNavigate} from 'react-router-dom'
import './Sidebar.css';

const Sidebar = ({isLogged}) =>{
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
        isLogged(false)
    };
    return(
        <div className="sidebar">
            <div className="items">
                <div>
                    Incribir asignaturas
                </div>
                <div>
                    Historia académica
                </div>
                <div>
                    Buscador de cursos
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
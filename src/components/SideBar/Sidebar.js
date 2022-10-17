import React from "react";
import  iHome from '../../assets/home.svg'
import iPencil from '../../assets/pencil.svg'
import iRecord from '../../assets/record.svg'
import iUser from '../../assets/user.png'
import iSearch from '../../assets/search.svg'
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
                <a className="line">
                    <img src={iUser} className="user" alt="user"/>
                    Diego Alejandro Irreño Torres
                </a>
                <a className="line">
                    <img src={iHome} className="icon" alt="home"/>
                    Inicio
                </a>
                <a className="line">
                    <img src={iPencil} className="icon" alt="pencil"/>
                    Incribir asignaturas
                </a>
                <a className="line">
                    <img src={iRecord} className="icon" alt="record"/>
                    Historia académica
                </a>
                <a className="line">
                    <img src={iSearch} className="icon" alt="search"/>
                    Buscador de cursos
                </a>
            </div>
        </div>
    )
}

export default Sidebar;
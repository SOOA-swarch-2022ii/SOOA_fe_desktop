import React from "react";
import {NavLink, useNavigate} from 'react-router-dom'
import './CourseInfo.css';

const CourseInfo = (/*aqui deberíamos , con su id, carrera y eso para facilitar la busqueda*/ ) =>{
    const navigate = useNavigate();

    return(
        <div className="courses-finder-main">
            <lu className="finder-filters">
                <li>uno</li>
                <li>dos</li>
                <li>tres</li>
                <li>cuatro</li>
                <li>cinco</li>
                <li>seis</li>
            </lu>
             <h1>Buscador de cursos</h1>
        </div>
    )
}

export default CourseInfo;
import { React, useRef } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client';
import './CoursesFinder.css';


const CoursesFinder = ({props}) => {

    
    const inputRef = useRef(null);
    const navigate = useNavigate();
    

    function requestGraphQL() {//llama a graphql pero también se encarga de organizar las materias que encontró

        console.log("this was clicked");
    };
    return (
        <div className="courses-finder-main">
            <ul className="finder-filters">
                <li><label>
                    Nombre:
                    <input ref={inputRef} type="text" id="finder-name-field" name="name" />
                </label></li>
                <li><label>
                    Código:
                    <input type="text" name="code" />
                </label></li>
                <li>tipologia</li>
                <li>créditos</li>
                <li>Horario</li>
                <li>Facultad</li>
                <li>Departamento</li>
                <li>Carrera</li>
                <li><button className="finder-search-btn" onClick={requestGraphQL}>Buscar</button> </li>
            </ul>
            <h1>Buscador de cursooooos</h1>
        </div>
    )
}

export default CoursesFinder;
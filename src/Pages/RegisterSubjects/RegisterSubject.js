import React, {useRef} from "react";
import "./RegisterSubject.css"

const RegisterSubject = () => {

    const inputRef = useRef(null);

    return (
        <div className="reg-sub">
            <h1>Inscripción de asignaturas</h1>

            <div className="register-container">
                <label>
                    Buscar asignatura:
                    <input ref={inputRef} type="text" id="finder-name-field" placeholder="Nombre de asignatura" name="name"/>
                </label>
                <button className="finder-search-btn" onClick={() =>{}}>Buscar</button>
            </div>

            <div className="flex-container">
                <div className="course-list-container">
                    <p>Asignaturas:</p>
                    <ul className="course-list">
                        <li>
                            <div className="course-container">
                                <p>Nombre de asignatura: </p>
                                <p>Creditos: </p>
                                <p>Tipo: </p>
                            </div>
                        </li>
                        <li>
                            <div className="course-container">
                                <p>Nombre de asignatura: </p>
                                <p>Creditos: </p>
                                <p>Tipo: </p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="group-list-container">
                    <p>Grupos:</p>
                    <ul className="group-list">
                        <li>
                            <div className="course-container">
                                <p>Profesor: </p>
                                <p>Grupo: </p>
                                <p>Horario: </p>
                                <button className="finder-search-btn" onClick={() =>{}}>Inscribir</button>
                            </div>
                        </li>
                        <li>
                            <div className="course-container">
                                <p>Profesor: </p>
                                <p>Grupo: </p>
                                <p>Horario: </p>
                                <button className="finder-search-btn" onClick={() =>{}}>Inscribir</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default RegisterSubject
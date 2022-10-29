import React, {useRef, useState} from "react";
import "./RegisterSubject.css"
import RegisterSubjectsService from "../../services/register_subjects.service";
import SubjectCourseService from "../../services/subject_course.service";

const RegisterSubject = () => {

    const inputRef = useRef(null);
    const [subject, setSubject] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    const registerSubject = () => {
        setSuccessMessage('Materia inscrita correctamente')
        setTimeout(() => {
            setSuccessMessage(null)
            setSubject(null);
        }, 3000)
    }

    const respues = (response) => {
        console.log(response, 'response');
        setSubject(response);
    }

    const search = () => {
        SubjectCourseService.getSubjectByCode(inputRef.current.value, respues)
        setSuccessMessage(null);
    }


    return (
        <div className="reg-sub">
            <h1>Inscripción de asignaturas</h1>

            <div className="register-container">
                <label>
                    Buscar asignatura:
                    <input ref={inputRef} type="text" id="finder-name-field" placeholder="Nombre de asignatura" name="name"/>
                </label>
                <button className="finder-search-btn" onClick={() =>{search()}}>Buscar</button>
            </div>

            {!!successMessage && <div className="success-message">{successMessage}</div> }

            {(subject && !successMessage) &&
            <div className="flex-container">
                <div className="course-list-container">
                     <p>Asignatura:</p>
                    <ul className="course-list">
                         <li>
                            <div className="course-container">
                                <p>Nombre de asignatura: {subject?.name}</p>
                                <p>Creditos: {subject?.credits}</p>
                                <p>Nivel academico: {subject?.academic_level}</p>
                                <p>Unidad basica academica: {subject?.basic_academic_unit}</p>
                                <p>Facultad: {subject?.faculty}</p>
                                <p>Codigo: {subject?.code}</p>
                                <p>Departamento: {subject?.department}</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="group-list-container">
                    <p>Grupos:</p>
                    <ul className="group-list">
                        <li>
                            <div className="course-container">
                                <p>Profesor: Humberto Rojas</p>
                                <p>Grupo: 1 </p>
                                <p>Horario: Lunes - Miercoles 7-9 </p>
                                <button className="finder-search-btn" onClick={() =>{registerSubject()}}>Inscribir</button>
                            </div>
                        </li>
                        <li>
                            <div className="course-container">
                                <p>Profesor: Zulima </p>
                                <p>Grupo: 2 </p>
                                <p>Horario: Martes - Jueves  11 - 1</p>
                                <button className="finder-search-btn" onClick={() =>{registerSubject()}}>Inscribir</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>}
        </div>
    );
}

export default RegisterSubject
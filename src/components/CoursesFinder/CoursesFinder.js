import { React, useRef ,useState} from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client';
import './CoursesFinder.css';
import SubjectSearch from "./SubjectSearch";
import SubjectCourseService from "../../services/subject_course.service";


const CoursesFinder = ({props}) => {
    const [text, setText] = useState('1000003-B');

    const handleChange = event => {
        setText(event.target.value);

        console.log('value is:', event.target.value);
    };

    const handleClick = event => {
        event.preventDefault();

        // 👇️ value of input field
        console.log(SubjectCourseService.findSubjectByCode(text,));
    };

    return (
        <div className="courses-finder-main">
            <ul className="finder-filters">
                <li><label>
                    Codigo:
                    <input type="text" name="name" value={text} onChange={handleChange}/>
                </label></li>
                <li><label>
                    Nombre:
                    <input type="text" name="code" />
                </label></li>
                <li>
                    <SubjectSearch code={text}/>
                </li>
                <li><button className="finder-search-btn" onClick={handleClick}>Buscar</button> </li>

            </ul>
            <h1>Buscador de cursos</h1>

        </div>
    )
}

export default CoursesFinder;
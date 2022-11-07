import React, {Component} from "react";
import SubjectCourseService from "../../services/subject_course.service";

class SubjectSearch extends Component {
    constructor(props) {

        super(props);

        this.state = {
            _id: "",
            academic_level: "",
            basic_academic_unit: "",
            faculty: "",
            level: "",
            vigency: "",
            campus: "",
            name: "",
            content: "",
            credits: "",
            department: "",
        };

        this.setInfoSubject = this.setInfoSubject.bind(this);
    }

    setInfoSubject({_id, academic_level, basic_academic_unit, faculty, level, vigency, campus, name, code, content
                       ,credits, department}) {

        this.setState({
            _id,
            academic_level,
            basic_academic_unit,
            faculty,
            level,
            vigency,
            campus,
            name,
            code,
            content,
            credits,
            department,
        })
    }

    render() {

        return(
            <div>
                <li>Nombre: {this.state.name}</li>
                <li>Código: {this.state.code}</li>
                <li>Nivel académico: {this.state.academic_level}</li>
                <li>Unidad académica: {this.state.basic_academic_unit}</li>
                <li>Contenido: {this.state.content}</li>
                <li>Créditos: {this.state.credits}</li>
                <li>Departamento: {this.state.department}</li>
            </div>

        )
    }

    componentDidMount() {
        SubjectCourseService.findSubjectByCode(this.props.code,this.setInfoSubject)
    }

}
export default SubjectSearch
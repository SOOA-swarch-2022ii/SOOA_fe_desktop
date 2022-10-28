import React, {Component} from "react";
import SubjectCourseService from "../../services/subject_course.service";

class Subject extends Component {
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
            content,
            credits,
            department,
        })
    }

    render() {
        return(
            <h2>{this.state.name}</h2>
        )
    }

    componentDidMount() {
        SubjectCourseService.getSubjectByCode(this.props.code,this.setInfoSubject)
    }

}
export default Subject
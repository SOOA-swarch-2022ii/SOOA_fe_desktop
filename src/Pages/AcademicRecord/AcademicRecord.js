import React, {Component, useState} from "react";
import "./AcademicRecord.css"
import RegAndAuthService from "../../services/reg_and_auth.service";
import AcademicRecordService from "../../services/academic_record.service";
import SubjectCourseService from "../../services/subject_course.service";
import Subject from "../../components/CoursesFinder/Subject";

let color
let estado
const result = JSON.parse(localStorage.getItem('user'));
class AcademicRecord extends Component {
    constructor(props) {

        super(props);

        this.state = {
            id: "",
            subjects_pending: "",
            subjects_record: "",
            papa: "",
            papi: "",
            status: "",
            faculty: "",
            campus: "",
            career: "",
        };

        this.setInfoAcademicRecord = this.setInfoAcademicRecord.bind(this);
    }

    setInfoAcademicRecord({id, subjects_pending ,subjects_record ,papa ,papi ,status ,faculty
                    ,campus
                    ,career}) {

        this.setState({
            id,
            subjects_pending,
            subjects_record,
            papa,
            papi,
            status,
            faculty,
            campus,
            career,
        })
    }

    componentDidMount() {
        AcademicRecordService.getAcademicRecord(result,this.setInfoAcademicRecord);
    }

    render() {
        if (this.state.status === true){
            estado = "Abierto"
            color = "green"
        }else {
            estado = "Cerrado"
            color = "red"
        }

        let subjects_record_list = []
        if (this.state.subjects_record.indexOf(',') > -1) {
            subjects_record_list = this.state.subjects_record.split(',')
        } else {
            subjects_record_list[0] = this.state.subjects_record
        }
        const listItems = subjects_record_list.map((subject) =>
            <span className="srt">{subject}
            <Subject code="1000003-B" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span> {this.state.papa}</span>
            </span>
        )
        return (
            <div className="record">
                <div>
                    <h1>Historia Académica</h1>
                    <h2>{this.state.career}</h2>
                    <b>Estado: {estado} <span style={{color}}>●</span> </b>
                    <br/>
                    <b>Facultad de {this.state.faculty}, {this.state.campus}</b>
                </div>
                <div className="r2">
                    <div className="sr">
                        <h2 className="srt">Materias cursadas</h2>
                        <br/>
                        <h2 className="srt">{listItems}</h2>
                    </div>
                    <div className="sr">
                        <h2 className="srt">Materias pendientes</h2>
                        <h2 className="srt">{this.state.subjects_pending}</h2>
                    </div>
                    <div className="small">
                        <h2 className="sm">PAPA</h2>
                        <h2 className="sm">{this.state.papa}</h2>
                    </div>
                    <div className="small">
                        <h2 className="sm">PAPI</h2>
                        <h2 className="sm">{this.state.papi}</h2>
                    </div>
                </div>

            </div>
        );
    }

}
export default AcademicRecord
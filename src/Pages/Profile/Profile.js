import React, {Component, useState} from "react";
import "./Profile.css"
import SVG from 'react-inlinesvg';
import RegAndAuthService from "../../services/reg_and_auth.service";
import AcademicRecordService from "../../services/academic_record.service";

const result = JSON.parse(localStorage.getItem('user'));
class Profile extends Component {

    constructor(props) {

        super(props);

        this.state = {
            id: "",
            username: "",
            birthdate: "",
            names: "",
            last_names: "",
            role: "",
            email: "",
            phone: "",
        };

        this.setInfoUser = this.setInfoUser.bind(this);
    }

    setInfoUser({id, username ,birthdate ,names ,last_names ,role ,email
                    ,phone}) {

        this.setState({
            id,
            username,
            birthdate,
            names,
            last_names,
            role,
            email,
            phone,
        })
    }

    componentDidMount() {
        RegAndAuthService.findUser(result,this.setInfoUser);
    }

    render() {
        const multiavatar = require('@multiavatar/multiavatar')
        let avatar = multiavatar(this.state.username)

        return (
            <div className="main-container-profile">
                <h1 className="title">Perfil {this.state.role.toLowerCase()}</h1>
                <div className="container-profile">
                        <div className="img-column">
                            <SVG height="200" width="200" src={avatar} />
                        </div>
                        <div className="text-column">
                                <div className="line-txt"><b>Nombre: <span
                                    className="text-secondary">{this.state.names}</span></b></div>
                                <div className="line-txt"><b>Apellidos: <span
                                    className="text-secondary">{this.state.last_names}</span></b></div>
                                <div className="line-txt py-2"><b>Fecha de nacimiento: <span
                                    className="text-secondary">{this.state.birthdate}</span></b>
                                </div>
                                <div className="line-txt"><b>Telefono: <span
                                    className="text-secondary">{this.state.phone}</span></b></div>
                                <div className="line-txt"><b>Email: <span
                                    className="text-secondary">{this.state.email}</span></b></div>
                                <div className="line-txt">
                                    <b>Dirección: <span className="text-secondary">{this.state.address}</span></b>
                                </div>
                                <div className="line-txt"><b>Numero de identificación: <span
                                    className="text-secondary">{this.state.id}</span></b></div>
                        </div>
                </div>
            </div>
        );
    }




}

export default Profile
import React, {Component, useState} from "react";
import "./Profile.css"
import SVG from 'react-inlinesvg';
import RegAndAuthService from "../../services/reg_and_auth.service";
import AcademicRecordService from "../../services/academic_record.service";

class Profile extends Component {

    constructor(props) {

        super(props);

        this.state = {
            role: "",
            name: "",
            email: "",
            phone: "",
            address: "",
            nationality: "",
            dateOfBirth: "",
            identificationNumber: "",
        };

        this.setInfoUser = this.setInfoUser.bind(this);
    }

    setInfoUser({name, role ,phone ,address ,nationality ,sex ,dateOfBirth
                    ,identificationNumber
                    ,email}) {

        this.setState({
            name,
            role,
            phone,
            address,
            nationality,
            sex,
            dateOfBirth,
            identificationNumber,
            email,
        })
    }

    render() {
        const multiavatar = require('@multiavatar/multiavatar')
        let avatar = multiavatar(this.state.name)

        return (
            <div className="main-container-profile">
                <h1 className="title">Perfil {this.state.role.toLowerCase()}</h1>
                <div className="container-profile">
                        <div className="img-column">
                            <SVG height="200" width="200" src={avatar} />
                        </div>
                        <div className="text-column">
                                <div className="line-txt"><b>Nombre: <span
                                    className="text-secondary">{this.state.name}</span></b></div>
                                <div className="line-txt py-2"><b>Fecha de nacimiento: <span className="text-secondary">{this.state.dateOfBirth.slice(0, this.state.dateOfBirth.indexOf("00"))}</span>
                                </b></div>
                                <div className="line-txt"><b>Sexo: <span
                                    className="text-secondary">{this.state.sex}</span></b></div>
                                <div className="line-txt"><b>Nacionalidad: <span
                                    className="text-secondary">{this.state.nationality}</span></b></div>
                                <div className="line-txt"><b>Telefono: <span
                                    className="text-secondary">{this.state.phone}</span></b></div>
                                <div className="line-txt"><b>Email: <span
                                    className="text-secondary">{this.state.email}</span></b></div>
                                <div className="line-txt">
                                    <b>Dirección: <span className="text-secondary">{this.state.address}</span></b>
                                </div>
                                <div className="line-txt"><b>Numero de identificación: <span
                                    className="text-secondary">{this.state.identificationNumber}</span></b></div>
                        </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        RegAndAuthService.getUser(this.setInfoUser);
    }


}

export default Profile
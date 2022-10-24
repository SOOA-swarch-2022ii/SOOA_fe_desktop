import React, {Component, useState} from "react";
import "./Profile.css"

import RegAndAuthService from "../../services/reg_and_auth.service";
import imageProfile from "../../assets/profile.jpg";

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
        return (
            <div className="main-container-profile">
                <h1>Perfil {this.state.role.toLowerCase()}</h1>
                <div className="container-profile">
                        <div className="col-lg-5 pb-4 pb-lg-0">
                            <img className="img-fluid rounded w-50" src={imageProfile} alt="image"/>
                        </div>
                        <div className="col-lg-7">
                            <div className="row mb-3">
                                <div className="col-sm-6 py-2"><b>Nombre: <span
                                    className="text-secondary">{this.state.name}</span></b></div>
                                <div className="col-sm-6 py-2"><b>Fecha de nacimiento: <span className="text-secondary">{this.state.dateOfBirth.endsWith("COT")}</span>
                                </b></div>
                                <div className="col-sm-6 py-2"><b>Sexo: <span
                                    className="text-secondary">{this.state.sex}</span></b></div>
                                <div className="col-sm-6 py-2"><b>Nacionality: <span
                                    className="text-secondary">{this.state.nationality}</span></b></div>
                                <div className="col-sm-6 py-2"><b>Telefono: <span
                                    className="text-secondary">{this.state.phone}</span></b></div>
                                <div className="col-sm-6 py-2"><b>Email: <span
                                    className="text-secondary">{this.state.email}</span></b></div>
                                <div className="col-sm-6 py-2">
                                    <b>Dirección: <span className="text-secondary">{this.state.address}</span></b>
                                </div>
                                <div className="col-sm-6 py-2"><b>Numero de identificación: <span
                                    className="text-secondary">{this.state.identificationNumber}</span></b></div>
                            </div>
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
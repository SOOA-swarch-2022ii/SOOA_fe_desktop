import React, { Component } from "react";
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
            <div className="container-fluid py-5" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 pb-4 pb-lg-0">
                            <img className="img-fluid rounded w-50" src={imageProfile} alt="image"/>
                        </div>
                        <div className="col-lg-7">
                            <h3 className="mb-4">Perfil {this.state.role.toLowerCase()}</h3>
                            <div className="row mb-3">
                                <div className="col-sm-6 py-2"><h6>Nombre: <span
                                    className="text-secondary">{this.state.name}</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Fecha de nacimiento: <span className="text-secondary">{this.state.dateOfBirth.endsWith("COT")}</span>
                                </h6></div>
                                <div className="col-sm-6 py-2"><h6>Sexo: <span
                                    className="text-secondary">{this.state.sex}</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Nacionality: <span
                                    className="text-secondary">{this.state.nationality}</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Telefono: <span
                                    className="text-secondary">{this.state.phone}</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Email: <span
                                    className="text-secondary">{this.state.email}</span></h6></div>
                                <div className="col-sm-6 py-2">
                                    <h6>Dirección: <span className="text-secondary">{this.state.address}</span></h6>
                                </div>
                                <div className="col-sm-6 py-2"><h6>Numero de identificación: <span
                                    className="text-secondary">{this.state.identificationNumber}</span></h6></div>
                            </div>
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
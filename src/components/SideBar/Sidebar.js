import React, {useState} from "react";
import  iHome from '../../assets/home.svg'
import iPencil from '../../assets/pencil.svg'
import iRecord from '../../assets/record.svg'
import iUser from '../../assets/user.png'
import iSearch from '../../assets/search.svg'
import { hookstate, useHookstate, State } from '@hookstate/core';
import './Sidebar.css';
import multiavatar from "@multiavatar/multiavatar";
import SVG from "react-inlinesvg";

const globalState = hookstate('ini');
const getOption = (s: State<number>) => ({
    get: () => s.value,
    set: (op) => s.set(op)
})

const accessGlobalState = () => getOption(globalState)
const useGlobalState = () => getOption(useHookstate(globalState))

const Sidebar = ({isLogged}) =>{
    const state = useGlobalState();
    const multiavatar = require('@multiavatar/multiavatar')
    let avatar = multiavatar(localStorage.getItem("name"))

    return(
        <div className="sidebar">
            <div className="items">
                <a className="line" onClick={() => state.set('per')}>
                    <SVG className="user" alt="user" src={avatar} />
                    {localStorage.getItem("name") || ""}
                </a>
                <a className="line" onClick={() => state.set('ini')}>
                    <img src={iHome} className="icon" alt="home"/>
                    Inicio
                </a>
                <a className="line" onClick={() => state.set('reg')}>
                    <img src={iPencil} className="icon" alt="pencil"/>
                    Incribir asignaturas
                </a>
                <a className="line" onClick={() => state.set('his')}>
                    <img src={iRecord} className="icon" alt="record"/>
                    Historia académica
                </a>
                <a className="line" onClick={() => state.set('bus')}>
                    <img src={iSearch} className="icon" alt="search"/>
                    Buscador de cursos
                </a>
            </div>
        </div>
    )
}

export {Sidebar, accessGlobalState, useGlobalState};
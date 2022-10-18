import React, {useState, useEffect} from 'react';
import Header from "../../components/Header/Header";
import "./Home.css";
import {Sidebar, accessGlobalState, useGlobalState} from "../../components/SideBar/Sidebar";
import SelectOption from "../SelectOption";
import back from "../../assets/back.png";

const Home = ({handleLogged}) => {

    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
        // 👇️ toggle shown state
        setIsShown(current => !current);

        // 👇️ or simply set it to true
        // setIsShown(true);
    };
    return(
        <div className="portal">
            <Header isLogged={handleLogged}/>
            <div className="main" style={{ backgroundImage: `url(${back})` }}>
                <div className="side">
                    <Sidebar />
                </div>
                <div className="contenido">
                    <SelectOption/>
                </div>
            </div>
        </div>
    )
}

function Box() {
    return (
        <div>
            <h2>Box</h2>
        </div>
    );
}

export default Home;
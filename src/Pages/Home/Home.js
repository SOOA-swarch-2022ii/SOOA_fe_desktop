import React from 'react';
import Header from "../../components/Header/Header";
import "./Home.css";
import Sidebar from "../../components/SideBar/Sidebar";

const Home = ({handleLogged}) => {

    return(
        <div className="portal">
            <Header isLogged={handleLogged}/>

            <Sidebar />
        </div>
    )
}

export default Home;
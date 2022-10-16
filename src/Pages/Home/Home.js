import React from 'react';
import Header from "../../components/Header/Header";
const Home = ({handleLogged}) => {
    return(
        <div>
            <Header isLogged={handleLogged}/>
            home
        </div>
    )
}

export default Home;
import {Sidebar, accessGlobalState, useGlobalState} from "../components/SideBar/Sidebar";
import Welcome from "./Welcome/Welcome";


const SelectOption = () => {
    const state = useGlobalState();
    if (state.get() === 'per'){
        return <h1>Perfil</h1>;
    } else if (state.get() === 'ini'){
        return (<Welcome/>);
    } else if (state.get() === 'reg'){
        return <h1>Inscripción de materias</h1>;
    } else if (state.get() === 'his'){
        return <h1>Historia académica</h1>;
    } else if (state.get() === 'bus'){
        return <h1>Buscador de cursos</h1>;
    }

}

export default SelectOption;
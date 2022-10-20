import CoursesFinder from "../components/CoursesFinder/CoursesFinder";
import {Sidebar, accessGlobalState, useGlobalState} from "../components/SideBar/Sidebar";
import Welcome from "./Welcome/Welcome";
import Profile from "./Profile/Profile";
import RegisterSubject from "./RegisterSubjects/RegisterSubject";
import AcademicRecord from "./AcademicRecord/AcademicRecord";


const SelectOption = () => {
    const state = useGlobalState();

    if (state.get() === 'per'){
        return <Profile/>;

    } else if (state.get() === 'ini'){
        return <Welcome/>;

    } else if (state.get() === 'reg'){
        return <RegisterSubject/>;

    } else if (state.get() === 'his'){
        return <AcademicRecord/>;

    } else if (state.get() === 'bus'){
        return<CoursesFinder/>;
    }

}

export default SelectOption;
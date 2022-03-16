import ProjectFilter from "../Components/ProjectFilter";
import StudentChart from "../Components/StudentFilter";
import { data } from "./StudentData";
import { useState } from "react";

const Students = (props) => {
    const projectList = data.studentData.map((student) => {
        return student.project;
    });

    const projectListNew = projectList.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });

    const initialState = projectListNew.map((item, index) => {
        return {
            id: index,
            value: item,
            isChecked: true,
        };
    });

    const [projects, setProjects] = useState(initialState);

    const handleProjectCheckbox = (state) => {

        setProjects([...state.projects]);
    };

    const studentName = `${props.match.params.name}`;
    return (
        <div >
            <h1 >{`${studentName}'s page`}</h1>

            <div >
                <StudentChart
                    projects={projects}
                    studentName={studentName} />
            </div>

            <div>
                <ProjectFilter
                    projects={projects}
                    changedHandler={handleProjectCheckbox} />
            </div>
        </div>
    );
};

export default Students;
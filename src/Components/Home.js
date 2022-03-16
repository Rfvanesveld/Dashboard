import { data } from "../Files/StudentData";
import ChartBar from "./StudentChartBar";
import ProjectFilter from "./ProjectFilter";
import { useState } from "react";

const Home = () => {
    const names = data.studentNames;
    const initialStateNames = names.map((name, index) => {
        return {
            id: index,
            value: name,
            isChecked: true,
        };
    });

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
    const [students, setStudents] = useState(initialStateNames);

    const handleStudentCheckbox = (event) => {
        let lstudents = students;
        lstudents.forEach((student) => {

            if (student.value === event.target.value) {

                student.isChecked = event.target.checked;
            }
        });

        setStudents([...lstudents]);
    };

    const handleProjectCheckbox = (state) => {

        setProjects([...state.projects]);
    };


    return (
        <>
            <div >
                <ul>
                    {students.map((item, index) => {
                        return (
                            <div >
                                <li key={item.index}>
                                    <input
                                        key={item.id}
                                        label={item.value}
                                        type="checkbox"
                                        name={item.value}
                                        onChange={(event) => handleStudentCheckbox(event)}
                                        checked={item.isChecked}
                                        value={item.value}
                                    />
                                </li>
                            </div>
                        );
                    })}
                </ul>
            </div>
            <div >
                <ChartBar

                    projects={projects}
                    students={students}
                />
            </div>
            <div>
                <ProjectFilter
                    projects={projects}
                    changedHandler={handleProjectCheckbox}
                />
            </div>
        </>
    );
};

export default Home;
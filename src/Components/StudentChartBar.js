import { data } from "../Files/StudentData";
import StudentChart from "./StudentChart";
import React from "react";

const sum = (a, b) => {
    return {
        project: a.project,
        hardshiplevel: a.hardshiplevel + b.hardshiplevel,
        funlevel: a.funlevel + b.funlevel,
    };
};

class StudentChartBar extends React.Component {
    constructor(props) {
        super(props);

        this.selectedProjects = props.projects;
        this.studentData = data.studentData;
        this.allvalues = [];

        this.projectList = this.selectedProjects.filter((value, index, self) => {
            return value.isChecked;
        });

        this.projectListNew = this.projectList.map((project) => {
            return project.value;
        });

        this.projectListNew.forEach((project) => {
            const values = this.studentData.filter((value) => {
                return value.project === project;
            });

            this.allvalues.push(this.getAverage(values));
        });
    }

    getAverage = (array) => {
        const totalSum = array.reduce(sum);
        return {
            project: totalSum.project,
            hardshiplevel: totalSum.hardshiplevel / array.length,
            funlevel: totalSum.funlevel / array.length,
        };
    };

    render() {

        const activeProjectsTmp = this.props.projects.filter(active => {
            return active.isChecked;
        });

        const activeProjects = activeProjectsTmp.map(proj => {
            return proj.value;
        })

        const activeStudentTmp = this.props.students.filter(active => {
            return active.isChecked;
        });

        const activeStudents = activeStudentTmp.map(student => {
            return student.value;
        });

        const test = data.studentData.filter(value => {
            return activeProjects.includes(value.project) && activeStudents.includes(value.name);
        });

        return (
            <>
                <StudentChart data={test} />
            </>
        );
    }
}

export default StudentChartBar;
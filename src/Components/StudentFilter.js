import { data } from "../Files/StudentData";
import React from "react";
import Chart from "./StudentChart";

class StudentChart extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const activeProjects = this.props.projects.filter((active) => {
            return active.isChecked;
        });

        const activeProjectsNew = activeProjects.map((projectX) => {
            return projectX.value;
        });

        const studentData = data.studentData.filter((item) => {
            return item.name === this.props.studentName;
        });

        const DataNew = studentData.filter((value) => {
            return activeProjectsNew.includes(value.project);
        });

        return (
            <>
                <Chart data={DataNew} />
            </>
        );
    }
}

export default StudentChart;
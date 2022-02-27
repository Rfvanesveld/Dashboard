import { VictoryChart, VictoryGroup, VictoryLegend, VictoryLabel, VictoryAxis, VictoryBar } from 'victory';
import { StudentDataNew } from '../Files/StudentData';

const StudentData = StudentDataNew.StudentData;

const sum = (a, b) => {
    return {
        projectname: a.projectname,
        hardshiplevel: a.hardshiplevel + b.hardshiplevel,
        funlevel: a.funlevel + b.funlevel,
    };
};

const getAverage = (array) => {
    const sums = array.reduce(sum);
    return {
        projectname: sums.projectname,
        hardshiplevel: sums.hardshiplevel / array.length,
        funlevel: sums.funlevel / array.length,
    };
};

const projectList = StudentData.map((student) => {
    return student.projectname;
});

const projectListNew = projectList.filter((value, index, self) => {
    return self.indexOf(value) === index;
});

const allData = [];
projectListNew.forEach((projectname) => {
    const values = StudentData.filter((value) => {
        return value.projectname === projectname;
    });

    allData.push(getAverage(values));
});


const StudentChart = () => {
    return (
        <VictoryChart
            height={180}
            padding={20}
            width={400}
        >

            <VictoryGroup
                offset={160 / StudentData.length}>

                <VictoryBar
                    data={allData}
                    x={"projectname"}
                    y={"hardshiplevel"}
                    style={{ data: { fill: "#f81607" } }}
                    barWidth={2}
                // alignment="end"
                // key={0}
                />

                <VictoryBar
                    data={allData}
                    x={"projectname"}
                    y={"funlevel"}
                    style={{ data: { fill: "#0f79e6" } }}
                    barWidth={2}
                // alignment="end"
                // key={1}
                />

            </VictoryGroup>

            <VictoryAxis
                tickValues={[1, 2, 3, 4, 5]}
                label="Assignments"
                style={{
                    ticks: {
                        fill: "transparent",
                        size: 2,
                    },
                }}
                tickLabelComponent={

                    <VictoryLabel
                        dx={-8.5}
                        dy={-8}
                        style={{
                            fontSize: 4,
                            fill: "#223243",
                        }}
                        textAnchor={"start"}
                    />
                }
            />
            <VictoryAxis
                dependentAxis
                domain={[0, 5]}
                tickValues={[1, 2, 3, 4, 5]}
                style={{
                    tickLabels: {
                        fontSize: 6,
                        fill: "#223243",
                    },
                }}

                label="Rating"
            />

            <VictoryLegend

                x={20}
                y={0}
                orientation="horizontal"
                // gutter={20}
                style={{
                    labels: {
                        fontSize: 4,
                        fill: "#120faa"
                    }
                }}
            />

        </VictoryChart>
    )
}

export default StudentChart;


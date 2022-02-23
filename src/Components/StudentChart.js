import { VictoryChart, VictoryGroup, VictoryLegend, VictoryStack, VictoryAxis, VictoryBar } from 'victory';
import { StudentData } from '../Students/StudentData';

const StudentChart = () => {
    return (
        <VictoryChart

            height={250}
        >
            <VictoryLegend

                x={50}
                y={0}
                orientation="horizontal"
                gutter={20}
                style={{ labels: { fontSize: 12, fill: "black" } }}
            />

            <VictoryAxis

                label="Assignments"
                tickValues={[1, 2, 3, 4, 5]}

            />
            <VictoryAxis

                dependentAxis
                tickValues={[1, 2, 3, 4, 5]}
                label="Rating"
            />

            <VictoryGroup
                offset={20}>

                <VictoryStack
                    style={{ data: { fill: "#f81607" } }}>
                    <VictoryBar
                        StudentData={StudentData}
                        alignment="end"
                        key={0}
                        x="projectname"
                        y="hardshiplevel"
                    />
                </VictoryStack>

                <VictoryStack offset={11}
                    style={{ data: { fill: "#0f79e6" } }}>

                    <VictoryBar
                        StudentData={StudentData}
                        alignment="end"
                        key={1}
                        x="projectname"
                        y="funlevel"
                    />
                </VictoryStack>

            </VictoryGroup>
        </VictoryChart>
    )
}

export default StudentChart;


import { VictoryChart, VictoryGroup, VictoryLegend, VictoryLabel, VictoryAxis, VictoryBar } from 'victory';
import React from 'react';

const Chart = (data) => {
    return (
        <VictoryChart
            height={160}
            padding={20}
            width={350}
        >

            <VictoryGroup
            // offset={160 / studentData.length}
            >

                <VictoryBar
                    data={data}
                    x={"project"}
                    y={"hardshiplevel"}
                    style={{ data: { fill: "#f81607" } }}
                    barWidth={2}
                // alignment="end"
                // key={0}
                />

                <VictoryBar
                    data={data}
                    x={"project"}
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

export default Chart;

import { studentDataNew } from '../Files/StudentData'
import StudentChart from './StudentChart';

import React from 'react'

const Home = () => {
    const names = studentDataNew.studentNames;

    return (
        <div>
            <h1>Home</h1>
            <StudentChart />

            {names.map((item, index) => {

            })}

        </div>
    );
};

export default Home;
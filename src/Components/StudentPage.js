import { studentDataNew } from '../Files/StudentData';
import { Link } from "react-router-dom";
import React from "react";

const StudentPage = () => {

    const students = studentDataNew.studentNames;

    return (
        <><h1>STUDENTPAGE</h1>

            <div ><Link key="#" to="#" ></Link></div>

            <nav >
                <ul >

                    {students.map((item, index) => {
                        return (
                            <li key={index} >
                                <Link
                                    to={{
                                        pathname: `/Students/${item}`,
                                        state: { studentname: `${item}` },
                                    }}>

                                    <span>{item}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

        </>
    );
};

export default StudentPage;
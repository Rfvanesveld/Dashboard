import { data } from "../Files/StudentData";
import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navigation = () => {
    const students = data.studentNames;
    const [navigation, setNavigation] = useState(false);
    const showNavigation = () => setNavigation(!navigation);

    return (
        <>
            <div >
                <Link key="#" to="#" >

                </Link>
                <div >
                    <h2>Student Dashboard</h2>
                </div>
            </div>
            <nav >
                <ul>
                    <li><Link to="/">Home</Link></li>

                    {students.map((item, index) => {
                        return (
                            <li key={index} >
                                <Link to={{
                                    pathname: `/${item}`,
                                    state: { studentname: `${item}` },
                                }}
                                >{item}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
};

export default Navigation;
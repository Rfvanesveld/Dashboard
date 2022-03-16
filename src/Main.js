import { BrowserRouter, Routes, Route } from "react-router-dom"
import Studentpage from './Components/StudentPage'
import StudentSidebar from './Components/Navigation'
import Students from './Files/Student';
import Navigation from './Navigation'
import Home from './Components/Home';

import React from "react"

function Main() {
    return (
        <BrowserRouter>

            {/* <Navigation /> */}
            <StudentSidebar />
            <Routes>

                <Route index element={Home} />
                <Route path="student/:name" element={Students} />

            </Routes>
        </BrowserRouter>

    );
}

export default Main



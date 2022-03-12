import { BrowserRouter, Routes, Route } from "react-router-dom"
import StudentPage from "./Components/StudentPage";
import Students from './Files/Students';
import Navigation from './Navigation';
import Home from './Components/Home';

import React from "react"

function Main() {
    return (
        <BrowserRouter>

            <Navigation />
            <Routes>

                <Route index element={<Home />} />
                <Route path="students/:studentname" element={<Students />} />
                <Route path='/studentpage' element={<StudentPage />} />

            </Routes>
        </BrowserRouter>

    );
}

export default Main



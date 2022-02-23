import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from '../Components/Navigation';
import StudentChart from './StudentChart';
import React from "react"

// import Home from '../Students/Home';
import Evelyn from '../Students/Evelyn';
import Hector from '../Students/Hector';
import Maurits from '../Students/Maurits';
import Sandra from '../Students/Sandra';
import Storm from '../Students/Storm';


function Main() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<StudentChart />} />
                {/* <Route path="/" element={Home} /> */}
                <Route path="/Evelyn" element={Evelyn} />
                <Route path="/Hector" element={Hector} />
                <Route path="/Maurits" element={Maurits} />
                <Route path="/Sandra" element={Sandra} />
                <Route path="/Storm" element={Storm} />

            </Routes>
        </Router>

    );
}

export default Main

































//.........................................................................
//.........................................................................


// import Overview from "./Overview"

// const Main = (assignmentListing, averageX) => {
//     return (
//         <div>
//             <Overview assignmentListing={assignmentListing} averageX={averageX} />

//             {/* <Overview opdrachtList={opdrachtList} averageX={averageX} /> */}
//         </div>
//     )
// }

// export default Main


//.........................................................................
//.........................................................................


// import Overview from "./Overview"

// const Main = (opdrachtList, averageM) => {
//     return (
//         <div >
//             <Overview opdrachtList={opdrachtList} averageM={averageM} />
//         </div>
//     )
// }

// export default Main

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Students from './Files/Student';
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

            </Routes>
        </BrowserRouter>

    );
}

export default Main


//............................................................................


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Navigation from '../Components/Navigation';
// import StudentChart from './StudentChart';
// import React from "react"

// import Students from '../Students/Students';
// import Home from '../Students/Home';


// import Evelyn from '../Students/Evelyn';
// import Hector from '../Students/Hector';
// import Maurits from '../Students/Maurits';
// import Sandra from '../Students/Sandra';
// import Storm from '../Students/Storm';


// function Main() {
//     return (
//         <Router>
//             <Navigation />
//             <Routes>
//                 <Route path="/" element={<StudentChart />} />
//                 {/* <Route path="/Home" element={Home} /> */}

//                 {/* <Route exact path="/" element={Home} /> */}
//                 {/* <Route path="../Students/:studentname" element={Students} /> */}

//                 {/* <Route path="/Evelyn" element={Evelyn} />
//                 <Route path="/Hector" element={Hector} />
//                 <Route path="/Maurits" element={Maurits} />
//                 <Route path="/Sandra" element={Sandra} />
//                 <Route path="/Storm" element={Storm} /> */}

//             </Routes>
//         </Router>

//     );
// }

// export default Main

































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

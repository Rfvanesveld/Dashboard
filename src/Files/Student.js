// import StudentChart from "../Components/StudentChart";
import { useParams } from "react-router-dom";

const Students = (props) => {
    const { studentname } = useParams();

    console.log(studentname);

    return (
        <div>
            <h2>Hi {studentname}</h2>
            <h2>{`${studentname}'s page`}</h2>
        </div>
    );
};

export default Students;

//................................................................

// import StudentChart from '../Components/StudentChart';


// const Students = (props) => {

//     const studentName = `${props.match.params.studentname}`

//     return (
//         <div>
//             <h2>Hi {studentName}</h2>
//             <h2>{`${studentName}'s page`}</h2>
//         </div>
//     );
// };

// export default Students;
import StudentChart from "../Components/StudentChart";
import { useParams } from "react-router-dom";


const Students = (props) => {
    const { studentname } = useParams();

    console.log(studentname);

    return (
        <div>

            <h2>{`This is ${studentname}'s page`}</h2>
            <StudentChart />
        </div>
    );
};

export default Students;


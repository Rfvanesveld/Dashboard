import StudentChart from '../Components/StudentChart';


const Students = (props) => {

    const studentName = `${props.match.params.studentname}`

    return (
        <div>
            <h2>Hi {studentName}</h2>
            <h2>{`${studentName}'s page`}</h2>
        </div>
    );
};

export default Students;
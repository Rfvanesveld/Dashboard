import StudentChart from '../Components/StudentChart'

const Evelyn = () => {
    return (
        <div>
            <h1>Results -- Evelyn</h1>
            <StudentChart />
        </div>
    );
}

export default Evelyn;


// ................................................

// import ChartBar from '../Components/StudentChart';

// const Students = (props) => {

//   const studentName = `${props.match.params.name}`
//   return (
//     <div>
//       <h1>{`${studentName}'s page`}</h1>
//       <ChartBar name={studentName } />
//     </div>
//   );
// };

// export default Students;
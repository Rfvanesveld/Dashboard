import { Link } from 'react-router-dom';
// import Home from './Components/Home';
import React from 'react'

const Navigation = () => {
    return (
        <div>
            <nav className='nav-links'>

                <ul>
                    <li><Link to='/'>Home</Link></li>

                    <li><Link to='StudentName'>Students</Link></li>

                </ul>
            </nav>
        </div>
    );
}

export default Navigation;




//...............................................

// import { Link } from 'react-router-dom';
// import React from 'react'

// const Navigation = () => {
//     return (
//         <nav className='nav-links'>

//             <ul>
//                 <Link to='/Home'>
//                     <li>Home</li>
//                 </Link>

//                 <Link to='/Evelyn'>
//                     <li>Evelyn</li>
//                 </Link>

//                 <Link to='Hector'>
//                     <li>Hector</li>
//                 </Link>

//                 <Link to='Maurits'>
//                     <li>Maurits</li>
//                 </Link>

//                 <Link to='Sandra'>
//                     <li>Sandra</li>
//                 </Link>

//                 <Link to='Storm'>
//                     <li>Storm</li>
//                 </Link>

//             </ul>
//         </nav>
//     );
// }

// export default Navigation;


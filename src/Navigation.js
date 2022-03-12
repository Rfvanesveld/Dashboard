import { Link } from 'react-router-dom';
import React from 'react'

const Navigation = () => {
    return (

        <nav className='nav-links'>

            <ul>

                <li><Link to='/'>Home</Link></li>
                <li><Link to='/studentpage'>StudentPage</Link></li>
                {/* <li><Link to='/students'>Students</Link></li> */}

            </ul>
        </nav>

    );
}

export default Navigation;




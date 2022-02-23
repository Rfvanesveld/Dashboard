import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='nav-links'>
            <Link to='/'><div>Home</div></Link>
            <Link to='Evelyn'><div>Evelyn</div></Link>
            <Link to='Hector'><div>Hector</div></Link>
            <Link to='Maurits'><div>Maurits</div></Link>
            <Link to='Sandra'><div>Sandra</div></Link>
            <Link to='Storm'><div>Storm</div></Link>


        </nav>
    );
}

export default Navigation;


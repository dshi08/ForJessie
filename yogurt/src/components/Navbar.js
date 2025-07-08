import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                    TRVL <i className='fab fa-type3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to= '/' className='nav-links' onClick={(closeMobileMenu)}>
                            Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to= '/' className='nav-links' onClick={(closeMobileMenu)}>
                            Placeholder2
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to= '/' className='nav-links' onClick={(closeMobileMenu)}>
                            Placeholder3
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to= '/' className='nav-links' onClick={(closeMobileMenu)}>
                            Placeholder4
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const[button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);
    
    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    4Jessie <img src="/hearts.gif" alt="Logo" className="navbar-icon" />
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
                            <Link to= '/cats' className='nav-links' onClick={(closeMobileMenu)}>
                            Cats
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to= '/foodie' className='nav-links' onClick={(closeMobileMenu)}>
                            Foodie
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to= '/jessie-only' className='nav-links-mobile' onClick={(closeMobileMenu)}>
                            JessieOnly
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'
                                       buttonSize='btn--large'
                                       to="/jessie-only">
                                        JessieOnly
                            </Button>
                    }
                </div>
            </nav>
        </>
    )
}
export default Navbar
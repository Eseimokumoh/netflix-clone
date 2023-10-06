import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };

        window.addEventListener("scroll", scrollListener);

        return () => {
            window.removeEventListener("scroll", scrollListener);
        };
    }, []);
    
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className='nav_logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
                alt='Netflix logo'/>
            <img className='nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Netflix logo'/>
        </div>
    );
}

export default Nav;

import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import image from '../images/header1.gif';
import './Header.css';

export default function Header() {
    const location = useLocation();
    const lastTap = useRef(0);

    const isActive = (path) => location.pathname === path;

    const handleDoubleTap = (event) => {
        event.preventDefault();
        const now = Date.now();
        if (now - lastTap.current < 300) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        lastTap.current = now;
    };

    return (
        <div className='header links' data-aos="fade-down" data-aos-delay="800">
            <Link className='link' to="/">
                <img className='image' src={image} alt="logo" />
            </Link>
            <span>|</span>
            <Link 
                className={`link ${isActive('/projects') ? 'active' : ''}`} 
                to="/projects"
                onTouchEnd={isActive('/projects') ? handleDoubleTap : undefined}
            >
                Projects
                {isActive('/projects') && <ChevronUp className="active-icon" size={16} />}
            </Link>
            <Link 
                className={`link ${isActive('/about') ? 'active' : ''}`} 
                to="/about"
                onTouchEnd={isActive('/about') ? handleDoubleTap : undefined}
            >
                About Me
                {isActive('/about') && <ChevronUp className="active-icon" size={16} />}
            </Link>
        </div>
    );
}
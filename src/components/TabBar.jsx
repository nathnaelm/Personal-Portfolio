import React from "react";
import { Link, useLocation } from "react-router-dom";

function TabBar() {
    const location = useLocation();
    const currentPath = location.pathname;

    const getActiveTab = () => {
        if (currentPath === '/experience') return 'experience';
        if (currentPath === '/portfolio') return 'portfolio';
        if (currentPath === '/contact') return 'contact';
        return 'home';
    };

    const activeTab = getActiveTab();

    return (
        <div className="TabBar">
            <Link to='/'>
                <button className={activeTab === 'home' ? 'active' : ''}>
                    Home
                </button>
            </Link>

            <Link to='/experience'>
                <button className={activeTab === 'experience' ? 'active' : ''}>
                    Experience
                </button>
            </Link>

            <Link to='/portfolio'>
                <button className={activeTab === 'portfolio' ? 'active' : ''}>
                    Portfolio
                </button>
            </Link>

            <Link to="/contact">
                <button className={activeTab === 'contact' ? 'active' : ''}>
                    Contact
                </button>
            </Link>
        </div>
    )
}

export default TabBar
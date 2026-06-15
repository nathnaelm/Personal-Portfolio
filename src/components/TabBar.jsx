import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function TabBar() {
    const [currentTab, setCurrentTab] = useState('home')

    return (
        < div className="TabBar" >
            <Link to='/'>
                <button
                    onClick={() => setCurrentTab('home')} className={currentTab === 'home' ? 'active' : ''}
                >
                    Home
                </button>
            </Link>

            <Link to='/experience'>
                <button
                    onClick={() => setCurrentTab('experience')} className={currentTab === 'experience' ? 'active' : ''}
                >
                    Experience
                </button>
            </Link>

            <Link to='/portfolio'>
                <button
                    onClick={() => setCurrentTab('portfolio')} className={currentTab === 'portfolio' ? 'active' : ''}
                >
                    Portfolio
                </button>
            </Link>

            <Link to="/contact">
                <button
                    onClick={() => setCurrentTab('contact')} className={currentTab === 'contact' ? 'active' : ''}
                >
                    Contact
                </button>
            </Link>

        </div >
    )
}

export default TabBar
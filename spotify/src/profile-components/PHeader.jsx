import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../profile-style/PHeader.css';

export default function PHeader() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <header className='profheader'>
            <h2 className="headertext">Welcome, IhorPishta</h2>
            <img src="/images/backgrounds/back-headphones.png" className="backhead" alt="headphones" />

            <Link to="/">
                <img src="/images/backgrounds/home.png" className="backhome" alt="home" />
            </Link>

            <img src="/images/backgrounds/settings.png" className="backsettings" alt="settings" />

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)} 
                    className="search-box"
                />
            </div>
        </header>
    );
}
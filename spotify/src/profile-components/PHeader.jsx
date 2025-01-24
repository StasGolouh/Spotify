import React from 'react';
import '../profile-style/PHeader.css';

export default function PHeader() {
    return (
            <header className='profheader'>
                <h2 className="headertext">Welcome, IhorPishta</h2>
                <img src="/images/backgrounds/back-headphones.png" className="backhead" alt="headphones" />
            </header>
    );
}

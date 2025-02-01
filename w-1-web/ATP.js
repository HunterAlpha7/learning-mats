import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
        // Add your logout logic here
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>Your Brand</h1>
            </div>
            <div className="navbar-auth">
                {!isLoggedIn ? (
                    <>
                        <button className="auth-button">Sign In</button>
                        <button className="auth-button">Sign Up</button>
                    </>
                ) : (
                    <button className="auth-button" onClick={handleLogout}>
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
};

/* Add this CSS to your Navbar.css file */
/*
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #333;
    color: white;
}

.navbar-brand h1 {
    margin: 0;
    font-size: 1.5rem;
}

.navbar-auth {
    display: flex;
    gap: 1rem;
}

.auth-button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
}

.auth-button:hover {
    background-color: #0056b3;
}
*/

export default Navbar;

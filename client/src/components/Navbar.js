import React, { } from 'react';
import {
    Link
} from "react-router-dom";

export default function Navbar() {

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <p>My Movies</p>
                    <Link to="/">
                        <p>Dashboard</p>
                    </Link>
                    <Link to="/favorites">
                        <p>My Favorite</p>
                    </Link>
                </nav>
            </div>
        </>)

}

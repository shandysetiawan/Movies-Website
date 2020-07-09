import React, { } from 'react';
import {
    Link
} from "react-router-dom";

export default function Navbar() {

    return (
        <>
            <div >
                <nav className="navbar justify-content-around" style={{ backgroundColor: "#00263b", color: "white" }} >
                    <p><i className="fas fa-ticket-alt"></i></p>
                    <Link to="/">
                        <p>Dashboard</p>
                    </Link>
                    <Link to="/favorites">
                        <p>My Favorites</p>
                    </Link>
                </nav>
            </div>
        </>)

}

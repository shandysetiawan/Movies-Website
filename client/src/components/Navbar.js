import React, { } from 'react';
import {
    NavLink
} from "react-router-dom";

export default function Navbar() {

    return (
        <>
            <div>
                <nav className="navbar justify-content-around" style={{ backgroundColor: "#00263b", color: "white" }} >
                    <p><i className="fas fa-ticket-alt"></i></p>
                    <NavLink to="/" activeStyle={{ color: "white" }} exact>
                        Dashboard
                    </NavLink>
                    <NavLink to="/favorites" activeStyle={{ color: "white" }} exact>
                        My Favorites
                    </NavLink>
                </nav>
            </div>
        </>)

}

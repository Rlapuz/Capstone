import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Navbar() {
    return (
        <div className="nav-div">
            <h1 className="nav-h1">Daily Offer</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Offers</li>
                <li>Blogs</li>
                <li>Pages</li>
            </ul>
            <div>
                <input type="text" placeholder="Search" />
                <FontAwesomeIcon icon="fas fa-search" />
            </div>
            <h3>Log in</h3>

        </div>
    );
}


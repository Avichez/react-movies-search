import React from "react";

const Header = () => {
    return (
        <nav className="grey darken-3">
            <div className="nav-wrapper">
                <a href="!#" className="brand-logo center">Movies</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="!#">Repository</a></li>
                </ul>
            </div>
        </nav>
    )
}

export { Header }
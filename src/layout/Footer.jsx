import React from "react";


const Footer = () => {
    return (
        <footer className="page-footer grey darken-3">
            <div className="container">
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="https://github.com/Avichez/react-movies-search">Repository</a>
                </div>
            </div>
        </footer>
    )
}

export { Footer }
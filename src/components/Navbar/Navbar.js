import React from "react";
import "./Navbar.css"
import cloud from "../../images/cloud.png"

function Navbar() {
    return (

        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="title_container">
                <img src={cloud} alt="cloud-image" className="cloud-image"/>
                <h3><a href="/" className="navbar-brand">WeatherHub</a></h3></div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="true"
                    data-view-component="true"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                    </ul>
                    <a href="https://earth.google.com/"> <button>Open Map</button></a>

                </div>

            </nav>
        </div>
    )
}

export default Navbar
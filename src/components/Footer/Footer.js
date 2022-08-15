import React from "react";
import "./Footer.css"
import cloud from "../../images/cloud.png"

function Footer() {
    return (
        <>
            <div className="footer row ">
                <div className="footer_title ">
                    <img src={cloud} alt="cloud-image" className="cloud-image"/>
                    <h3><a href="/" > WeatherHub</a></h3></div>
                <div className="footer_container ">
                    <div className="footer_text">
                        <ul>
                            <li><h3>Company</h3></li>
                            <li><a>About</a></li>
                            <li><a>Services</a></li>
                            <li><a>Team</a></li>
                            <li><a>Career</a></li>
                        </ul>
                    </div>
                    <div className="footer_text">

                        <ul>
                            <li><h3>Global warming</h3></li>
                            <li><a>Trending</a></li>
                            <li><a>Causes</a></li>
                            <li><a>Effect</a></li>
                            <li><a>Solutions</a></li>
                        </ul>
                    </div>
                    <div className="footer_text">

                        <ul>
                            <li><h3>Quick Links</h3></li>
                            <li><a>FAQ's</a></li>
                            <li><a>Terms and Condition</a></li>
                            <li><a>Privacy Policy</a></li>
                            <li><a>Help</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
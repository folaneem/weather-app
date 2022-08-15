import React from "react";
import "./LandingPage.css"
import Navbar from "../Navbar/Navbar";
import Homepage from "../Homepage/Homepage";
import Information from "../Information/Information";
import Importance from "../Importance/Importance";
import GlobalWarming from "../GlobalWarming/GlobalWarming";
import Footer from "../Footer/Footer";
import Rights from "../Rights/Rights";

function LandingPage() {
    return (

        <div className="landing_page">
            <Navbar/>
            <Homepage/>
            <Information/>
            <Importance/>
            <GlobalWarming/>
            <Footer/>
            <Rights/>

        </div>
    )
}

export default LandingPage
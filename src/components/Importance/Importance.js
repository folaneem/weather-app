import React from "react";
import "./Importance.css"
import importance from "../../images/importance.png"

function Importance() {
    return (
        <>
            <div className="importance row ">

                <div className="importance_text col-lg-6 col-md-12 col-sm-12">
                    <h1>
                        IMPORTANCE OF WEATHER ON HUMAN ACTIVITIES
                    </h1>
                    <p>
                        Weather has a profound effect on human health and well-being. It has been demonstrated that
                        weather
                        is associated with changes in birth rates, and sperm counts, with outbreaks of pneumonia,
                        influenza
                        and bronchitis, and is related to other morbidity effects linked to pollen concentrations and
                        high
                        pollution levels.</p>
                  <a href="https://sciencing.com/weather-climate-benefit-man-23291.html"> <button>More Info</button></a>
                </div>

                <img src={importance} alt="importance-image" className="importance_image col-lg-6 col-md-12 col-sm-12"  />

            </div>
        </>
    )
}

export default Importance
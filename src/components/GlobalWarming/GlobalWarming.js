import React from "react";
import "./GlobalWarming.css"
import warming from "../../images/warming.png"

function GlobalWarming() {
    return (
        <>
            <div className="global_warming row">
                <img src={warming} alt="warming-image" className="warming_image col-lg-6 col-md-12 col-sm-12"/>
                <div className="warming_text col-lg-6 col-md-12 col-sm-12">
                    <h1>GLOBAL WARMING</h1>
                    <p>Global warming is a phenomenon of climate change characterized by a general increase in average
                        temperatures of the Earth, which modifies the weather balances and ecosystems for a long time.
                        It is directly linked to the increase of greenhouse gases in our atmosphere, worsening the
                        greenhouse effect.</p>
                    <a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwil8fPToKP4AhWTgFAGHa4qD98YABAAGgJkZw&ae=2&ohost=www.google.com&cid=CAESa-D2sNALqG4qQ2uFzk7NMeS6GJswvhiUXO43QIPjawpwWuIfBUSnPfIu3SnU06EdIZUBWbYmOov6yG8TRcXcDPOQEGFAhYAi3vPGWGntXczDBvBy3-27VhgVIuV-qnTGA_FNQN82_RuNDK7l&sig=AOD64_1Ohfp0bQiWB8PMBMNvPP9h3WOILg&q&adurl&ved=2ahUKEwjX9uzToKP4AhWMScAKHUiqAv8Q0Qx6BAgDEAE">
                        <button>More Info</button>
                    </a>

                </div>
            </div>
        </>
    )
}

export default GlobalWarming
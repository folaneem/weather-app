import React from "react";
import "./Information.css"

function Information() {
    return (
        <>
            <div className="information">
                <h1>
                    Weather Information
                </h1>
                <div className="weather_information row">
                    <div className=" col-lg-3 col-md-6">
                        <div className="info  ">
                            <h2>Sunny</h2>
                            <p>Sunny days are most common in Spring and Summer, but they can also happen in Autumn and
                                Winter, but usually they are less warm in these seasons. Sunny days are great for
                                playing
                                outside.It is important to wear sun cream on sunny days to prevent sunburn.</p>

                        </div>
                    </div>
                    <div className=" col-lg-3 col-md-6">
                        <div className="info  ">
                            <h2>Cloudy</h2>
                            <p>The weather is cloudy when there are lots of clouds in the sky that get in the way of the
                                sun. Cloudy days can be cold, because there is not much sunlight, but they can also be
                                warm
                                if there is lots of humidity. Cloudy days are common in Autumn and Winter.</p>

                        </div>
                    </div>
                    <div className=" col-lg-3 col-md-6">
                        <div className="info  ">
                            <h2>Rainy</h2>
                            <p>Rainy weather happens when there are large clouds in the sky that produce rain. Cloudy
                                days
                                can become rainy days if the clouds get large enough and there is a lot of
                                precipitation.It is important to wear a waterproof coat or carry an umbrella on rainy
                                days.

                            </p>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="info ">
                            <h2>Snowy</h2>
                            <p>Snowy days usually happen in winter, when precipitation falls as snow instead of rain.
                                This happens because the low temperatures cause the water in clouds to freeze and become
                                snowflakes, which fall to the ground and pile up. On snowy days it is best to dress in
                                warm clothes</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Information
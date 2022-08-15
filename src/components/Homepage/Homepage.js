import React, {useState} from "react";
import axios from "axios"
import "./Homepage.css"
import Loader from "../Loader/Loader";
import error from "../../images/error.png"

function Homepage() {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=9c7e874d0cdf450e17fe1cc7f36ad4ae`
    const searchLocation = (event) => {

        setIsLoading(true)
        axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
            setIsLoading(false)
            setErrorMessage('');
        })
            .catch(() => {
                setErrorMessage("Unable to fetch weather condition");
                setData('')
                setIsLoading(false);
                setLocation('')
            });

    }

    return (<>
        <div className="row homepage">
            <div className="col-lg-6 homepage_header">
                <h1>
                    PROVIDING YOU WITH UP TO DATE WEATHER FORECAST AROUND THE WORLD.
                </h1>
                <p>Accurate weather forecast . With extreme weather on the rise, its easy to receive weather
                    condition
                    information in your current location or other locations of your choice.</p>
                <form className="d-flex search_container" role="search">
                    <input type="search" placeholder="Enter location" name="search" value={location}
                           onChange={event => setLocation(event.target.value)}/>
                    <button className="btn btn-primary-success" type="submit" onClick={(e) => searchLocation()}
                            disabled={isLoading}>Search
                    </button>
                </form>
            </div>

            <div className="col-lg-6  weather_container ">
                {isLoading ? <Loader/> : data.url}
                {errorMessage &&
                    <div className="error"><img src={error} alt={errorMessage}/><h4>Oops, Something went wrong!</h4>
                        <p>{errorMessage}</p></div>}
                <div>{data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}

                </div>

                <h3>{data.name}</h3>
                <div>
                    {data.weather ? <h2>{data.weather[0].main}</h2> : null}
                </div>

                {data.name !== undefined &&
                    <div className="weather_properties">
                        <div>

                            <p>Feels Like</p>
                            {data.main ? <h5>{data.main.feels_like.toFixed()}°F </h5> : null}
                        </div>
                        <div>

                            <p>Humidity</p>
                            {data.main ? <h5>{data.main.humidity}%</h5> : null}
                        </div>
                        <div>

                            <p>Wind Speed</p>
                            {data.wind ? <h5>{data.wind.speed.toFixed()}MPH</h5> : null}
                        </div>
                    </div>}
            </div>
        </div>
    </>)
}

export default Homepage
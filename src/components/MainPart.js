import React from 'react';
import MainInfo from "./MainInfo";

const MainPart = (props) => {
    return(
        <div>
            <MainInfo temp={props.temp}
                      city={props.city}
                      country={props.country}
                      sunrise={props.sunrise}
                      sunset={props.sunset}
                      error={props.error}
                      sunTime={props.sunTime}
                      windspeed={props.windspeed}
                      humidity={props.humidity}
                      pressure={props.pressure}
                      deg={props.deg}
                      visibility={props.visibility}
                      feels_like={props.feels_like}
            />
        </div>
    )
};

export default MainPart;
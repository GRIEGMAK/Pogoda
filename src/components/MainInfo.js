import React from 'react';

const MainInfo = (props) => {
    return(
        <div className="infoWeath">
            {props.city && <div>
                <h3>{props.city}</h3>
                <div>{props.country}</div>
                <div>Температура: {props.temp} градусов Цельсия</div>
                <div>Ощущается как {props.feels_like}</div>
                <div>Солнечный день: {props.sunTime}</div>
                <div>А именно: c {props.sunrise} до {props.sunset}</div>
                <div>Ветер {props.windspeed}км/ч при направлении {props.deg}/360(Значение по компасу)</div>
                <div>Влажность: {props.humidity}% </div>
                <div>Давление: {Math.floor(props.pressure*100/133.3224)} мм.рт.ст</div>
                <div>Видимость: {props.visibility/1000}km</div>
            </div>
            }
            <div className="error">{props.error}</div>
        </div>
    )

};

export default MainInfo;
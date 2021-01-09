import React from 'react';
import HeaderInfo from "./HeaderInfo";
import MainPart from "./MainPart";
import Form from "./Form";

const API_KEY ='5712b8887160185aaa20b84fcd1da1c4';

class App extends React.Component {
        state = {
                temp: undefined,
                city: undefined,
                country: undefined,
                sunrise: undefined,
                sunset: undefined,
                sunTime: undefined,
                windspeed: undefined,
                humidity: undefined,
                pressure: undefined,
                deg: undefined,
                visibility:undefined,
                feels_like: undefined,
                error: undefined,
        }
        gettingWeather = async (e) => {
                e.preventDefault();
                const city = e.target.elements.city.value;
                if(city) {
                    const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
                    const data = await api_url.json();
                    if (data.cod === "404") {
                        this.setState({
                            temp: undefined,
                            city: undefined,
                            country: undefined,
                            sunrise: undefined,
                            sunTime: undefined,
                            sunset: undefined,
                            windspeed: undefined,
                            humidity: undefined,
                            pressure: undefined,
                            deg: undefined,
                            visibility:undefined,
                            feels_like: undefined,
                            error: "Проверьте название города или интернет соединение",
                        });
                    }
                    else {
                        let sunset = data.sys.sunset + data.timezone;
                        let sunset_date = Math.floor(sunset % 86400 / 3600) + ":" + Math.floor(sunset % 3600 / 60) + ":" + Math.floor(sunset % 60);
                        let sunrise = data.sys.sunrise + data.timezone;
                        let sunrise_date = Math.floor(sunrise % 86400 / 3600) + ":" + Math.floor(sunrise % 3600 / 60) + ":" + Math.floor(sunrise % 60)
                        let sunTime = sunset - sunrise;
                        let sunTime_date = Math.floor(sunTime % 86400 / 3600) + ":" + Math.floor(sunTime % 3600 / 60) + ":" + Math.floor(sunTime % 60)

                        this.setState({
                            temp: data.main.temp,
                            city: data.name,
                            country: data.sys.country,
                            sunrise: sunrise_date,
                            sunset: sunset_date,
                            sunTime: sunTime_date,
                            windspeed: data.wind.speed,
                            humidity: data.main.humidity,
                            pressure: data.main.pressure,
                            deg: data.wind.deg,
                            visibility:data.visibility,
                            feels_like: data.main.feels_like,
                            error: undefined,
                        });
                    }
                }
            else {
                    this.setState({
                        temp: undefined,
                        city: undefined,
                        country: undefined,
                        sunrise: undefined,
                        sunTime: undefined,
                        sunset: undefined,
                        windspeed: undefined,
                        humidity: undefined,
                        pressure: undefined,
                        deg: undefined,
                        visibility:undefined,
                        feels_like: undefined,
                        error: "Введите название города",
                    });
                }
        };

        render() {
                return (
                    <div className="wrapper">
                        <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-5 info">
                                    <HeaderInfo city={this.state.city}/>
                                </div>
                                <div className="col-sm-7 form">
                                    <Form weatherMethod={this.gettingWeather}/>
                                    <MainPart temp={this.state.temp}
                                              city={this.state.city}
                                              country={this.state.country}
                                              sunrise={this.state.sunrise}
                                              sunset={this.state.sunset}
                                              sunTime={this.state.sunTime}
                                              windspeed={this.state.windspeed}
                                              humidity={this.state.humidity}
                                              pressure={this.state.pressure}
                                              deg={this.state.deg}
                                              visibility={this.state.visibility}
                                              error={this.state.error}
                                              feels_like={this.state.feels_like}/>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                )
        }
}

export default App;
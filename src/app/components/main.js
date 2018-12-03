import React, { Component } from 'react';
import axios from 'axios';
import Timestamp from 'react-timestamp';

export default class MainSource extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTemp: {},
            locationInfo: {},
            generalInfo: {},
            darkSky: {},
            mapBox: {},
            location: null,
            locationLat: null,
            locationLon: null,
            weatherIconCurrently: null,
            weatherIconDay0: null,
            weatherIconDay1: null,
            weatherIconDay2: null,
            weatherIconDay3: null,
            weatherIconDay4: null,
            weatherIconDay5: null,
            weatherIconDay6: null,
            weatherIconDay7: null
        };
    }

    locationChange = (e) =>{
        this.setState({location: e.target.value});
    }
    latSet = (e) =>{
        this.setState({locationLat: e.target.value});
    }
    lonSet = (e) =>{
        this.setState({locationLon: e.target.value});
    }

    locationSubmit = (e) => {
        e.preventDefault();
        //Map Box API
        const mapBoxBaseUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
        const mapBoxlocation = this.state.location;
        const mapBoxParseInfo = ".json?access_token=";
        const mapBoxAPI = "pk.eyJ1IjoibXVycGh5bTc1NyIsImEiOiJjanAwbXhxZ3Ewa2ZqM3dvOTA1eHFseXU1In0.K2jhpceCSdXnnczqm65_BQ";
        axios.get(mapBoxBaseUrl + mapBoxlocation + mapBoxParseInfo + mapBoxAPI)
            .then(res => {
                this.setState({
                    mapBox: {
                        location: res.data.features[0].place_name,
                        latitude: res.data.features[0].center[1],
                        longitude: res.data.features[0].center[0],
                        coordinates: "Coordinates: " + "("+ res.data.features[0].center[1] + ", " + res.data.features[0].center[0] + ")"
                    }
                });
            })
    }

    handleSubmit = (e) => {
    e.preventDefault();
        // Dark Sky
        const darkSkyProxy = "https://cors-anywhere.herokuapp.com/";
        const darkSkyBaseUrl = "https://api.darksky.net/forecast/"
        const darkSkyAPI = "52c9fce56df8103a35f1f162841fa65e";
        const darkSkyLat = this.state.locationLat;
        const darkSkyLon = this.state.locationLon;
        const darkSkyCoordinates = darkSkyLat + "," + darkSkyLon;

        //Weather Icons
        const cloudyPic = "fas fa-cloud";
        const rainPic = "fas fa-cloud-rain";
        const windPic = "fas fa-wind";
        const sleetPic = "fas fa-cloud-showers-heavy";
        const snowPic = "fas fa-cloud-meatball";
        const atmospherePic = "fas fa-water";
        const clearDayPic = "fas fa-sun";
        const clearNightPic = "fas fa-moon";
        const partlyCloudyDay = "fas fa-cloud-sun";
        const partlyCloudyNight = "fas fa-cloud-moon";
        const arrowUp = "fas fa-arrow-up";
        const arrowDown = "fas fa-arrow-down";
        const umbrella = "fas fa-umbrella";
        const temperatureLow = "fas fa-temperature-low";
        const temperatureHigh = "fas fa-temperature-high";
        const temperatureLowAlt ="fas fa-thermometer-quarter";
        const temperatureHighAlt ="fas fa-thermometer-full";
        axios.get(darkSkyProxy + darkSkyBaseUrl + darkSkyAPI +'/' + darkSkyCoordinates)
                .then(res => {
                    let iconCurrently = res.data.currently.icon;
                    let iconDay0 = res.data.daily.data[0].icon;
                    let iconDay1 = res.data.daily.data[1].icon;
                    let iconDay2 = res.data.daily.data[2].icon;
                    let iconDay3 = res.data.daily.data[3].icon;
                    let iconDay4 = res.data.daily.data[4].icon;
                    let iconDay5 = res.data.daily.data[5].icon;
                    let iconDay6 = res.data.daily.data[6].icon;
                    let iconDay7 = res.data.daily.data[7].icon; //Weather Id
                        if(iconCurrently === 'clear-day') { //Current Weather Icons
                            this.setState({weatherIconCurrently: clearDayPic})
                        } else if(iconCurrently === 'clear-night') {
                            this.setState({weatherIconCurrently: clearNightPic});
                        } else if(iconCurrently === 'partly-cloudy-day') {
                            this.setState({weatherIconCurrently: partlyCloudyDay});
                        } else if(iconCurrently === 'partly-cloudy-night') {
                            this.setState({weatherIconCurrently: partlyCloudyNight});
                        } else if(iconCurrently === 'cloudy') {
                            this.setState({weatherIconCurrently: cloudyPic});
                        } else if(iconCurrently === 'rain') {
                            this.setState({weatherIconCurrently: rainPic});
                        } else if(iconCurrently === 'sleet') {
                            this.setState({weatherIconCurrently: sleetPic});
                        } else if(iconCurrently === 'snow') {
                            this.setState({weatherIconCurrently: snowPic});
                        } else if(iconCurrently === 'wind') {
                            this.setState({weatherIconCurrently: windPic});
                        } else if(iconCurrently === 'fog') {
                            this.setState({weatherIconCurrently: atmospherePic});
                        }
                        //Day 0(Today) Weather Icons
                        if(iconDay0 === 'clear-day') { 
                            this.setState({weatherIconDay0: clearDayPic})
                        } else if(iconDay0 === 'clear-night') {
                            this.setState({weatherIconDay0: clearNightPic});
                        } else if(iconDay0 === 'partly-cloudy-day') {
                            this.setState({weatherIconDay0: partlyCloudyDay});
                        } else if(iconDay0 === 'partly-cloudy-night') {
                            this.setState({weatherIconDay0: partlyCloudyNight});
                        } else if(iconDay0 === 'cloudy') {
                            this.setState({weatherIconDay0: cloudyPic});
                        } else if(iconDay0 === 'rain') {
                            this.setState({weatherIconDay0: rainPic});
                        } else if(iconDay0 === 'sleet') {
                            this.setState({weatherIconDay0: sleetPic});
                        } else if(iconDay0 === 'snow') {
                            this.setState({weatherIconDay0: snowPic});
                        } else if(iconDay0 === 'wind') {
                            this.setState({weatherIconDay0: windPic});
                        } else if(iconDay0 === 'fog') {
                            this.setState({weatherIconDay0: atmospherePic});
                        }
                        //Day 1 Weather Icons
                        if(iconDay1 === 'clear-day') { 
                            this.setState({weatherIconDay1: clearDayPic})
                        } else if(iconDay1 === 'clear-night') {
                            this.setState({weatherIconDay1: clearNightPic});
                        } else if(iconDay1 === 'partly-cloudy-day') {
                            this.setState({weatherIconDay1: partlyCloudyDay});
                        } else if(iconDay1 === 'partly-cloudy-night') {
                            this.setState({weatherIconDay1: partlyCloudyNight});
                        } else if(iconDay1 === 'cloudy') {
                            this.setState({weatherIconDay1: cloudyPic});
                        } else if(iconDay1 === 'rain') {
                            this.setState({weatherIconDay1: rainPic});
                        } else if(iconDay1 === 'sleet') {
                            this.setState({weatherIconDay1: sleetPic});
                        } else if(iconDay1 === 'snow') {
                            this.setState({weatherIconDay1: snowPic});
                        } else if(iconDay1 === 'wind') {
                            this.setState({weatherIconDay1: windPic});
                        } else if(iconDay1 === 'fog') {
                            this.setState({weatherIconDay1: atmospherePic});
                        }
                        //Day 2 Weather Icons
                        if(iconDay2 === 'clear-day') { 
                            this.setState({weatherIconDay2: clearDayPic})
                        } else if(iconDay2 === 'clear-night') {
                            this.setState({weatherIconDay2: clearNightPic});
                        } else if(iconDay2 === 'partly-cloudy-day') {
                            this.setState({weatherIconDay2: partlyCloudyDay});
                        } else if(iconDay2 === 'partly-cloudy-night') {
                            this.setState({weatherIconDay2: partlyCloudyNight});
                        } else if(iconDay2 === 'cloudy') {
                            this.setState({weatherIconDay2: cloudyPic});
                        } else if(iconDay2 === 'rain') {
                            this.setState({weatherIconDay2: rainPic});
                        } else if(iconDay2 === 'sleet') {
                            this.setState({weatherIconDay2: sleetPic});
                        } else if(iconDay2 === 'snow') {
                            this.setState({weatherIconDay2: snowPic});
                        } else if(iconDay2 === 'wind') {
                            this.setState({weatherIconDay2: windPic});
                        } else if(iconDay2 === 'fog') {
                            this.setState({weatherIconDay2: atmospherePic});
                        }
                        //Day 3 Weather Icons
                        if(iconDay3 === 'clear-day') { 
                            this.setState({weatherIconDay3: clearDayPic})
                        } else if(iconDay3 === 'clear-night') {
                            this.setState({weatherIconDay3: clearNightPic});
                        } else if(iconDay3 === 'partly-cloudy-day') {
                            this.setState({weatherIconDay3: partlyCloudyDay});
                        } else if(iconDay3 === 'partly-cloudy-night') {
                            this.setState({weatherIconDay3: partlyCloudyNight});
                        } else if(iconDay3 === 'cloudy') {
                            this.setState({weatherIconDay3: cloudyPic});
                        } else if(iconDay3 === 'rain') {
                            this.setState({weatherIconDay3: rainPic});
                        } else if(iconDay3 === 'sleet') {
                            this.setState({weatherIconDay3: sleetPic});
                        } else if(iconDay3 === 'snow') {
                            this.setState({weatherIconDay3: snowPic});
                        } else if(iconDay3 === 'wind') {
                            this.setState({weatherIconDay3: windPic});
                        } else if(iconDay3 === 'fog') {
                            this.setState({weatherIconDay3: atmospherePic});
                        }
                        //Day 4 Weather Icons
                        if(iconDay4 === 'clear-day') { 
                            this.setState({weatherIconDay4: clearDayPic})
                        } else if(iconDay4 === 'clear-night') {
                            this.setState({weatherIconDay4: clearNightPic});
                        } else if(iconDay4 === 'partly-cloudy-day') {
                            this.setState({weatherIconDay4: partlyCloudyDay});
                        } else if(iconDay4 === 'partly-cloudy-night') {
                            this.setState({weatherIconDay4: partlyCloudyNight});
                        } else if(iconDay4 === 'cloudy') {
                            this.setState({weatherIconDay4: cloudyPic});
                        } else if(iconDay4 === 'rain') {
                            this.setState({weatherIconDay4: rainPic});
                        } else if(iconDay4 === 'sleet') {
                            this.setState({weatherIconDay4: sleetPic});
                        } else if(iconDay4 === 'snow') {
                            this.setState({weatherIconDay4: snowPic});
                        } else if(iconDay4 === 'wind') {
                            this.setState({weatherIconDay4: windPic});
                        } else if(iconDay4 === 'fog') {
                            this.setState({weatherIconDay4: atmospherePic});
                        }
                        //Day 5 Weather Icons
                        if(iconDay5 === 'clear-day') { 
                            this.setState({weatherIconDay5: clearDayPic})
                        } else if(iconDay5 === 'clear-night') {
                            this.setState({weatherIconDay5: clearNightPic});
                        } else if(iconDay5 === 'partly-cloudy-day') {
                            this.setState({weatherIconDay5: partlyCloudyDay});
                        } else if(iconDay5 === 'partly-cloudy-night') {
                            this.setState({weatherIconDay5: partlyCloudyNight});
                        } else if(iconDay5 === 'cloudy') {
                            this.setState({weatherIconDay5: cloudyPic});
                        } else if(iconDay5 === 'rain') {
                            this.setState({weatherIconDay5: rainPic});
                        } else if(iconDay5 === 'sleet') {
                            this.setState({weatherIconDay5: sleetPic});
                        } else if(iconDay5 === 'snow') {
                            this.setState({weatherIconDay5: snowPic});
                        } else if(iconDay5 === 'wind') {
                            this.setState({weatherIconDay5: windPic});
                        } else if(iconDay5 === 'fog') {
                            this.setState({weatherIconDay5: atmospherePic});
                        }
                        //Day 6 Weather Icons
                        if(iconDay6 === 'clear-day') { 
                            this.setState({weatherIconDay6: clearDayPic})
                        } else if(iconDay6 === 'clear-night') {
                            this.setState({weatherIconDay6: clearNightPic});
                        } else if(iconDay6 === 'partly-cloudy-day') {
                            this.setState({weatherIconDay6: partlyCloudyDay});
                        } else if(iconDay6 === 'partly-cloudy-night') {
                            this.setState({weatherIconDay6: partlyCloudyNight});
                        } else if(iconDay6 === 'cloudy') {
                            this.setState({weatherIconDay6: cloudyPic});
                        } else if(iconDay6 === 'rain') {
                            this.setState({weatherIconDay6: rainPic});
                        } else if(iconDay6 === 'sleet') {
                            this.setState({weatherIconDay6: sleetPic});
                        } else if(iconDay6 === 'snow') {
                            this.setState({weatherIconDay6: snowPic});
                        } else if(iconDay6 === 'wind') {
                            this.setState({weatherIconDay6: windPic});
                        } else if(iconDay6 === 'fog') {
                            this.setState({weatherIconDay6: atmospherePic});
                        }
                        //Day 7 Weather Icons
                        if(iconDay7 === 'clear-day') { 
                            this.setState({weatherIconDay7: clearDayPic})
                        } else if(iconDay7 === 'clear-night') {
                            this.setState({weatherIconDay7: clearNightPic});
                        } else if(iconDay7 === 'partly-cloudy-day') {
                            this.setState({weatherIconDay7: partlyCloudyDay});
                        } else if(iconDay7 === 'partly-cloudy-night') {
                            this.setState({weatherIconDay7: partlyCloudyNight});
                        } else if(iconDay7 === 'cloudy') {
                            this.setState({weatherIconDay7: cloudyPic});
                        } else if(iconDay7 === 'rain') {
                            this.setState({weatherIconDay7: rainPic});
                        } else if(iconDay7 === 'sleet') {
                            this.setState({weatherIconDay1: sleetPic});
                        } else if(iconDay7 === 'snow') {
                            this.setState({weatherIconDay7: snowPic});
                        } else if(iconDay7 === 'wind') {
                            this.setState({weatherIconDay7: windPic});
                        } else if(iconDay7 === 'fog') {
                            this.setState({weatherIconDay7: atmospherePic});
                        }
                        
                    const tempIcon = " °F";
                    const sunriseTime = res.data.daily.data[0].sunriseTime;
                    const sunsetTime = res.data.daily.data[0].sunsetTime;
                    this.setState({
                        darkSky: {
                            // Current and Day 0 info "top have of page"
                            temp: Math.trunc(res.data.currently.temperature) + tempIcon,
                            humidity: Math.trunc(res.data.currently.humidity * 100) + "%",
                            windSpeed: Math.trunc(res.data.currently.windSpeed) + " mph",
                            rainChance: Math.trunc(res.data.daily.data[0].precipProbability * 100) + "%",
                            daySummary: res.data.daily.data[0].summary,
                            temperatureHigh: Math.trunc(res.data.daily.data[0].temperatureHigh) + tempIcon,
                            temperatureHighDay1: Math.trunc(res.data.daily.data[1].temperatureHigh) + tempIcon,
                            temperatureHighDay2: Math.trunc(res.data.daily.data[2].temperatureHigh) + tempIcon,
                            temperatureHighDay3: Math.trunc(res.data.daily.data[3].temperatureHigh) + tempIcon,
                            temperatureHighDay4: Math.trunc(res.data.daily.data[4].temperatureHigh) + tempIcon,
                            temperatureHighDay5: Math.trunc(res.data.daily.data[5].temperatureHigh) + tempIcon,
                            temperatureHighDay6: Math.trunc(res.data.daily.data[6].temperatureHigh) + tempIcon,
                            temperatureHighDay7: Math.trunc(res.data.daily.data[7].temperatureHigh) + tempIcon,
                            temperatureLow: Math.trunc(res.data.daily.data[0].temperatureLow) + tempIcon,
                            temperatureLowDay1: Math.trunc(res.data.daily.data[1].temperatureLow) + tempIcon,
                            temperatureLowDay2: Math.trunc(res.data.daily.data[2].temperatureLow) + tempIcon,
                            temperatureLowDay3: Math.trunc(res.data.daily.data[3].temperatureLow) + tempIcon,
                            temperatureLowDay4: Math.trunc(res.data.daily.data[4].temperatureLow) + tempIcon,
                            temperatureLowDay5: Math.trunc(res.data.daily.data[5].temperatureLow) + tempIcon,
                            temperatureLowDay6: Math.trunc(res.data.daily.data[6].temperatureLow) + tempIcon,
                            temperatureLowDay7: Math.trunc(res.data.daily.data[7].temperatureLow) + tempIcon,
                            // Time
                            sunriseAgo: <Timestamp time={sunriseTime} format='ago' includeDay/>,
                            sunriseTime: <Timestamp time={sunriseTime} format='time' includeDay/>,
                            sunsetAgo: <Timestamp time={sunsetTime} format='ago' includeDay/>,
                            sunsetTime: <Timestamp time={sunsetTime} format='time' includeDay/>,
                            // Icons
                            sunriseLogo: clearDayPic,
                            sunriseArrow: arrowUp,
                            sunsetArrow: arrowDown,
                            rainChanceUmbrella: umbrella,
                            highTemperatureLogo: temperatureHigh,
                            lowTemperatureLogo: temperatureLow,
                            highTemperatureLogoAlt: temperatureHighAlt,
                            lowTemperatureLogoAlt: temperatureLowAlt,
                            windLogo: windPic,
                            humidityLogo: atmospherePic,
                            // Titles
                            rainChanceUmbrellaTitle: "Precipitation",
                            todayHighTitle: "Today's High",
                            todayLowTitle: "Today's Low",
                            humidityTitle: "Humidity",
                            windTitle: "Wind Speed"                         
                        }
                    });
                })
        }


    render() {
        return (
            <div class="container-fluid">
                <div class="card">
                    <img class="logo mx-auto" src="./src/app/assets/images/Weather-or-Pop.svg" alt="Smiley face" height="90" width="90" /> {/* Logo */}
                    <div class="container-fluid"> {/* Top Section (Form Area) */}
                        <div class="row">
                            <form class="form-group col-sm-6" onSubmit={this.locationSubmit.bind(this)}> {/* Form Section (Location Input) */}
                                <input 
                                    type="text" 
                                    value={this.state.location} 
                                    onChange={this.locationChange} 
                                    class="form-control form-weatherOrPop" 
                                    name="Location" 
                                    id="locationName" 
                                    placeholder="Location"
                                />
                                <label class="coordinates-size">
                                    {this.state.mapBox.coordinates}
                                </label>
                            </form>
                            <form class="form-group col-sm-6" onSubmit={this.handleSubmit}> {/* Form Section (Coordinates Input) */}
                                <input 
                                    type="text" 
                                    value={this.state.locationLat} 
                                    onChange={this.latSet} 
                                    class="form-control form-weatherOrPop" 
                                    name="Latitude" 
                                    id="latitude" 
                                    placeholder="Latitude"
                                />
                                <input 
                                    type="text" 
                                    value={this.state.locationLon} 
                                    onChange={this.lonSet} 
                                    class="form-control form-weatherOrPop" 
                                    name="Longitude" 
                                    id="longitude" 
                                    placeholder="Longitude"
                                />
                                <button 
                                    type="button"
                                    onClick = {this.handleSubmit.bind(this)}
                                    class="btn btn-souse-extra btn-lg btn-block extra-button-font">
                                        FIND WEATHER
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="container-fluid"> {/* Middle Section (Results Area) */}
                        <div class="row">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-sm-6 pb-4"> {/* First Half of Middle Section */}
                                        <div class="row">
                                            <div class="locationTitle col-12">
                                                <h2 class="location-size">{this.state.mapBox.location}</h2>
                                            </div>
                                            <div class="currentTemp col-12">
                                                <div class="container-fluid">
                                                    <div class="row">
                                                        <div class="col-6 currentTempDegrees">
                                                            <h2 class="currentTemp-size">{this.state.darkSky.temp}</h2>
                                                        </div>
                                                        <div class="col-6 currentTempIcon">
                                                            <h1 class="currentTempIcon-size"><i class={this.state.weatherIconCurrently}></i></h1>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-12 summaryForDay">
                                                        <h3 class="summaryForDay-size">{this.state.darkSky.daySummary}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 pb-4"> {/* Second Half of Middle Section */}
                                        <div class="row"> {/*  Top Row (Second Half of Middle Section) */}
                                            <div class="col-4">
                                                <div class="row">
                                                    <div class="rainLogo col-12">
                                                        <div class="row rainCombo">
                                                            <h3 class="iconFont col-12"><i class={this.state.darkSky.rainChanceUmbrella}></i></h3>
                                                            <h3 class="dataFont col-12">{this.state.darkSky.rainChance}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="rainLogo col-12">
                                                        <div class="row rainCombo">
                                                            <h6 class="contentTitleFont col-12">{this.state.darkSky.rainChanceUmbrellaTitle}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4"></div>
                                            <div class="col-4">
                                                <div class="row">
                                                    <div class="sunriseLogo col-12">
                                                        <div class="row sunArrowCombo">
                                                            <h3 class="iconFont pr-1">
                                                                <i class={this.state.darkSky.sunriseLogo}></i>
                                                            </h3>
                                                            <h3 class="iconFont">
                                                                <i class={this.state.darkSky.sunriseArrow}></i>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div class="sunriseData col-12">
                                                        <div class="row">
                                                            <h3 class="dataFont col-12">{this.state.darkSky.sunriseTime}</h3>
                                                            <h6 class="contentTitleFont col-12">{this.state.darkSky.sunriseAgo}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row pt-4 pb-4"> {/*  Second Row (Second Half of Middle Section) */}
                                            <div class="col-12">
                                                <div class="row tempsHighLow">
                                                    <div class ="container-fluid">
                                                        <div class="col-12">
                                                            <div class="row">
                                                                <div class="temperatureDataHigh col-6">
                                                                    <div class="row tempCombo">
                                                                        <h3 class="iconFont col-12">
                                                                            <i class={this.state.darkSky.highTemperatureLogoAlt}></i>
                                                                        </h3>
                                                                        <h3 class="dataFont col-12">
                                                                            {this.state.darkSky.temperatureHigh}
                                                                        </h3>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="tempLogo col-12">
                                                                            <div class="row tempCombo">
                                                                                <h6 class="contentTitleFont col-12">{this.state.darkSky.todayHighTitle}</h6>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="temperatureDataLow col-6">
                                                                    <div class="row tempCombo">
                                                                        <h3 class="iconFont col-12">
                                                                            <i class={this.state.darkSky.lowTemperatureLogoAlt}></i>
                                                                        </h3>
                                                                        <h3 class="dataFont col-12">
                                                                            {this.state.darkSky.temperatureLow}
                                                                        </h3>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="tempLogo col-12">
                                                                            <div class="row tempCombo">
                                                                                <h6 class="contentTitleFont col-12">{this.state.darkSky.todayLowTitle}</h6>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>  
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row"> {/*  Third Row (Second Half of Middle Section) */}
                                            <div class="col-4">
                                                <div class="row">
                                                    <div class="humidityLogo col-12">
                                                        <div class="row humidityCombo">
                                                            <h3 class="iconFont col-12"><i class={this.state.darkSky.humidityLogo}></i></h3>
                                                            <h3 class="dataFont col-12">{this.state.darkSky.humidity}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="humidityLogo col-12">
                                                        <div class="row humidityCombo">
                                                            <h6 class="contentTitleFont col-12">{this.state.darkSky.humidityTitle}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="row">
                                                    <div class="windLogo col-12">
                                                        <div class="row windCombo">
                                                            <h3 class="iconFont col-12"><i class={this.state.darkSky.windLogo}></i></h3>
                                                            <h3 class="dataFont col-12">{this.state.darkSky.windSpeed}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="windLogo col-12">
                                                        <div class="row windCombo">
                                                            <h6 class="contentTitleFont col-12">{this.state.darkSky.windTitle}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="row">
                                                    <div class="sunriseLogo col-12">
                                                        <div class="row sunArrowCombo">
                                                            <h3 class="iconFont pr-1">
                                                                <i class={this.state.darkSky.sunriseLogo}></i>
                                                            </h3>
                                                            <h3 class="iconFont">
                                                                <i class={this.state.darkSky.sunsetArrow}></i>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div class="sunriseData col-12">
                                                        <div class="row">
                                                            <h3 class="dataFont col-12">{this.state.darkSky.sunsetTime}</h3>
                                                            <h6 class="contentTitleFont col-12">{this.state.darkSky.sunsetAgo}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid"> {/* Bottom Section (Forecast Area) */}
                        <div class="row"> 
                            <div class="col-12">
                                <div class="d-none d-lg-block"> {/* Forecast for Larger Sceens */}
                                    <div class="row">
                                        <div class="col-6"> {/* First 4 Days */}
                                            <div class="row">
                                                <div class="card card-forecast col-3"> {/* Day 0 */}
                                                    <h6 class="forecastTempIcon-size"><i class={this.state.weatherIconDay0}></i></h6>
                                                </div>
                                                <div class="card card-forecast col-3"> {/* Day 1 */}
                                                    <h6 class="forecastTempIcon-size"><i class={this.state.weatherIconDay1}></i></h6>
                                                </div>
                                                <div class="card card-forecast col-3"> {/* Day 2 */}
                                                    <h6 class="forecastTempIcon-size"><i class={this.state.weatherIconDay2}></i></h6>
                                                </div>
                                                <div class="card card-forecast col-3"> {/* Day 3 */}
                                                    <h6 class="forecastTempIcon-size"><i class={this.state.weatherIconDay3}></i></h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6"> {/* Last 4 Days */}
                                            <div class="row">
                                                <div class="card card-forecast col-3"> {/* Day 4 */}
                                                    <h6 class="forecastTempIcon-size"><i class={this.state.weatherIconDay4}></i></h6>
                                                </div>
                                                <div class="card card-forecast col-3"> {/* Day 5 */}
                                                    <h6 class="forecastTempIcon-size"><i class={this.state.weatherIconDay5}></i></h6>
                                                </div>
                                                <div class="card card-forecast col-3"> {/* Day 6 */}
                                                    <h6 class="forecastTempIcon-size"><i class={this.state.weatherIconDay6}></i></h6>
                                                </div>
                                                <div class="card card-forecast col-3"> {/* Day 7 */}
                                                    <h6 class="forecastTempIcon-size"><i class={this.state.weatherIconDay7}></i></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-lg-none"> {/* Forecast for Sceens smaller than "Large" */}
                                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <div class="card">
                                                <h1>Rooftop</h1>
                                            </div>
                                            <div class="carousel-caption active">
                                                <h5>Warm Weather</h5>
                                                <p>Art basel is coming.</p>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="card">
                                                <h1>Day 1 Weather</h1>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="card">
                                                <h1>Day 2 Weather</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          );
      }
}
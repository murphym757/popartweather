import React, { Component } from 'react';
import axios from 'axios';
import Timestamp from 'react-timestamp';

export default class MainSource extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTemp: {

            },
            locationInfo: {

            },
            generalInfo: {

            },
            darkSky: {

            },
            mapBox: {

            },
            temp: '',
            location: null,
            locationLat: null,
            locationLon: null,
            weatherIcon: ''
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
                    let icon = res.data.currently.icon; //Weather Id
                        if(icon === 'clear-day') {
                            this.setState({weatherIcon: clearDayPic})
                        } else if(icon === 'clear-night') {
                            this.setState({weatherIcon: clearNightPic});
                        } else if(icon === 'partly-cloudy-day') {
                            this.setState({weatherIcon: partlyCloudyDay});
                        } else if(icon === 'partly-cloudy-night') {
                            this.setState({weatherIcon: partlyCloudyNight});
                        } else if(icon === 'cloudy') {
                            this.setState({weatherIcon: cloudyPic});
                        } else if(icon === 'rain') {
                            this.setState({weatherIcon: rainPic});
                        } else if(icon === 'sleet') {
                            this.setState({weatherIcon: sleetPic});
                        } else if(icon === 'snow') {
                            this.setState({weatherIcon: snowPic});
                        } else if(icon === 'wind') {
                            this.setState({weatherIcon: windPic});
                        } else if(icon === 'fog') {
                            this.setState({weatherIcon: atmospherePic});
                        }
                        
                    const tempIcon = " °F";
                    const sunriseTime = res.data.daily.data[0].sunriseTime;
                    const sunsetTime = res.data.daily.data[0].sunsetTime;
                    this.setState({
                        darkSky: {
                            temp: Math.trunc(res.data.currently.temperature) + tempIcon,
                            humidity: Math.trunc(res.data.currently.humidity * 100) + "%",
                            windSpeed: Math.trunc(res.data.currently.windSpeed) + " mph",
                            rainChance: Math.trunc(res.data.currently.precipProbability * 100) + "%",
                            daySummary: res.data.daily.data[0].summary,
                            temperatureHigh: Math.trunc(res.data.daily.data[0].temperatureHigh) + tempIcon,
                            temperatureLow: Math.trunc(res.data.daily.data[0].temperatureLow) + tempIcon,
                            sunriseAgo: <Timestamp time={sunriseTime} format='ago' includeDay/>,
                            sunriseTime: <Timestamp time={sunriseTime} format='time' includeDay/>,
                            sunsetAgo: <Timestamp time={sunsetTime} format='ago' includeDay/>,
                            sunsetTime: <Timestamp time={sunsetTime} format='time' includeDay/>,
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
                    <img class="logo mx-auto" src="./src/app/assets/images/Weather-or-Pop.svg" alt="Smiley face" height="90" width="90" />
                    <div class="container">
                        <div class="row"> 
                            <form class="form-group col-sm-6" onSubmit={this.locationSubmit.bind(this)}>
                                <input 
                                    type="text" 
                                    value={this.state.location} 
                                    onChange={this.locationChange} 
                                    class="form-control form-weatherOrPop" 
                                    name="Location" 
                                    id="locationName" 
                                    placeholder="Location"
                                />
                                <label>
                                    {this.state.mapBox.coordinates}
                                </label>
                            </form>
                            <form class="form-group col-sm-6" onSubmit={this.handleSubmit}>
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
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-sm-6 pb-4"> {/* First Half of Middle Section */}
                                        <div class="row">
                                            <div class="locationTitle col-12">
                                                <h2 class="location-size">{this.state.mapBox.location}</h2>
                                            </div>
                                            <div class="currentTemp col-12">
                                                <div class="row">
                                                    <div class="col-6 currentTempDegrees">
                                                        <h2 class="currentTemp-size">{this.state.darkSky.temp}</h2>
                                                    </div>
                                                    <div class="col-6 currentTempIcon">
                                                        <h1 class="currentTempIcon-size"><i class={this.state.weatherIcon}></i></h1>
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
                    <div class="row">
                        <div class="col-12">
                        </div>
                    </div>
                </div>
            </div>
          );
      }
}



  
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
                        longitude: res.data.features[0].center[0]
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
                    this.setState({
                        darkSky: {
                            temp: Math.trunc(res.data.currently.temperature) + tempIcon,
                            daySummary: res.data.daily.data[0].summary,
                            sunriseAgo: <Timestamp time={sunriseTime} format='ago' includeDay/>,
                            sunriseTime: <Timestamp time={sunriseTime} format='time' includeDay/>,
                            sunriseLogo: clearDayPic,
                            sunriseArrow: arrowUp
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
                                    Coordinates: {this.state.mapBox.latitude + ", " + this.state.mapBox.longitude}
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
                                    <div class="col-sm-6"> {/* First Half of Middle Section */}
                                        <div class="row">
                                            <div class="locationTitle col-12">
                                                <h1 class="location-size">{this.state.mapBox.location}</h1>
                                            </div>
                                            <div class="currentTemp col-12">
                                                <div class="row">
                                                    <div class="col-6 currentTempDegrees">
                                                        <h1 class="currentTempIcon-size">{this.state.darkSky.temp}</h1>
                                                    </div>
                                                    <div class="col-6 currentTempIcon">
                                                        <h1 class="currentTempIcon-size"><i class={this.state.weatherIcon}></i></h1>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-12 summaryForDay">
                                                        <h1 class="summaryForDay-size">{this.state.darkSky.daySummary}</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6"> {/* Second Half of Middle Section */}
                                        <div class="col-8"></div>
                                        <div class="col-4">
                                            <div class="row">
                                                <div class="sunriseLogo col-12">
                                                    <div class="row sunArrowCombo">
                                                        <h1 class="sunriseLogo-size">
                                                            <i class={this.state.darkSky.sunriseLogo}></i>
                                                        </h1>
                                                        <h1 class="sunriseLogo-size">
                                                            <i class={this.state.darkSky.sunriseArrow}></i>
                                                        </h1>
                                                    </div>
                                                </div>
                                                <div class="sunriseData col-12">
                                                    <div class="row">
                                                    <h6 class="sunriseSunset-size col-12">{this.state.darkSky.sunriseTime}</h6>
                                                    <h6 class="sunriseSunset-size col-12">{this.state.darkSky.sunriseAgo}</h6>
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



  
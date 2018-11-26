import React, { Component } from 'react';
import axios from 'axios';

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
            cityName: null,
            weatherIcon: ''
        };
    }

    cityChange = (e) =>{
        this.setState({cityName: e.target.value});
    }

      /* Test URL (Does Work)
      http://api.openweathermap.org/data/2.5/find?q=Miami&units=imperial&appid=ae0766143a31a2063be8be2843baf16c
      */
    handleSubmit = (e) => {
    e.preventDefault();
        const baseUrl = 'http://api.openweathermap.org/data/2.5/find?q=';
        const City = this.state.cityName;
        const unitsApiID = '&units=imperial&appid=';
        const APIKEY = "ae0766143a31a2063be8be2843baf16c";

        //Weather Icons
        const cloudyPic = "fas fa-cloud";
        const drizzlePic = "fas fa-cloud-rain";
        const thunderPic = "fas fa-bolt";
        const rainPic = "fas fa-cloud-showers-heavy";
        const snowPic = "fas fa-cloud-meatball";
        const atmospherePic = "fas fa-water";
        const clearPic = "fas fa-sun";
        axios.get(''+ baseUrl + City + unitsApiID + APIKEY +'')
            .then(res => {
                if(res.data.cod === '404') {
                    this.setState({
                        errorCode: '404',
                        errorMessage: "https://media.giphy.com/media/wYyTHMm50f4Dm/giphy.gif"
                    })
                } else {
                    let weatherId = res.data.list[0].weather[0].id; //Weather Id
                    if(weatherId <= 232) {
                        this.setState({weatherIcon: thunderPic})
                    } else if(weatherId >= 300 && weatherId <= 499) {
                        this.setState({weatherIcon: drizzlePic});
                    } else if(weatherId >= 500 && weatherId <= 531) {
                        this.setState({weatherIcon: rainPic});
                    } else if(weatherId >= 600 && weatherId <= 622) {
                        this.setState({weatherIcon: snowPic});
                    } else if(weatherId >= 701 && weatherId <= 781) {
                        this.setState({weatherIcon: atmospherePic});
                    } else if(weatherId === 800) {
                        this.setState({weatherIcon: clearPic});
                    } else if(weatherId >= 801 && weatherId <= 804) {
                        this.setState({weatherIcon: cloudyPic});
                    }
                }
                this.setState({
                    currentTemp: {
                        temp: res.data.list[0].main.temp, //Current Temperature
                        tempMin: res.data.list[0].main.temp_min, //Hourly Low Temperature
                        tempMax: res.data.list[0].main.temp_max, //Hourly High Temperature
                        humidity: res.data.list[0].main.humidity + "%", //Humidity
                        windSpeed: res.data.list[0].wind.speed + " mph", //Windspeed
                    },
                    locationInfo: {
                        cityName: res.data.list[0].name, //City Name
                        country: res.data.list[0].sys.country, //Country Abbreviation
                        location: res.data.list[0].name + ", " + res.data.list[0].sys.country //Full Location
                    },
                    generalInfo: {
                        coordLat: res.data.list[0].coord.lat, //Latitude 
                        coordLon: res.data.list[0].coord.lon, //Longitude
                        weatherMain: res.data.list[0].weather[0].main, //Description
                        weatherDescription: res.data.list[0].weather[0].description //Detailed Description
                    }
                });
            })
}


    render() {
        const tempNow = Math.trunc(this.state.currentTemp.temp);
        return (
            <div class="container">
                <div class="card">
                <img class="logo mx-auto" src="./src/app/assets/images/Weather-or-Pop.svg" alt="Smiley face" height="90" width="90" />
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            value={this.state.cityName} 
                            onChange={this.cityChange} 
                            class="form-control form-weatherOrPop" 
                            name="City" 
                            id="cityName" 
                            placeholder="City"
                        />
                    </form>
                    <div class="container-fluid">
                        <div class="row"> {/*Top Row*/}
                            <div class="card card1 col-6 rounded-0"> {/*Top Left Card*/}
                                <h1 class="locationName-card1 pb-2">{this.state.locationInfo.location}</h1>
                                <h1 class="currentTemp-card1">{tempNow} &#176;F</h1>
                                <div class="row">
                                    <h2 class="col-12 weatherPic-card1"><i class={this.state.weatherIcon}></i></h2>
                                    <h3 class="col-12 weatherDescription-card1">{this.state.generalInfo.weatherDescription}</h3>
                                </div>
                                <div class="row">
                                    <div class="col-6 coords-card1">
                                        {this.state.generalInfo.coordLat}
                                    </div>
                                    <div class="col-6 coords-card1">
                                        {this.state.generalInfo.coordLon}
                                    </div>
                                </div>
                            </div>
                            <div class="card card2 col-6 rounded-0"> {/*Top Right Card*/}
                                <h1 class="locationName-card2 pb-2">{this.state.locationInfo.location}</h1>
                                <h1 class="currentTemp-card2">{tempNow} &#176;F</h1>
                                <div class="row">
                                    <h2 class="col-12 weatherPic-card2"><i class={this.state.weatherIcon}></i></h2>
                                    <h3 class="col-12 weatherDescription-card2">{this.state.generalInfo.weatherDescription}</h3>
                                </div>
                                <div class="row">
                                    <div class="col-6 coords-card2">
                                        {this.state.generalInfo.coordLat}
                                    </div>
                                    <div class="col-6 coords-card2">
                                        {this.state.generalInfo.coordLon}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row"> {/*Bottom Row*/}
                            <div class="card card3 col-6 rounded-0"> {/*Bottom Left Card*/}
                                <h1 class="locationName-card3 pb-2">{this.state.locationInfo.location}</h1>
                                <h1 class="currentTemp-card3">{tempNow} &#176;F</h1>
                                <div class="row">
                                    <h2 class="col-12 weatherPic-card3"><i class={this.state.weatherIcon}></i></h2>
                                    <h3 class="col-12 weatherDescription-card3">{this.state.generalInfo.weatherDescription}</h3>
                                </div>
                                <div class="row">
                                    <div class="col-6 coords-card3">
                                        {this.state.generalInfo.coordLat}
                                    </div>
                                    <div class="col-6 coords-card3">
                                        {this.state.generalInfo.coordLon}
                                    </div>
                                </div>
                            </div>
                            <div class="card card4 col-6 rounded-0"> {/*Bottom Right Card*/}
                                <h1 class="locationName-card4 pb-2">{this.state.locationInfo.location}</h1>
                                <h1 class="currentTemp-card4">{tempNow} &#176;F</h1>
                                <div class="row">
                                    <h2 class="col-12 weatherPic-card4"><i class={this.state.weatherIcon}></i></h2>
                                    <h3 class="col-12 weatherDescription-card4">{this.state.generalInfo.weatherDescription}</h3>
                                </div>
                                <div class="row">
                                    <div class="col-6 coords-card4">
                                        {this.state.generalInfo.coordLat}
                                    </div>
                                    <div class="col-6 coords-card4">
                                        {this.state.generalInfo.coordLon}
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



  
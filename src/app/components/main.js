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
            cityName: {
                name: "Miami"
            },
            weatherIcon: ''
        };
    }

    

    componentDidMount() {
        this.generalTempInfo();
      }

      /* Test URL (Does Work)
      http://api.openweathermap.org/data/2.5/find?q=Miami&units=imperial&appid=ae0766143a31a2063be8be2843baf16c
      */
    generalTempInfo() {
        const baseUrl = 'http://api.openweathermap.org/data/2.5/find?q=';
        const City = this.state.cityName.name;
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
            <div>
                <p>I will display &#8457;</p>
                <h1>{tempNow} &#8457;</h1>
                <form>
                    <input 
                        /*type="text" 
                        value={this.state.username} 
                        onChange={this.loginUsername} 
                        class="form-control form-souse" 
                        name="username" 
                        id="loginUsername" 
                        placeholder="Username" */
                    />
                </form>
                <i class={this.state.weatherIcon}></i>
            </div>
          );
      }
}



  
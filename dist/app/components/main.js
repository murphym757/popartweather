"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _reactTimestamp = _interopRequireDefault(require("react-timestamp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MainSource =
/*#__PURE__*/
function (_Component) {
  _inherits(MainSource, _Component);

  function MainSource(props) {
    var _this;

    _classCallCheck(this, MainSource);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainSource).call(this, props));

    _this.locationChange = function (e) {
      _this.setState({
        location: e.target.value
      });
    };

    _this.latSet = function (e) {
      _this.setState({
        locationLat: e.target.value
      });
    };

    _this.lonSet = function (e) {
      _this.setState({
        locationLon: e.target.value
      });
    };

    _this.locationSubmit = function (e) {
      e.preventDefault(); //Map Box API

      var mapBoxBaseUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
      var mapBoxlocation = _this.state.location;
      var mapBoxParseInfo = ".json?access_token=";
      var mapBoxAPI = "pk.eyJ1IjoibXVycGh5bTc1NyIsImEiOiJjanAwbXhxZ3Ewa2ZqM3dvOTA1eHFseXU1In0.K2jhpceCSdXnnczqm65_BQ";

      _axios.default.get(mapBoxBaseUrl + mapBoxlocation + mapBoxParseInfo + mapBoxAPI).then(function (res) {
        _this.setState({
          mapBox: {
            location: res.data.features[0].place_name,
            latitude: res.data.features[0].center[1],
            longitude: res.data.features[0].center[0],
            coordinates: "Coordinates: " + "(" + res.data.features[0].center[1] + ", " + res.data.features[0].center[0] + ")"
          }
        });
      });
    };

    _this.handleSubmit = function (e) {
      e.preventDefault(); // Dark Sky

      var darkSkyProxy = "https://cors-anywhere.herokuapp.com/";
      var darkSkyBaseUrl = "https://api.darksky.net/forecast/";
      var darkSkyAPI = "52c9fce56df8103a35f1f162841fa65e";
      var darkSkyLat = _this.state.locationLat;
      var darkSkyLon = _this.state.locationLon;
      var darkSkyCoordinates = darkSkyLat + "," + darkSkyLon; //Weather Icons

      var cloudyPic = "fas fa-cloud";
      var rainPic = "fas fa-cloud-rain";
      var windPic = "fas fa-wind";
      var sleetPic = "fas fa-cloud-showers-heavy";
      var snowPic = "fas fa-cloud-meatball";
      var atmospherePic = "fas fa-water";
      var clearDayPic = "fas fa-sun";
      var clearNightPic = "fas fa-moon";
      var partlyCloudyDay = "fas fa-cloud-sun";
      var partlyCloudyNight = "fas fa-cloud-moon";
      var arrowUp = "fas fa-arrow-up";
      var arrowDown = "fas fa-arrow-down";
      var umbrella = "fas fa-umbrella";
      var temperatureLow = "fas fa-temperature-low";
      var temperatureHigh = "fas fa-temperature-high";
      var temperatureLowAlt = "fas fa-thermometer-quarter";
      var temperatureHighAlt = "fas fa-thermometer-full";

      _axios.default.get(darkSkyProxy + darkSkyBaseUrl + darkSkyAPI + '/' + darkSkyCoordinates).then(function (res) {
        var iconCurrently = res.data.currently.icon;
        var iconDay0 = res.data.daily.data[0].icon;
        var iconDay1 = res.data.daily.data[1].icon;
        var iconDay2 = res.data.daily.data[2].icon;
        var iconDay3 = res.data.daily.data[3].icon;
        var iconDay4 = res.data.daily.data[4].icon;
        var iconDay5 = res.data.daily.data[5].icon;
        var iconDay6 = res.data.daily.data[6].icon;
        var iconDay7 = res.data.daily.data[7].icon; //Weather Id

        if (iconCurrently === 'clear-day') {
          //Current Weather Icons
          _this.setState({
            weatherIconCurrently: clearDayPic
          });
        } else if (iconCurrently === 'clear-night') {
          _this.setState({
            weatherIconCurrently: clearNightPic
          });
        } else if (iconCurrently === 'partly-cloudy-day') {
          _this.setState({
            weatherIconCurrently: partlyCloudyDay
          });
        } else if (iconCurrently === 'partly-cloudy-night') {
          _this.setState({
            weatherIconCurrently: partlyCloudyNight
          });
        } else if (iconCurrently === 'cloudy') {
          _this.setState({
            weatherIconCurrently: cloudyPic
          });
        } else if (iconCurrently === 'rain') {
          _this.setState({
            weatherIconCurrently: rainPic
          });
        } else if (iconCurrently === 'sleet') {
          _this.setState({
            weatherIconCurrently: sleetPic
          });
        } else if (iconCurrently === 'snow') {
          _this.setState({
            weatherIconCurrently: snowPic
          });
        } else if (iconCurrently === 'wind') {
          _this.setState({
            weatherIconCurrently: windPic
          });
        } else if (iconCurrently === 'fog') {
          _this.setState({
            weatherIconCurrently: atmospherePic
          });
        } //Day 0(Today) Weather Icons


        if (iconDay0 === 'clear-day') {
          _this.setState({
            weatherIconDay0: clearDayPic
          });
        } else if (iconDay0 === 'clear-night') {
          _this.setState({
            weatherIconDay0: clearNightPic
          });
        } else if (iconDay0 === 'partly-cloudy-day') {
          _this.setState({
            weatherIconDay0: partlyCloudyDay
          });
        } else if (iconDay0 === 'partly-cloudy-night') {
          _this.setState({
            weatherIconDay0: partlyCloudyNight
          });
        } else if (iconDay0 === 'cloudy') {
          _this.setState({
            weatherIconDay0: cloudyPic
          });
        } else if (iconDay0 === 'rain') {
          _this.setState({
            weatherIconDay0: rainPic
          });
        } else if (iconDay0 === 'sleet') {
          _this.setState({
            weatherIconDay0: sleetPic
          });
        } else if (iconDay0 === 'snow') {
          _this.setState({
            weatherIconDay0: snowPic
          });
        } else if (iconDay0 === 'wind') {
          _this.setState({
            weatherIconDay0: windPic
          });
        } else if (iconDay0 === 'fog') {
          _this.setState({
            weatherIconDay0: atmospherePic
          });
        } //Day 1 Weather Icons


        if (iconDay1 === 'clear-day') {
          _this.setState({
            weatherIconDay1: clearDayPic
          });
        } else if (iconDay1 === 'clear-night') {
          _this.setState({
            weatherIconDay1: clearNightPic
          });
        } else if (iconDay1 === 'partly-cloudy-day') {
          _this.setState({
            weatherIconDay1: partlyCloudyDay
          });
        } else if (iconDay1 === 'partly-cloudy-night') {
          _this.setState({
            weatherIconDay1: partlyCloudyNight
          });
        } else if (iconDay1 === 'cloudy') {
          _this.setState({
            weatherIconDay1: cloudyPic
          });
        } else if (iconDay1 === 'rain') {
          _this.setState({
            weatherIconDay1: rainPic
          });
        } else if (iconDay1 === 'sleet') {
          _this.setState({
            weatherIconDay1: sleetPic
          });
        } else if (iconDay1 === 'snow') {
          _this.setState({
            weatherIconDay1: snowPic
          });
        } else if (iconDay1 === 'wind') {
          _this.setState({
            weatherIconDay1: windPic
          });
        } else if (iconDay1 === 'fog') {
          _this.setState({
            weatherIconDay1: atmospherePic
          });
        } //Day 2 Weather Icons


        if (iconDay2 === 'clear-day') {
          _this.setState({
            weatherIconDay2: clearDayPic
          });
        } else if (iconDay2 === 'clear-night') {
          _this.setState({
            weatherIconDay2: clearNightPic
          });
        } else if (iconDay2 === 'partly-cloudy-day') {
          _this.setState({
            weatherIconDay2: partlyCloudyDay
          });
        } else if (iconDay2 === 'partly-cloudy-night') {
          _this.setState({
            weatherIconDay2: partlyCloudyNight
          });
        } else if (iconDay2 === 'cloudy') {
          _this.setState({
            weatherIconDay2: cloudyPic
          });
        } else if (iconDay2 === 'rain') {
          _this.setState({
            weatherIconDay2: rainPic
          });
        } else if (iconDay2 === 'sleet') {
          _this.setState({
            weatherIconDay2: sleetPic
          });
        } else if (iconDay2 === 'snow') {
          _this.setState({
            weatherIconDay2: snowPic
          });
        } else if (iconDay2 === 'wind') {
          _this.setState({
            weatherIconDay2: windPic
          });
        } else if (iconDay2 === 'fog') {
          _this.setState({
            weatherIconDay2: atmospherePic
          });
        } //Day 3 Weather Icons


        if (iconDay3 === 'clear-day') {
          _this.setState({
            weatherIconDay3: clearDayPic
          });
        } else if (iconDay3 === 'clear-night') {
          _this.setState({
            weatherIconDay3: clearNightPic
          });
        } else if (iconDay3 === 'partly-cloudy-day') {
          _this.setState({
            weatherIconDay3: partlyCloudyDay
          });
        } else if (iconDay3 === 'partly-cloudy-night') {
          _this.setState({
            weatherIconDay3: partlyCloudyNight
          });
        } else if (iconDay3 === 'cloudy') {
          _this.setState({
            weatherIconDay3: cloudyPic
          });
        } else if (iconDay3 === 'rain') {
          _this.setState({
            weatherIconDay3: rainPic
          });
        } else if (iconDay3 === 'sleet') {
          _this.setState({
            weatherIconDay3: sleetPic
          });
        } else if (iconDay3 === 'snow') {
          _this.setState({
            weatherIconDay3: snowPic
          });
        } else if (iconDay3 === 'wind') {
          _this.setState({
            weatherIconDay3: windPic
          });
        } else if (iconDay3 === 'fog') {
          _this.setState({
            weatherIconDay3: atmospherePic
          });
        } //Day 4 Weather Icons


        if (iconDay4 === 'clear-day') {
          _this.setState({
            weatherIconDay4: clearDayPic
          });
        } else if (iconDay4 === 'clear-night') {
          _this.setState({
            weatherIconDay4: clearNightPic
          });
        } else if (iconDay4 === 'partly-cloudy-day') {
          _this.setState({
            weatherIconDay4: partlyCloudyDay
          });
        } else if (iconDay4 === 'partly-cloudy-night') {
          _this.setState({
            weatherIconDay4: partlyCloudyNight
          });
        } else if (iconDay4 === 'cloudy') {
          _this.setState({
            weatherIconDay4: cloudyPic
          });
        } else if (iconDay4 === 'rain') {
          _this.setState({
            weatherIconDay4: rainPic
          });
        } else if (iconDay4 === 'sleet') {
          _this.setState({
            weatherIconDay4: sleetPic
          });
        } else if (iconDay4 === 'snow') {
          _this.setState({
            weatherIconDay4: snowPic
          });
        } else if (iconDay4 === 'wind') {
          _this.setState({
            weatherIconDay4: windPic
          });
        } else if (iconDay4 === 'fog') {
          _this.setState({
            weatherIconDay4: atmospherePic
          });
        } //Day 5 Weather Icons


        if (iconDay5 === 'clear-day') {
          _this.setState({
            weatherIconDay5: clearDayPic
          });
        } else if (iconDay5 === 'clear-night') {
          _this.setState({
            weatherIconDay5: clearNightPic
          });
        } else if (iconDay5 === 'partly-cloudy-day') {
          _this.setState({
            weatherIconDay5: partlyCloudyDay
          });
        } else if (iconDay5 === 'partly-cloudy-night') {
          _this.setState({
            weatherIconDay5: partlyCloudyNight
          });
        } else if (iconDay5 === 'cloudy') {
          _this.setState({
            weatherIconDay5: cloudyPic
          });
        } else if (iconDay5 === 'rain') {
          _this.setState({
            weatherIconDay5: rainPic
          });
        } else if (iconDay5 === 'sleet') {
          _this.setState({
            weatherIconDay5: sleetPic
          });
        } else if (iconDay5 === 'snow') {
          _this.setState({
            weatherIconDay5: snowPic
          });
        } else if (iconDay5 === 'wind') {
          _this.setState({
            weatherIconDay5: windPic
          });
        } else if (iconDay5 === 'fog') {
          _this.setState({
            weatherIconDay5: atmospherePic
          });
        } //Day 6 Weather Icons


        if (iconDay6 === 'clear-day') {
          _this.setState({
            weatherIconDay6: clearDayPic
          });
        } else if (iconDay6 === 'clear-night') {
          _this.setState({
            weatherIconDay6: clearNightPic
          });
        } else if (iconDay6 === 'partly-cloudy-day') {
          _this.setState({
            weatherIconDay6: partlyCloudyDay
          });
        } else if (iconDay6 === 'partly-cloudy-night') {
          _this.setState({
            weatherIconDay6: partlyCloudyNight
          });
        } else if (iconDay6 === 'cloudy') {
          _this.setState({
            weatherIconDay6: cloudyPic
          });
        } else if (iconDay6 === 'rain') {
          _this.setState({
            weatherIconDay6: rainPic
          });
        } else if (iconDay6 === 'sleet') {
          _this.setState({
            weatherIconDay6: sleetPic
          });
        } else if (iconDay6 === 'snow') {
          _this.setState({
            weatherIconDay6: snowPic
          });
        } else if (iconDay6 === 'wind') {
          _this.setState({
            weatherIconDay6: windPic
          });
        } else if (iconDay6 === 'fog') {
          _this.setState({
            weatherIconDay6: atmospherePic
          });
        } //Day 7 Weather Icons


        if (iconDay7 === 'clear-day') {
          _this.setState({
            weatherIconDay7: clearDayPic
          });
        } else if (iconDay7 === 'clear-night') {
          _this.setState({
            weatherIconDay7: clearNightPic
          });
        } else if (iconDay7 === 'partly-cloudy-day') {
          _this.setState({
            weatherIconDay7: partlyCloudyDay
          });
        } else if (iconDay7 === 'partly-cloudy-night') {
          _this.setState({
            weatherIconDay7: partlyCloudyNight
          });
        } else if (iconDay7 === 'cloudy') {
          _this.setState({
            weatherIconDay7: cloudyPic
          });
        } else if (iconDay7 === 'rain') {
          _this.setState({
            weatherIconDay7: rainPic
          });
        } else if (iconDay7 === 'sleet') {
          _this.setState({
            weatherIconDay1: sleetPic
          });
        } else if (iconDay7 === 'snow') {
          _this.setState({
            weatherIconDay7: snowPic
          });
        } else if (iconDay7 === 'wind') {
          _this.setState({
            weatherIconDay7: windPic
          });
        } else if (iconDay7 === 'fog') {
          _this.setState({
            weatherIconDay7: atmospherePic
          });
        }

        var tempIcon = " °F";
        var sunriseTime = res.data.daily.data[0].sunriseTime;
        var sunsetTime = res.data.daily.data[0].sunsetTime;
        var dateDay0 = res.data.daily.data[0].time;
        var dateDay1 = res.data.daily.data[1].time;
        var dateDay2 = res.data.daily.data[2].time;
        var dateDay3 = res.data.daily.data[3].time;
        var dateDay4 = res.data.daily.data[4].time;
        var dateDay5 = res.data.daily.data[5].time;
        var dateDay6 = res.data.daily.data[6].time;
        var dateDay7 = res.data.daily.data[7].time;

        _this.setState({
          darkSky: {
            // Current and Day 0 info "top have of page"
            temp: Math.trunc(res.data.currently.temperature) + tempIcon,
            humidity: Math.trunc(res.data.currently.humidity * 100) + "%",
            windSpeed: Math.trunc(res.data.currently.windSpeed) + " mph",
            daySummary: res.data.daily.data[0].summary,
            // Rain Percentage
            rainChanceDay0: Math.trunc(res.data.daily.data[0].precipProbability * 100) + "%",
            rainChanceDay1: Math.trunc(res.data.daily.data[1].precipProbability * 100) + "%",
            rainChanceDay2: Math.trunc(res.data.daily.data[2].precipProbability * 100) + "%",
            rainChanceDay3: Math.trunc(res.data.daily.data[3].precipProbability * 100) + "%",
            rainChanceDay4: Math.trunc(res.data.daily.data[4].precipProbability * 100) + "%",
            rainChanceDay5: Math.trunc(res.data.daily.data[5].precipProbability * 100) + "%",
            rainChanceDay6: Math.trunc(res.data.daily.data[6].precipProbability * 100) + "%",
            rainChanceDay7: Math.trunc(res.data.daily.data[7].precipProbability * 100) + "%",
            // Temperature Highs
            temperatureHigh: Math.trunc(res.data.daily.data[0].temperatureHigh) + tempIcon,
            temperatureHighDay1: Math.trunc(res.data.daily.data[1].temperatureHigh) + tempIcon,
            temperatureHighDay2: Math.trunc(res.data.daily.data[2].temperatureHigh) + tempIcon,
            temperatureHighDay3: Math.trunc(res.data.daily.data[3].temperatureHigh) + tempIcon,
            temperatureHighDay4: Math.trunc(res.data.daily.data[4].temperatureHigh) + tempIcon,
            temperatureHighDay5: Math.trunc(res.data.daily.data[5].temperatureHigh) + tempIcon,
            temperatureHighDay6: Math.trunc(res.data.daily.data[6].temperatureHigh) + tempIcon,
            temperatureHighDay7: Math.trunc(res.data.daily.data[7].temperatureHigh) + tempIcon,
            // Temperature Lows
            temperatureLow: Math.trunc(res.data.daily.data[0].temperatureLow) + tempIcon,
            temperatureLowDay1: Math.trunc(res.data.daily.data[1].temperatureLow) + tempIcon,
            temperatureLowDay2: Math.trunc(res.data.daily.data[2].temperatureLow) + tempIcon,
            temperatureLowDay3: Math.trunc(res.data.daily.data[3].temperatureLow) + tempIcon,
            temperatureLowDay4: Math.trunc(res.data.daily.data[4].temperatureLow) + tempIcon,
            temperatureLowDay5: Math.trunc(res.data.daily.data[5].temperatureLow) + tempIcon,
            temperatureLowDay6: Math.trunc(res.data.daily.data[6].temperatureLow) + tempIcon,
            temperatureLowDay7: Math.trunc(res.data.daily.data[7].temperatureLow) + tempIcon,
            // Current Sunrise/Sunset Times
            sunriseAgo: _react.default.createElement(_reactTimestamp.default, {
              time: sunriseTime,
              format: "ago",
              includeDay: true
            }),
            sunriseTime: _react.default.createElement(_reactTimestamp.default, {
              time: sunriseTime,
              format: "time",
              includeDay: true
            }),
            sunsetAgo: _react.default.createElement(_reactTimestamp.default, {
              time: sunsetTime,
              format: "ago",
              includeDay: true
            }),
            sunsetTime: _react.default.createElement(_reactTimestamp.default, {
              time: sunsetTime,
              format: "time",
              includeDay: true
            }),
            // Dates
            day0Time: _react.default.createElement(_reactTimestamp.default, {
              time: dateDay0,
              format: "date",
              includeDay: true
            }),
            day1Time: _react.default.createElement(_reactTimestamp.default, {
              time: dateDay1,
              format: "date",
              includeDay: true
            }),
            day2Time: _react.default.createElement(_reactTimestamp.default, {
              time: dateDay2,
              format: "date",
              includeDay: true
            }),
            day3Time: _react.default.createElement(_reactTimestamp.default, {
              time: dateDay3,
              format: "date",
              includeDay: true
            }),
            day4Time: _react.default.createElement(_reactTimestamp.default, {
              time: dateDay4,
              format: "date",
              includeDay: true
            }),
            day5Time: _react.default.createElement(_reactTimestamp.default, {
              time: dateDay5,
              format: "date",
              includeDay: true
            }),
            day6Time: _react.default.createElement(_reactTimestamp.default, {
              time: dateDay6,
              format: "date",
              includeDay: true
            }),
            day7Time: _react.default.createElement(_reactTimestamp.default, {
              time: dateDay7,
              format: "date",
              includeDay: true
            }),
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
      });
    };

    _this.state = {
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
    return _this;
  }

  _createClass(MainSource, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        class: "container-fluid"
      }, _react.default.createElement("div", {
        class: "card"
      }, _react.default.createElement("img", {
        class: "logo mx-auto pt-2 pb-2",
        src: "./src/app/assets/images/PopArtWeatherLogo.svg",
        alt: "Logo",
        height: "240",
        width: "240"
      }), " ", _react.default.createElement("div", {
        class: "container-fluid"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("form", {
        class: "form-group col-sm-6",
        onSubmit: this.locationSubmit.bind(this)
      }, " ", _react.default.createElement("input", {
        type: "text",
        value: this.state.location,
        onChange: this.locationChange,
        class: "form-control form-weatherOrPop",
        name: "Location",
        id: "locationName",
        placeholder: "Location"
      }), _react.default.createElement("label", {
        class: "coordinates-size"
      }, this.state.mapBox.coordinates)), _react.default.createElement("form", {
        class: "form-group col-sm-6",
        onSubmit: this.handleSubmit
      }, " ", _react.default.createElement("input", {
        type: "text",
        value: this.state.locationLat,
        onChange: this.latSet,
        class: "form-control form-weatherOrPop",
        name: "Latitude",
        id: "latitude",
        placeholder: "Latitude"
      }), _react.default.createElement("input", {
        type: "text",
        value: this.state.locationLon,
        onChange: this.lonSet,
        class: "form-control form-weatherOrPop",
        name: "Longitude",
        id: "longitude",
        placeholder: "Longitude"
      }), _react.default.createElement("button", {
        type: "button",
        onClick: this.handleSubmit.bind(this),
        class: "btn btn-popartButton btn-lg btn-block extra-button-font"
      }, "FIND WEATHER")))), _react.default.createElement("div", {
        class: "container-fluid"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "col-12"
      }, _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "col-sm-6 pb-4"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "locationTitle col-12"
      }, _react.default.createElement("h2", {
        class: "location-size"
      }, this.state.mapBox.location)), _react.default.createElement("div", {
        class: "currentTemp col-12"
      }, _react.default.createElement("div", {
        class: "container-fluid"
      }, _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "col-6 currentTempDegrees"
      }, _react.default.createElement("h2", {
        class: "currentTemp-size"
      }, this.state.darkSky.temp)), _react.default.createElement("div", {
        class: "col-6 currentTempIcon"
      }, _react.default.createElement("h1", {
        class: "currentTempIcon-size"
      }, _react.default.createElement("i", {
        class: this.state.weatherIconCurrently
      }))))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "col-12 summaryForDay"
      }, _react.default.createElement("h3", {
        class: "summaryForDay-size"
      }, this.state.darkSky.daySummary)))))), _react.default.createElement("div", {
        class: "col-sm-6 pb-4"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, " ", _react.default.createElement("div", {
        class: "col-4"
      }, _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "rainLogo col-12"
      }, _react.default.createElement("div", {
        class: "row rainCombo"
      }, _react.default.createElement("h3", {
        class: "iconFont col-12"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.rainChanceUmbrella
      })), _react.default.createElement("h3", {
        class: "dataFont col-12"
      }, this.state.darkSky.rainChanceDay0)))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "rainLogo col-12"
      }, _react.default.createElement("div", {
        class: "row rainCombo"
      }, _react.default.createElement("h6", {
        class: "contentTitleFont col-12"
      }, this.state.darkSky.rainChanceUmbrellaTitle))))), _react.default.createElement("div", {
        class: "col-4"
      }), _react.default.createElement("div", {
        class: "col-4"
      }, _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "sunriseLogo col-12"
      }, _react.default.createElement("div", {
        class: "row sunArrowCombo"
      }, _react.default.createElement("h3", {
        class: "iconFont pr-1"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.sunriseLogo
      })), _react.default.createElement("h3", {
        class: "iconFont"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.sunriseArrow
      })))), _react.default.createElement("div", {
        class: "sunriseData col-12"
      }, _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h3", {
        class: "dataFont col-12"
      }, this.state.darkSky.sunriseTime), _react.default.createElement("h6", {
        class: "contentTitleFont col-12"
      }, this.state.darkSky.sunriseAgo)))))), _react.default.createElement("div", {
        class: "row pt-4 pb-4"
      }, " ", _react.default.createElement("div", {
        class: "col-12"
      }, _react.default.createElement("div", {
        class: "row tempsHighLow"
      }, _react.default.createElement("div", {
        class: "container-fluid"
      }, _react.default.createElement("div", {
        class: "col-12"
      }, _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "temperatureDataHigh col-6"
      }, _react.default.createElement("div", {
        class: "row tempCombo"
      }, _react.default.createElement("h3", {
        class: "iconFont col-12"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.highTemperatureLogoAlt
      })), _react.default.createElement("h3", {
        class: "dataFont col-12"
      }, this.state.darkSky.temperatureHigh)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "tempLogo col-12"
      }, _react.default.createElement("div", {
        class: "row tempCombo"
      }, _react.default.createElement("h6", {
        class: "contentTitleFont col-12"
      }, this.state.darkSky.todayHighTitle))))), _react.default.createElement("div", {
        class: "temperatureDataLow col-6"
      }, _react.default.createElement("div", {
        class: "row tempCombo"
      }, _react.default.createElement("h3", {
        class: "iconFont col-12"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.lowTemperatureLogoAlt
      })), _react.default.createElement("h3", {
        class: "dataFont col-12"
      }, this.state.darkSky.temperatureLow)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "tempLogo col-12"
      }, _react.default.createElement("div", {
        class: "row tempCombo"
      }, _react.default.createElement("h6", {
        class: "contentTitleFont col-12"
      }, this.state.darkSky.todayLowTitle))))))))))), _react.default.createElement("div", {
        class: "row"
      }, " ", _react.default.createElement("div", {
        class: "col-4"
      }, _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "humidityLogo col-12"
      }, _react.default.createElement("div", {
        class: "row humidityCombo"
      }, _react.default.createElement("h3", {
        class: "iconFont col-12"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.humidityLogo
      })), _react.default.createElement("h3", {
        class: "dataFont col-12"
      }, this.state.darkSky.humidity)))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "humidityLogo col-12"
      }, _react.default.createElement("div", {
        class: "row humidityCombo"
      }, _react.default.createElement("h6", {
        class: "contentTitleFont col-12"
      }, this.state.darkSky.humidityTitle))))), _react.default.createElement("div", {
        class: "col-4"
      }, _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "windLogo col-12"
      }, _react.default.createElement("div", {
        class: "row windCombo"
      }, _react.default.createElement("h3", {
        class: "iconFont col-12"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.windLogo
      })), _react.default.createElement("h3", {
        class: "dataFont col-12"
      }, this.state.darkSky.windSpeed)))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "windLogo col-12"
      }, _react.default.createElement("div", {
        class: "row windCombo"
      }, _react.default.createElement("h6", {
        class: "contentTitleFont col-12"
      }, this.state.darkSky.windTitle))))), _react.default.createElement("div", {
        class: "col-4"
      }, _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "sunriseLogo col-12"
      }, _react.default.createElement("div", {
        class: "row sunArrowCombo"
      }, _react.default.createElement("h3", {
        class: "iconFont pr-1"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.sunriseLogo
      })), _react.default.createElement("h3", {
        class: "iconFont"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.sunsetArrow
      })))), _react.default.createElement("div", {
        class: "sunriseData col-12"
      }, _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h3", {
        class: "dataFont col-12"
      }, this.state.darkSky.sunsetTime), _react.default.createElement("h6", {
        class: "contentTitleFont col-12"
      }, this.state.darkSky.sunsetAgo))))))))))), _react.default.createElement("div", {
        class: "container-fluid"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "col-12"
      }, _react.default.createElement("div", {
        class: "d-none d-lg-block"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "col-6"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "card card-forecast col-3 rounded-0"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastData-size forecastTempIcon-size col-12"
      }, this.state.darkSky.day0Time)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.highTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureHigh)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.lowTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureLow)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h1", {
        class: "forecastTempIcon-size forecastMainTempIcon-size col-12"
      }, _react.default.createElement("i", {
        class: this.state.weatherIconDay0
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.rainChanceUmbrella
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.rainChanceDay0))), _react.default.createElement("div", {
        class: "card card-forecast col-3 rounded-0"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastData-size forecastTempIcon-size col-12"
      }, this.state.darkSky.day1Time)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.highTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureHighDay1)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.lowTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureLowDay1)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h1", {
        class: "forecastTempIcon-size forecastMainTempIcon-size col-12"
      }, _react.default.createElement("i", {
        class: this.state.weatherIconDay1
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.rainChanceUmbrella
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.rainChanceDay1))), _react.default.createElement("div", {
        class: "card card-forecast col-3 rounded-0"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastData-size forecastTempIcon-size col-12"
      }, this.state.darkSky.day2Time)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.highTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureHighDay2)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.lowTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureLowDay2)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h1", {
        class: "forecastTempIcon-size forecastMainTempIcon-size col-12"
      }, _react.default.createElement("i", {
        class: this.state.weatherIconDay2
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.rainChanceUmbrella
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.rainChanceDay2))), _react.default.createElement("div", {
        class: "card card-forecast col-3 rounded-0"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastData-size forecastTempIcon-size col-12"
      }, this.state.darkSky.day3Time)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.highTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureHighDay3)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.lowTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureLowDay3)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h1", {
        class: "forecastTempIcon-size forecastMainTempIcon-size col-12"
      }, _react.default.createElement("i", {
        class: this.state.weatherIconDay3
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.rainChanceUmbrella
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.rainChanceDay3))))), _react.default.createElement("div", {
        class: "col-6"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "card card-forecast col-3 rounded-0"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastData-size forecastTempIcon-size col-12"
      }, this.state.darkSky.day4Time)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.highTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureHighDay4)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.lowTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureLowDay4)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h1", {
        class: "forecastTempIcon-size forecastMainTempIcon-size col-12"
      }, _react.default.createElement("i", {
        class: this.state.weatherIconDay4
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.rainChanceUmbrella
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.rainChanceDay4))), _react.default.createElement("div", {
        class: "card card-forecast col-3 rounded-0"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastData-size forecastTempIcon-size col-12"
      }, this.state.darkSky.day5Time)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.highTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureHighDay5)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.lowTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureLowDay5)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h1", {
        class: "forecastTempIcon-size forecastMainTempIcon-size col-12"
      }, _react.default.createElement("i", {
        class: this.state.weatherIconDay5
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.rainChanceUmbrella
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.rainChanceDay5))), _react.default.createElement("div", {
        class: "card card-forecast col-3 rounded-0"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastData-size forecastTempIcon-size col-12"
      }, this.state.darkSky.day6Time)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.highTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureHighDay6)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.lowTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureLowDay6)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h1", {
        class: "forecastTempIcon-size forecastMainTempIcon-size col-12"
      }, _react.default.createElement("i", {
        class: this.state.weatherIconDay6
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.rainChanceUmbrella
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.rainChanceDay6))), _react.default.createElement("div", {
        class: "card card-forecast col-3 rounded-0"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastData-size forecastTempIcon-size col-12"
      }, this.state.darkSky.day7Time)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.highTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureHighDay7)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.lowTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureLowDay7)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h1", {
        class: "forecastTempIcon-size forecastMainTempIcon-size col-12"
      }, _react.default.createElement("i", {
        class: this.state.weatherIconDay7
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.rainChanceUmbrella
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.rainChanceDay7))))))), _react.default.createElement("div", {
        class: "d-lg-none"
      }, " ", _react.default.createElement("div", {
        id: "carouselLandscapeControls",
        class: "carousel slide d-none d-md-block",
        "data-ride": "carousel"
      }, " ", _react.default.createElement("ol", {
        class: "carousel-indicators"
      }, _react.default.createElement("li", {
        "data-target": "#carouselExampleIndicators",
        "data-slide-to": "0",
        class: "active"
      }), _react.default.createElement("li", {
        "data-target": "#carouselExampleIndicators",
        "data-slide-to": "1"
      })), _react.default.createElement("div", {
        class: "carousel-inner"
      }, _react.default.createElement("div", {
        class: "carousel-item active"
      }, _react.default.createElement("div", {
        class: "card"
      }, _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "card card-forecast col-3 rounded-0"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastData-size forecastTempIcon-size col-12"
      }, this.state.darkSky.day0Time)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.highTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureHigh)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.lowTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureLow)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h1", {
        class: "forecastTempIcon-size forecastMainTempIcon-size col-12"
      }, _react.default.createElement("i", {
        class: this.state.weatherIconDay0
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.rainChanceUmbrella
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.rainChanceDay0))), _react.default.createElement("div", {
        class: "card card-forecast col-3 rounded-0"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastData-size forecastTempIcon-size col-12"
      }, this.state.darkSky.day1Time)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.highTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureHighDay1)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.lowTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureLowDay1)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h1", {
        class: "forecastTempIcon-size forecastMainTempIcon-size col-12"
      }, _react.default.createElement("i", {
        class: this.state.weatherIconDay1
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.rainChanceUmbrella
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.rainChanceDay1))), _react.default.createElement("div", {
        class: "card card-forecast col-3 rounded-0"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastData-size forecastTempIcon-size col-12"
      }, this.state.darkSky.day2Time)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.highTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureHighDay2)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.lowTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureLowDay2)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h1", {
        class: "forecastTempIcon-size forecastMainTempIcon-size col-12"
      }, _react.default.createElement("i", {
        class: this.state.weatherIconDay2
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.rainChanceUmbrella
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.rainChanceDay2))), _react.default.createElement("div", {
        class: "card card-forecast col-3 rounded-0"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastData-size forecastTempIcon-size col-12"
      }, this.state.darkSky.day3Time)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.highTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureHighDay3)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.lowTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureLowDay3)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h1", {
        class: "forecastTempIcon-size forecastMainTempIcon-size col-12"
      }, _react.default.createElement("i", {
        class: this.state.weatherIconDay3
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.rainChanceUmbrella
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.rainChanceDay3)))))), _react.default.createElement("div", {
        class: "carousel-item"
      }, _react.default.createElement("div", {
        class: "card"
      }, _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "card card-forecast col-3 rounded-0"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastData-size forecastTempIcon-size col-12"
      }, this.state.darkSky.day4Time)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.highTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureHighDay4)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.lowTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureLowDay4)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h1", {
        class: "forecastTempIcon-size forecastMainTempIcon-size col-12"
      }, _react.default.createElement("i", {
        class: this.state.weatherIconDay4
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.rainChanceUmbrella
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.rainChanceDay4))), _react.default.createElement("div", {
        class: "card card-forecast col-3 rounded-0"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastData-size forecastTempIcon-size col-12"
      }, this.state.darkSky.day5Time)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.highTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureHighDay5)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.lowTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureLowDay5)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h1", {
        class: "forecastTempIcon-size forecastMainTempIcon-size col-12"
      }, _react.default.createElement("i", {
        class: this.state.weatherIconDay5
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.rainChanceUmbrella
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.rainChanceDay5))), _react.default.createElement("div", {
        class: "card card-forecast col-3 rounded-0"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastData-size forecastTempIcon-size col-12"
      }, this.state.darkSky.day6Time)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.highTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureHighDay6)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.lowTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureLowDay6)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h1", {
        class: "forecastTempIcon-size forecastMainTempIcon-size col-12"
      }, _react.default.createElement("i", {
        class: this.state.weatherIconDay6
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.rainChanceUmbrella
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.rainChanceDay6))), _react.default.createElement("div", {
        class: "card card-forecast col-3 rounded-0"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastData-size forecastTempIcon-size col-12"
      }, this.state.darkSky.day7Time)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.highTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureHighDay7)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.lowTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureLowDay7)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h1", {
        class: "forecastTempIcon-size forecastMainTempIcon-size col-12"
      }, _react.default.createElement("i", {
        class: this.state.weatherIconDay7
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.rainChanceUmbrella
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.rainChanceDay7))))))), _react.default.createElement("a", {
        class: "carousel-control-prev",
        href: "#carouselLandscapeControls",
        role: "button",
        "data-slide": "prev"
      }, _react.default.createElement("span", {
        class: "carousel-control-prev-icon",
        "aria-hidden": "true"
      }), _react.default.createElement("span", {
        class: "sr-only"
      }, "Previous")), _react.default.createElement("a", {
        class: "carousel-control-next",
        href: "#carouselLandscapeControls",
        role: "button",
        "data-slide": "next"
      }, _react.default.createElement("span", {
        class: "carousel-control-next-icon",
        "aria-hidden": "true"
      }), _react.default.createElement("span", {
        class: "sr-only"
      }, "Next"))), _react.default.createElement("div", {
        id: "carouselExampleIndicators",
        class: "carousel slide d-md-none",
        "data-ride": "carousel"
      }, " ", _react.default.createElement("ol", {
        class: "carousel-indicators"
      }, _react.default.createElement("li", {
        "data-target": "#carouselExampleIndicators",
        "data-slide-to": "0",
        class: "active"
      }), _react.default.createElement("li", {
        "data-target": "#carouselExampleIndicators",
        "data-slide-to": "1"
      }), _react.default.createElement("li", {
        "data-target": "#carouselExampleIndicators",
        "data-slide-to": "2"
      }), _react.default.createElement("li", {
        "data-target": "#carouselExampleIndicators",
        "data-slide-to": "3"
      })), _react.default.createElement("div", {
        class: "carousel-inner"
      }, _react.default.createElement("div", {
        class: "carousel-item active"
      }, _react.default.createElement("div", {
        class: "card"
      }, _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "card card-forecast col-6 rounded-0"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastData-size forecastTempIcon-size col-12"
      }, this.state.darkSky.day0Time)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.highTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureHigh)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.lowTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureLow)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h1", {
        class: "forecastTempIcon-size forecastMainTempIcon-size col-12"
      }, _react.default.createElement("i", {
        class: this.state.weatherIconDay0
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.rainChanceUmbrella
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.rainChanceDay0))), _react.default.createElement("div", {
        class: "card card-forecast col-6 rounded-0"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastData-size forecastTempIcon-size col-12"
      }, this.state.darkSky.day1Time)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.highTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureHighDay1)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.lowTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureLowDay1)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h1", {
        class: "forecastTempIcon-size forecastMainTempIcon-size col-12"
      }, _react.default.createElement("i", {
        class: this.state.weatherIconDay1
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.rainChanceUmbrella
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.rainChanceDay1)))))), _react.default.createElement("div", {
        class: "carousel-item"
      }, _react.default.createElement("div", {
        class: "card"
      }, _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "card card-forecast col-6 rounded-0"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastData-size forecastTempIcon-size col-12"
      }, this.state.darkSky.day2Time)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.highTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureHighDay2)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.lowTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureLowDay2)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h1", {
        class: "forecastTempIcon-size forecastMainTempIcon-size col-12"
      }, _react.default.createElement("i", {
        class: this.state.weatherIconDay2
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.rainChanceUmbrella
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.rainChanceDay2))), _react.default.createElement("div", {
        class: "card card-forecast col-6 rounded-0"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastData-size forecastTempIcon-size col-12"
      }, this.state.darkSky.day3Time)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.highTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureHighDay3)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.lowTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureLowDay3)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h1", {
        class: "forecastTempIcon-size forecastMainTempIcon-size col-12"
      }, _react.default.createElement("i", {
        class: this.state.weatherIconDay3
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.rainChanceUmbrella
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.rainChanceDay3)))))), _react.default.createElement("div", {
        class: "carousel-item"
      }, _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "card card-forecast col-6 rounded-0"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastData-size forecastTempIcon-size col-12"
      }, this.state.darkSky.day4Time)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.highTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureHighDay4)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.lowTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureLowDay4)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h1", {
        class: "forecastTempIcon-size forecastMainTempIcon-size col-12"
      }, _react.default.createElement("i", {
        class: this.state.weatherIconDay4
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.rainChanceUmbrella
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.rainChanceDay4))), _react.default.createElement("div", {
        class: "card card-forecast col-6 rounded-0"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastData-size forecastTempIcon-size col-12"
      }, this.state.darkSky.day5Time)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.highTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureHighDay5)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.lowTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureLowDay5)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h1", {
        class: "forecastTempIcon-size forecastMainTempIcon-size col-12"
      }, _react.default.createElement("i", {
        class: this.state.weatherIconDay5
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.rainChanceUmbrella
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.rainChanceDay5))))), _react.default.createElement("div", {
        class: "carousel-item"
      }, _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "card card-forecast col-6 rounded-0"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastData-size forecastTempIcon-size col-12"
      }, this.state.darkSky.day6Time)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.highTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureHighDay6)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.lowTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureLowDay6)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h1", {
        class: "forecastTempIcon-size forecastMainTempIcon-size col-12"
      }, _react.default.createElement("i", {
        class: this.state.weatherIconDay6
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.rainChanceUmbrella
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.rainChanceDay6))), _react.default.createElement("div", {
        class: "card card-forecast col-6 rounded-0"
      }, " ", _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastData-size forecastTempIcon-size col-12"
      }, this.state.darkSky.day7Time)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.highTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureHighDay7)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.lowTemperatureLogoAlt
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.temperatureLowDay7)), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h1", {
        class: "forecastTempIcon-size forecastMainTempIcon-size col-12"
      }, _react.default.createElement("i", {
        class: this.state.weatherIconDay7
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h6", {
        class: "forecastIcon-size col-3"
      }, _react.default.createElement("i", {
        class: this.state.darkSky.rainChanceUmbrella
      })), _react.default.createElement("h6", {
        class: "forecastData-size col-9"
      }, this.state.darkSky.rainChanceDay7)))))), _react.default.createElement("a", {
        class: "carousel-control-prev",
        href: "#carouselExampleIndicators",
        role: "button",
        "data-slide": "prev"
      }, _react.default.createElement("span", {
        class: "carousel-control-prev-icon",
        "aria-hidden": "true"
      }), _react.default.createElement("span", {
        class: "sr-only"
      }, "Previous")), _react.default.createElement("a", {
        class: "carousel-control-next",
        href: "#carouselExampleIndicators",
        role: "button",
        "data-slide": "next"
      }, _react.default.createElement("span", {
        class: "carousel-control-next-icon",
        "aria-hidden": "true"
      }), _react.default.createElement("span", {
        class: "sr-only"
      }, "Next")))))))));
    }
  }]);

  return MainSource;
}(_react.Component);

exports.default = MainSource;
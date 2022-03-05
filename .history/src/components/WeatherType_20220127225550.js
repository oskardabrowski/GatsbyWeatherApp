import React from 'react';
import {WiDayThunderstorm, WiCloudy, WiDaySunnyOvercast, WiNightAltCloudy, WiDaySunny, WiMoonAltFull, WiDayFog, WiDaySnow, WiDayRain, WiDayRainMix} from 'react-icons/wi';

export default class Weather {
    constructor(id="", clouds="", description="", temperature="", feels="", pressure="", humidity="", windSpeed="", date="", coords="", hours="", country="", name="", windDeg="") {
        this.id = id;
        this.clouds = clouds;
        this.description = description;
        this.temperature = temperature;
        this.feels = feels;
        this.pressure = pressure;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.date = date;
        this.coords = coords;
        this.hours = hours;
        this.country = country;
        this.name = name;
        this.windDeg = windDeg;
    }

    findIco(hours) {
        if(this.id >= 200 && this.id < 300) {
            return <WiDayThunderstorm />; // storm
        } else if(this.id >= 300 && this.id < 500) {
            return <WiDayRainMix />; //rain
        } else if(this.id >= 500 && this.id < 600) {
            return <WiDayRain />; //rain
        } else if(this.id >= 600 && this.id < 700) {
            return <WiDaySnow />; //snow
        } else if(this.id >= 700 && this.id < 800) {
            return <WiDayFog />; //fog
        } else if(this.id == 800 && hours <= 6) {
            return <WiMoonAltFull />; // full moon
        } else if(this.id == 800 && hours < 22) {
            return <WiDaySunny />; // sunny
        } else if(this.id == 800 && hours >= 22) {
            return <WiMoonAltFull />; // full moon
        } else if(this.id == 801 && hours <= 6) {
            return <WiNightAltCloudy />; // coudy moon
        } else if(this.id == 801 && hours < 22) {
            return <WiDaySunnyOvercast />; // cloudy sun
        } else if(this.id == 801 && hours >= 22) {
            return <WiNightAltCloudy />; // cloudy moon
        } else if(this.id > 801) {
            return <WiCloudy />; // cloud
        }
    }

    findWind() {
        if(this.windDeg > 337.5 && this.windSpeed < 22.5) {
            return 'Północny';
        } else if(this.windDeg > 22.5 && this.windSpeed < 67.5) {
            return 'Północno-Wschodni';
        } else if(this.windDeg > 67.5 && this.windSpeed < 112.5) {
            return 'Wschodni';
        } else if(this.windDeg > 112.5 && this.windSpeed < 157.5) {
            return 'Południowo-Wschodni';
        } else if(this.windDeg > 157.5 && this.windSpeed < 202.5) {
            return 'Południowy';
        } else if(this.windDeg > 202.5 && this.windSpeed < 247.5) {
            return 'Południowo-Zachodni';
        } else if(this.windDeg > 247.5 && this.windSpeed < 292.5) {
            return 'Zachodni';
        } else if(this.windDeg > 292.5 && this.windSpeed < 292.5) {
            return 'Północno-Zachodni';
        }
    }
}
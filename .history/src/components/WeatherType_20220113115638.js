import React from 'react';
import {WiDayThunderstorm,WiNightAltCloudy, WiDaySunny, WiMoonAltFull, WiDayFog, WiDaySnow, WiDayRain, WiDayRainMix} from 'react-icons/wi';

export default class Weather {
    constructor(id="", clouds="", description="", temperature="", feels="", pressure="", humidity="", windSpeed="", date="", coords="") {
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
            return <WiDayThunderstorm />; // coudy moon
        } else if(this.id == 801 && hours < 22) {
            return <WiDayThunderstorm />; // cloudy sun
        } else if(this.id == 801 && hours >= 22) {
            return <WiDayThunderstorm />; // cloudy moon
        } else if(this.id > 801) {
            return <WiDayThunderstorm />; // cloud
        }
    }
}
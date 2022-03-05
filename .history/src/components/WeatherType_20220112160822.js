import React from 'react';
import {WiDayThunderstorm} from 'react-icons/wi';

export default class Weather {
    constructor(id="", description="", temperature="", feels="", pressure="", humidity="", windSpeed="", date="") {
        this.id = id;
        this.description = description;
        this.temperature = temperature;
        this.feels = feels;
        this.pressure = pressure;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.date = date;
    }

    findIco(hours) {
        if(this.id >= 200 && this.id < 300) {
            return <WiDayThunderstorm />; // storm
        } else if(this.id >= 300 && this.id < 500) {
            return <WiDayThunderstorm />; //rain
        } else if(this.id >= 500 && this.id < 600) {
            return <WiDayThunderstorm />; //rain
        } else if(this.id >= 600 && this.id < 700) {
            return <WiDayThunderstorm />; //snow
        } else if(this.id >= 700 && this.id < 800) {
            return <WiDayThunderstorm />; //fog
        } else if(this.id == 800 && hours <= 6) {
            return <WiDayThunderstorm />; // full moon
        } else if(this.id == 800 && hours < 22) {
            return <WiDayThunderstorm />; // sunny
        } else if(this.id == 800 && hours >= 22) {
            return <WiDayThunderstorm />; // full moon
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
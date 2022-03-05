import {WiDayThunderstorm} from 'react-icons/wi';


export class DayWeather {
    constructor(id, description, temperature, date) {
        this.id = id;
        this.description = description;
        this.temperature = temperature;
        this.date = date;
    }

    findIco(hours) {
        if(this.id >= 200 && this.id < 300) {
            return <WiDayThunderstorm />;
        } else if(this.id >= 300 && this.id < 500) {
            return "img/icons/rain.svg#rain"; //rain
        } else if(this.id >= 500 && this.id < 600) {
            return "img/icons/rain.svg#rain"; // rain
        } else if(this.id >= 600 && this.id < 700) {
            return "img/icons/snowflake.svg#snow"; // snow
        } else if(this.id >= 700 && this.id < 800) {
            return "img/icons/mist.svg#fog"; // fog
        } else if(this.id == 800 && hours <= 6) {
            return "img/icons/moon-phase.svg#moon"; // full moon
        } else if(this.id == 800 && hours < 22) {
            return "img/icons/sunny.svg#sunny"; // sunny
        } else if(this.id == 800 && hours >= 22) {
            return "img/icons/moon-phase.svg#moon"; //half moon
        } else if(this.id == 801 && hours <= 6) {
            return "img/icons/fewcloudsmoon.svg#fewmoon"; // cloudy moon
        } else if(this.id == 801 && hours < 22) {
            return "img/icons/fewcloudssunny.svg#fewsunny"; // cloudy sun
        } else if(this.id == 801 && hours >= 22) {
            return "img/icons/fewcloudsmoon.svg#fewmoon"; // cloudy moon
        } else if(this.id > 801) {
            return "img/icons/cloud-computing.svg#cloud"; // cloud
        }
    }
}

export class CityWeather {
    constructor(id, description, temperature, feels, pressure, humidity, windSpeed, date) {
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
            return "img/icons/thunderstorm.svg#storm"; // storm
        } else if(this.id >= 300 && this.id < 500) {
            return "img/icons/rain.svg#rain"; //rain
        } else if(this.id >= 500 && this.id < 600) {
            return "img/icons/rain.svg#rain"; //rain
        } else if(this.id >= 600 && this.id < 700) {
            return "img/icons/snowflake.svg#snow"; //snow
        } else if(this.id >= 700 && this.id < 800) {
            return "img/icons/mist.svg#fog"; //fog
        } else if(this.id == 800 && hours <= 6) {
            return "img/icons/moon-phase.svg#moon"; // full moon
        } else if(this.id == 800 && hours < 22) {
            return "img/icons/sunny.svg#sunny"; // sunny
        } else if(this.id == 800 && hours >= 22) {
            return "img/icons/moon-phase.svg#moon"; // full moon
        } else if(this.id == 801 && hours <= 6) {
            return "img/icons/fewcloudsmoon.svg#fewmoon"; // coudy moon
        } else if(this.id == 801 && hours < 22) {
            return "img/icons/fewcloudssunny.svg#fewsunny"; // cloudy sun
        } else if(this.id == 801 && hours >= 22) {
            return "img/icons/fewcloudsmoon.svg#fewmoon"; // cloudy moon
        } else if(this.id > 801) {
            return "img/icons/cloud-computing.svg#cloud"; // cloud
        }
    }
}
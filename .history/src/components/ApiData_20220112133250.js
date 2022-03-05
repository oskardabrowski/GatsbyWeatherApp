import React, {useState} from 'react';
import styled from 'styled-components';
import DataContainer from './DataContainer';


const ApiData = () => {
    const [place, setPlace] = useState('');
    const SubmitHandler = (e) => {
        e.preventDefault();
        setPlace('newPlace')
    }
    return (
        <Container>
            <div className="DataPicker">
                <form onSubmit={(e) => SubmitHandler(e)}>
                    <input type="text" className="" placeholder="Wpisz swoją miejscowość" />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <DataContainer searchPlace={place} />
        </Container>
    )
}

export default ApiData


const Container = styled.div`
width: 100%;
height: 100vh;
position: absolute;
top: 0;
left: 0;

.DataPicker {
    width: 100%;
    height: auto;
}


`;

class DayWeather {
    constructor(id, description, temperature, date) {
        this.id = id;
        this.description = description;
        this.temperature = temperature;
        this.date = date;
    }

    findIco(hours) {
        if(this.id >= 200 && this.id < 300) {
            return "img/icons/thunderstorm.svg#storm";
        } else if(this.id >= 300 && this.id < 500) {
            return "img/icons/rain.svg#rain";
        } else if(this.id >= 500 && this.id < 600) {
            return "img/icons/rain.svg#rain";
        } else if(this.id >= 600 && this.id < 700) {
            return "img/icons/snowflake.svg#snow";
        } else if(this.id >= 700 && this.id < 800) {
            return "img/icons/mist.svg#fog";
        } else if(this.id == 800 && hours <= 6) {
            return "img/icons/moon-phase.svg#moon";
        } else if(this.id == 800 && hours < 22) {
            return "img/icons/sunny.svg#sunny";
        } else if(this.id == 800 && hours >= 22) {
            return "img/icons/moon-phase.svg#moon";
        } else if(this.id == 801 && hours <= 6) {
            return "img/icons/fewcloudsmoon.svg#fewmoon";
        } else if(this.id == 801 && hours < 22) {
            return "img/icons/fewcloudssunny.svg#fewsunny";
        } else if(this.id == 801 && hours >= 22) {
            return "img/icons/fewcloudsmoon.svg#fewmoon";
        } else if(this.id > 801) {
            return "img/icons/cloud-computing.svg#cloud";
        }
    }
}

class CityWeather {
    constructor(id, description, temperature, feels, pressure, humidity, windSpeed) {
        this.id = id;
        this.description = description;
        this.temperature = temperature;
        this.feels = feels;
        this.pressure = pressure;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
    }

    findIco(hours) {
        if(this.id >= 200 && this.id < 300) {
            return "img/icons/thunderstorm.svg#storm";
        } else if(this.id >= 300 && this.id < 500) {
            return "img/icons/rain.svg#rain";
        } else if(this.id >= 500 && this.id < 600) {
            return "img/icons/rain.svg#rain";
        } else if(this.id >= 600 && this.id < 700) {
            return "img/icons/snowflake.svg#snow";
        } else if(this.id >= 700 && this.id < 800) {
            return "img/icons/mist.svg#fog";
        } else if(this.id == 800 && hours <= 6) {
            return "img/icons/moon-phase.svg#moon";
        } else if(this.id == 800 && hours < 22) {
            return "img/icons/sunny.svg#sunny";
        } else if(this.id == 800 && hours >= 22) {
            return "img/icons/moon-phase.svg#moon";
        } else if(this.id == 801 && hours <= 6) {
            return "img/icons/fewcloudsmoon.svg#fewmoon";
        } else if(this.id == 801 && hours < 22) {
            return "img/icons/fewcloudssunny.svg#fewsunny";
        } else if(this.id == 801 && hours >= 22) {
            return "img/icons/fewcloudsmoon.svg#fewmoon";
        } else if(this.id > 801) {
            return "img/icons/cloud-computing.svg#cloud";
        }
    }
}
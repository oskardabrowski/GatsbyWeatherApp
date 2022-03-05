import React, {useState} from 'react';
import styled from 'styled-components';
import DataContainer from './DataContainer';
import Logo from '../images/WeatherAppLogoW.svg';
import {GoSearch} from 'react-icons/go';

const ApiData = () => {
    const [place, setPlace] = useState('');
    const SubmitHandler = (e) => {
        const Searched = document.querySelector('.SearchPlaceInput').value;
        e.preventDefault();
        setPlace(Searched)
    }
    return (
        <Container>
            <div className="DataPicker">
                <div className="NavTop">
                    <form onSubmit={(e) => SubmitHandler(e)}>
                        <input type="text" className="SearchPlaceInput" placeholder="Wpisz swoją miejscowość" />
                        <button type="submit"><GoSearch /></button>
                    </form>
                </div>
                <div></div>
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
    .NavTop {
        display: flex;
        align-items: center;

        & > form {
            margin: 1.5rem 0rem;
            width: 100%;
            display: flex;
            align-items: center;
            position: relative;
            & > input {
                min-width: 20rem;
                margin: 0rem 0rem;
                padding: .75rem;
                border: none;
                border-radius: 1.5rem;
                font-family: 'Open Sans';
                font-size: 1.2rem;
            }
            & > button {
                height: max-content;
                font-size: 1.75rem;
                background: none;
                border: none;
                position: absolute;
                right: .75rem;
                top: 50%;
                transform: translate(0%, -40%);

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
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
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import DataContainer from './DataContainer';
import Logo from '../images/WeatherAppLogoW.svg';
import {GoSearch} from 'react-icons/go';
import api from './api';
import Weather from './WeatherType';

const ApiData = () => {
    const [place, setPlace] = useState('');
    const [TodaysWeatherResult, SetTodaysWeatherResult] = useState();
    const [WeekForecast, SetWeekForecast] = useState();
    const SubmitHandler = (e) => {
        const Searched = document.querySelector('.SearchPlaceInput').value;
        e.preventDefault();
        setPlace(Searched);
        localStorage.setItem('WeatherPlace', Searched);
    }

    useEffect(() => {
        if(localStorage.getItem('WeatherPlace')) {
            const lastSearched = localStorage.getItem('WeatherPlace');
            document.querySelector('.SearchPlaceInput').value = lastSearched;
            setPlace(lastSearched);
        }
    }, [])

    useEffect(async () => {
        if(place != '') {
                const TodaysWeather = async () => {
                const data = await fetch(`${api.apiday}?q=${place}&lang=${api.lang}&appid=${api.key}`);
                const parsedData = await data.json();
                const {clouds, coord, main, weather, wind} = parsedData;
                const today = new Date();
                const day = today.getDate();
                let month = today.getMonth();
                let monthString;
                month++;
                if(month < 10) {
                    monthString = '0' + month.toString();
                } else {
                    monthString = month;
                }
                const year = today.getFullYear();
                const weekDay = today.getDay();
                let weekDayName;
                switch(weekDay) {
                    case 0: weekDayName = "Niedziela"; break;
                    case 1: weekDayName = "Poniedziałek"; break;
                    case 2: weekDayName = "Wtorek"; break;
                    case 3: weekDayName = "Środa"; break;
                    case 4: weekDayName = "Czwartek"; break;
                    case 5: weekDayName = "Piątek"; break;
                    case 6: weekDayName = "Sobota"; break;
                }
                const DateString = `${weekDayName} ${day}.${monthString}.${year}`;
                const DailyWeather = new Weather(weather[0].id, clouds.all, weather[0].description, main.temp, main.feels_like, main.pressure, main.humidity, wind.speed, DateString, coord);
                SetTodaysWeatherResult(DailyWeather);
            }
            TodaysWeather();
            const Forecast = async () => {
                const data7 = await fetch(`${api.api7}?q=${place}&lang=${api.lang}&appid=${api.key}`);
                const parsedData7 = await data7.json();
                const allData7 = parsedData7.list;
                // const {clouds, coord, main, weather, wind} = parsedData;
                // const today = new Date();
                // const day = today.getDate();
                // const month = today.getMonth();
                // const year = today.getFullYear();
                // const weekDay = today.getDay();
                // let weekDayName;
                // switch(weekDay) {
                //     case 0: weekDayName = "Niedziela"; break;
                //     case 1: weekDayName = "Poniedziałek"; break;
                //     case 2: weekDayName = "Wtorek"; break;
                //     case 3: weekDayName = "Środa"; break;
                //     case 4: weekDayName = "Czwartek"; break;
                //     case 5: weekDayName = "Piątek"; break;
                //     case 6: weekDayName = "Sobota"; break;
                // }
                // const DateString = `${weekDayName} ${day}.${month+1}.${year}`;
                // const DailyWeather = new Weather(weather[0].id, clouds.all, weather[0].description, main.temp, main.feels_like, main.humidity, wind.speed, DateString, coord);
                // TodaysWeatherResult = DailyWeather;
                console.log(allData7)
            }
            await Forecast();
        }
    }, [place])
    return (
        <Container>
            <div className="DataPicker">
                <div className="NavTop">
                    <form onSubmit={(e) => SubmitHandler(e)}>
                        <input type="text" className="SearchPlaceInput" placeholder="Wpisz swoją miejscowość" />
                        <button type="submit"><GoSearch /></button>
                    </form>
                </div>
            </div>
            {place != '' ? <DataContainer TodaysWeatherResult={TodaysWeatherResult} /> : ''}
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
        justify-content: center;
        & > form {
            margin: 1.5rem 0rem;
            width: 60%;
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
                width: 100%;
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


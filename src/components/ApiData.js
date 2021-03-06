import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import DataContainer from './DataContainer';
import {GoSearch} from 'react-icons/go';
import api from './api';
import Weather from './WeatherType';
import Swal from 'sweetalert2';
import {AiOutlineLoading} from 'react-icons/ai';
import {SiGatsby} from 'react-icons/si';

const ApiData = () => {
    const [place, setPlace] = useState('');
    const [showInfo, setShowInfo] = useState(false);
    const [WeekForecast, SetWeekForecast] = useState();
    const SubmitHandler = (e) => {
        const Searched = document.querySelector('.SearchPlaceInput').value;
        e.preventDefault();
        document.querySelector('.Loader').style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
        setTimeout(() => {
            setPlace(Searched);
            localStorage.setItem('WeatherPlace', Searched);
            document.querySelector('.Loader').style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
        }, 1000)
        setTimeout(() => {
            document.querySelector('.Loader').style.clipPath = 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)';
        }, 1500)
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
            const Forecast = async () => {
                try {
                    const data7 = await fetch(`${api.api7}?q=${place}&lang=${api.lang}&appid=${api.key}`);
                    const parsedData7 = await data7.json();
                    const city = parsedData7.city;
                    const allData7 = parsedData7.list;
                    let lastDate = '';
                    let dataList = [];
                    allData7.forEach(element => {
                        let weekDayName, splittedDate, dateString, splittedHour, hourString;
                        const {clouds, main, weather, wind, dt_txt} = element;
                        const weekDay = new Date(dt_txt).getDay();
                        switch(weekDay) {
                            case 0: weekDayName = "Niedziela"; break;
                            case 1: weekDayName = "Poniedzia??ek"; break;
                            case 2: weekDayName = "Wtorek"; break;
                            case 3: weekDayName = "??roda"; break;
                            case 4: weekDayName = "Czwartek"; break;
                            case 5: weekDayName = "Pi??tek"; break;
                            case 6: weekDayName = "Sobota"; break;
                        }
                        const hourAndDate = dt_txt.split(' ');
                        const date = hourAndDate[0];
                        const hour = hourAndDate[1];
                        splittedDate = date.split('-');
                        splittedHour = hour.split(':');
                        hourString = `${splittedHour[0]}:${splittedHour[1]}`;
                        dateString = `${weekDayName}, ${splittedDate[2]}.${splittedDate[1]}.${splittedDate[0]}`;
                        const DailyWeather = new Weather(weather[0].id, clouds.all, weather[0].description, main.temp, main.feels_like, main.pressure, main.humidity, wind.speed, dateString, city.coord, hourString, city.country, city.name, wind.deg);

                        if (date != lastDate) {
                            lastDate = date;
                            const dateForecast = {date: date, list: []}
                            dateForecast.list.push(DailyWeather);
                            dataList.push(dateForecast);
                        } else {
                            dataList.map(el => {
                                if(el.date === date) {
                                    el.list.push(DailyWeather)
                                }
                            })
                        }
                    });
                    SetWeekForecast(dataList);
                } catch(e) {
                    Swal.fire({
                      icon: 'error',
                      title: 'Co?? posz??o ??le!',
                      text: 'Nie znaleziono miejscowo??ci',
                    })
                }

            }
            await Forecast();
        }
    }, [place])
    useEffect(() => {
        const info = document.querySelector('.GatsbyLogo-desc');
        if(showInfo) {
            info.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
        } else {
            info.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
        }
    }, [showInfo])

    return (
        <Container>
            <div className="Loader">
                <AiOutlineLoading className="Loader-circle" />
            </div>

            <div className="DataPicker">
                <div className="GatsbyLogo" onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
                    <SiGatsby className="ico" />
                    <div className="GatsbyLogo-desc">
                        Built with <a href="https://www.gatsbyjs.com/">Gatsby</a>
                    </div>
                </div>
                <div className="NavTop">
                    <form onSubmit={(e) => SubmitHandler(e)}>
                        <input type="text" className="SearchPlaceInput" placeholder="Wpisz swoj?? miejscowo????" />
                        <button type="submit"><GoSearch /></button>
                    </form>
                </div>
            </div>
            {WeekForecast ? <DataContainer WeekForecast={WeekForecast} /> : ''}
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

@keyframes spin {
    0% {
        transform: rotate(0deg);
    } 100% {
        transform: rotate(360deg);
    }
}

.Loader {
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    width: 100%;
    height: 100%;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .5s ease-in-out;
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);

    &-circle {
        font-size: 10rem;
        animation: spin 2s linear infinite;
    }
}

.DataPicker {
    width: 100%;
    height: auto;
    position: relative;
    .GatsbyLogo {
        position: absolute;
        top: 50%;
        left: 1.5rem;
        font-size: 2.5rem;
        transform: translate(0%, -50%);
        color: #663399;
        background-color: white;
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;

        & > .ico {
            z-index: 200;
        }

        &-desc {
            font-family: 'Work Sans';
            z-index: 100;
            font-size: 1rem;
            position: absolute;
            left: 50%;
            background-color: white;
            height: 100%;
            width: 15rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0px 25px 25px 0px;
            transition: all .5s ease-in-out;

            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);

            & > a {
                margin-left: .25rem;
                color: #663399;
                text-decoration: none;
                font-weight: bold;
            }
        }
    }
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
                min-width: 15rem;
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

@media(max-width: 68.75em) {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        } 100% {
            transform: rotate(360deg);
        }
    }
    
    .Loader {
        position: fixed;
        top: 0;
        left: 0;
        background-color: white;
        width: 100%;
        height: 100%;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .5s ease-in-out;
        clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
    
        &-circle {
            font-size: 10rem;
            animation: spin 2s linear infinite;
        }
    }
    
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
                    min-width: 15rem;
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
}

@media(max-width: 81.25em) {
/* .DataPicker {
    .NavTop {
        & > form {
            width: 50%;
            & > input {
                min-width: 15rem;
                padding: .5rem;
                font-size: 1rem;
            }
        }
    }
} */

.DataPicker {
    .GatsbyLogo {
        font-size: 2rem;
        width: 2.5rem;
        height: 2.5rem;
    }
    .NavTop {
        & > form {
            width: 50%;
            & > input {
                padding: .65rem;
                font-size: 1rem;
            }
            & > button {
                font-size: 1.5rem;
            }
        }
    }
}
}
@media(max-width: 75em) {
.DataPicker {
    .GatsbyLogo {
        display: none;
    }
}
}
@media(max-width: 37.5em) {
.DataPicker {
    .NavTop {
        & > form {
            width: 90%;
            & > input {
                min-width: auto;
            }
        }
    }
}
}
`;


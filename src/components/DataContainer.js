import React, {useEffect, useState, useContext} from 'react';
import styled from 'styled-components';
import {WiThermometer, WiBarometer, WiRaindrops, WiStrongWind, WiCloudy, WiWindDeg} from 'react-icons/wi';
import {AiOutlineClose} from 'react-icons/ai';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GlobalAppContext } from './GlobalContext';
import Swal from 'sweetalert2';

const testData = [{name: 'Page A',value: 2400,},{name: 'Page B',value: 1398,},{name: 'Page C',value: 9800,},{name: 'Page D',value: 3908,},{name: 'Page E',value: 4800,},{name: 'Page F',value: 3800,},{name: 'Page G',value: 4300,},];

const DataContainer = ({WeekForecast}) => {
    const [Day, SetDay] = useState(0);
    const [Hour, SetHour] = useState(0);
    const [data, setData] = useState(testData);
    const [chartName, setChartName] = useState('');
    const [charts, setCharts] = useState(false);
    const {dispatch} = useContext(GlobalAppContext);

   const ChangeDayHandler = (day, id, hours) => {
        SetHour(0);
        SetDay(day);
       dispatch({id, hours});
   }

   const ChartHandler = (Day, code, name) => {
       if(WeekForecast) {
           const newData = [];
           WeekForecast[Day].list.map((el) => {
               const {hours} = el;
               let val;
               switch(code) {
                   case 'clouds': val = el.clouds; break;
                   case 'temperature': val = (el.temperature-272.15).toFixed(1); break;
                   case 'feels': val = (el.feels-272.15).toFixed(1); break;
                   case 'pressure': val = el.pressure; break;
                   case 'humidity': val = el.humidity; break;
                   case 'windSpeed': val = el.windSpeed; break;
                   default: val = el.clouds; break;
               }
               newData.push({name: hours, value: val})
           });
           setChartName(name);
           setData(newData);
           if(newData.length > 1) {
               setCharts(true);
           } else {
               Swal.fire({
                  icon: 'error',
                  title: 'Zbyt mało danych do utworzenia wykresu',
                  text: 'Sprubój dla innego dnia',
                })
           }
       }
   }

    return (
        <DataDisplay>
            {charts && <div className="Charts">
                <div className="Charts-top">
                    <div>Wykres: {chartName}</div>
                    <div className="Charts-top-close" onClick={() => setCharts(false)}><AiOutlineClose /></div>
                </div>
                <div className="Charts-body">
                    <ResponsiveContainer width="95%" height="100%">
                      <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>}
            <div className="Container">
                <div className="Container-top">
                    <div className="Container-top-general">
                        <div className="Container-top-general-place">
                            <h1>{WeekForecast && WeekForecast[Day].list[Hour].name}</h1><h2>{WeekForecast && WeekForecast[Day].list[Hour].date}</h2>
                        </div>
                        <div className="Container-top-general-data">
                            <div className="Container-top-general-data-mostimportant">
                                <div className="Container-top-general-data-mostimportant-ico">{WeekForecast && WeekForecast[Day].list[Hour].findIco(parseInt(WeekForecast[Day].list[Hour].hours.split(':')[0]))}</div>
                                <div onClick={() => ChartHandler(Day, 'temperature', 'Temperatura [°C]')} className="Container-top-general-data-mostimportant-degrees">{WeekForecast && (WeekForecast[Day].list[Hour].temperature -272.15).toFixed(1)} °C</div>
                            </div>
                            <div className="Container-top-general-data-desc">
                                {WeekForecast && WeekForecast[Day].list[Hour].description.charAt(0).toUpperCase() + WeekForecast[Day].list[Hour].description.slice(1)}
                            </div>
                        </div>
                    </div>
                    <div className="Container-top-additional">
                        <div className="Container-top-additional-top">
                            <div className="Container-additional-top-clouds">
                                <div onClick={() => ChartHandler(Day, 'clouds', 'Zachmurzenie [%]')} className="icon"><WiCloudy /></div>
                                <div className="info">{WeekForecast && WeekForecast[Day].list[Hour].clouds} %</div>
                                <div className="desc">Zachmurzenie</div>
                            </div>
                            <div className="Container-additional-top-temperature">
                                <div className="icon"><WiWindDeg style={{ transform: `rotate(${WeekForecast && (WeekForecast[Day].list[Hour].windDeg+180)%360}deg)` }} /></div>
                                <div className="info">Wiatr</div>
                                <div className="desc">{WeekForecast && WeekForecast[Day].list[Hour].findWind()}</div>
                            </div>
                            <div onClick={() => ChartHandler(Day, 'feels', 'Temperatura odczuwalna [°C]')} className="Container-additional-top-feels">
                                <div className="icon"><WiThermometer /></div>
                                <div className="info">{WeekForecast && (WeekForecast[Day].list[Hour].feels-272.15).toFixed(1)} °C</div>
                                <div className="desc">Temperatura odczuwalna</div>
                            </div>
                        </div>
                        <div className="Container-top-additional-bottom">
                            <div onClick={() => ChartHandler(Day, 'pressure', 'Ciśnienie [hPa]')} className="Container-additional-bottom-pressure">
                                <div className="icon"><WiBarometer /></div>
                                <div className="info">{WeekForecast && WeekForecast[Day].list[Hour].pressure} hPa</div>
                                <div className="desc">Ciśnienie</div>
                            </div>
                            <div onClick={() => ChartHandler(Day, 'humidity', 'Wilgotność [%]')} className="Container-additional-bottom-humidity">
                                <div className="icon"><WiRaindrops /></div>
                                <div className="info">{WeekForecast && WeekForecast[Day].list[Hour].humidity} %</div>
                                <div className="desc">Wilgotność</div>
                            </div>
                            <div onClick={() => ChartHandler(Day, 'windSpeed', 'Wiatr [m/s]')} className="Container-additional-bottom-windSpeed">
                                <div className="icon"><WiStrongWind /></div>
                                <div className="info">{WeekForecast && WeekForecast[Day].list[Hour].windSpeed} m/s</div>
                                <div className="desc">Wiatr</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Container-timeline">
                    {WeekForecast &&
                    WeekForecast[Day].list.map((el, index) => {
                        const {hours} = el;
                        return <button onClick={() => SetHour(index)} key={index}><div>{Hour === index && <span></span>}</div><span>{hours}</span></button>
                    })}
                </div>
                <div className="Container-days">
                    {WeekForecast && WeekForecast.map((el, index) => {
                        let meanTemperature = 0, meanTempCount = 0;
                        const date = el.list[0].date.split(' ');
                        const weatherTypeDominant = [];
                        for(const weather in el.list) {
                            let exists = false;
                            const id = el.list[weather].id;
                            weatherTypeDominant.forEach((el) => {
                                if(el.id === id) {
                                    exists = true;
                                }
                            })
                            if(exists) {
                                weatherTypeDominant.map((el) => {
                                    if(el.id === id) {
                                        el.count++;
                                    }
                                })
                            } else {
                                weatherTypeDominant.push({id: id, count: 1})
                            }
                        }

                        for(const temp in el.list) {
                            const temperature = el.list[temp].temperature-272.15;
                            meanTemperature += temperature;
                            meanTempCount++;
                        }
                        const sortedDominant = weatherTypeDominant.sort((a, b) => b.count - a.count);
                        const dominantId = sortedDominant[0].id;
                        const dominantWeatherListId = el.list.map((el, index) => {if(el.id === dominantId) {return index}});
                        let searchedId = dominantWeatherListId.filter(Number)[0];
                        if(!searchedId) {
                            searchedId = 0;
                        }
                        const element = el.list[searchedId];
                        const hour = element.hours.split(':');
                        const realTimeHours = new Date().getHours();
                        let hourNum = parseInt(hour[0]);
                        if(realTimeHours > 6 && realTimeHours < 22) {
                            if(hourNum < 6 || hourNum > 22) {
                                hourNum = 12;
                            }
                        }
                        return <div key={index} onClick={() => ChangeDayHandler(index, element.id, hourNum)} className="Container-days-day">
                        <div className="Container-days-day-date">{date[1]}</div>
                        <div className="Container-days-day-ico">{element.findIco(hourNum)}</div>
                        <div className="Container-days-day-temp">{(meanTemperature/meanTempCount).toFixed(1)} °C</div>
                    </div>
                    })}
                </div>
            </div>
        </DataDisplay>
    )
}

export default DataContainer

const DataDisplay = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
font-family: 'Work Sans';
position: relative;

.Charts {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    top: 0;
    left: 0;
    z-index: 1000;

    &-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: .5rem;
        font-size: 1.5rem;

        &-close {
            &:hover {
                cursor: pointer;
            }
        }
    }
    &-body {
        width: 100%;
        height: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

.Container {
    color: white;
    width: 90%;
    height: 80vh;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    &-top {
        width: 100%;
        display: flex;
        &-general {
            width: 35%;
            &-place {
                display: flex;
                flex-direction: column;
                align-items: baseline;
                & > h1 {
                    margin: .5rem;
                    font-size: 3rem;
                }
                &>h2 {
                    margin-left: 1rem;
                }
            }

            &-data {
                &-mostimportant {
                    display: flex;
                    justify-content: space-between;
                    &-ico {
                        width: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 12rem;
                    }
                    &-degrees {
                        width: 50%;
                        display: flex;
                        justify-content: center;
                        font-size: 3rem;
                        align-items: flex-end;
                        padding-bottom: 3rem;

                        &:hover {
                            cursor: pointer;
                        }
                    }

                }

                &-desc {
                    font-size: 1.5rem;
                    display: flex;
                    align-items: center;
                    margin-left: 2.5rem;
                }
            }
        }

        &-additional {
            display: flex;
            flex-direction: column;
            width: 65%;
            background-color: rgba(0,0,0,.7);
            border-radius: 15px;
            overflow: hidden;

            & > div > div > .icon {
                font-size: 5rem;
                margin: 0;
                height: 5rem;
            }
            & > div > div > .info {
                font-size: 1.2rem;
                margin: 0;
                height: auto;
            }
            & > div > div > .desc {
                font-size: 1.2rem;
                margin: 0;
                height: auto;
            }
            &-top {
                height: 50%;
                display: flex;
                width: 100%;

                & > div {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transition: all .5s ease-in-out;

                    &:hover {
                        cursor: pointer;
                        background-color: rgba(255,255,255,.25)
                    }
                }
            }
            &-bottom {
                display: flex;
                width: 100%;
                height: 50%;
                & > div {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transition: all .5s ease-in-out;
                    &:hover {
                        cursor: pointer;
                        background-color: rgba(255,255,255,.25)
                    }
                }
            }
        }
    }

    &-timeline {
        margin-top: 1.5rem;
        display: flex;
        justify-content: space-evenly;
        & > button {
            background: none;
            border: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            & > div {
                width: 1.5rem;
                height: 1.5rem;
                border: .25rem solid white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                & > span {
                    background-color: white;
                    width: 1.2rem;
                    height: 1.2rem;
                    border-radius: 50%;
                }

                &:hover {
                    cursor: pointer;
                }
            }

            & > span {
                color: white;
                height: 1rem;
                font-size: 1.2rem;
            }
        }
    }

    &-days {
        margin-top: 1.5rem;
        width: 100%;
        text-align: center;

        &-day {
            background-color: rgba(0,0,0,.7);
            width: 10rem;
            height: 10rem;
            font-size: 1.5rem;
            border-radius: 15px;
            overflow: hidden;
            transition: all .5s ease-in-out;
            display: inline-block;
            margin: 1rem;

            &:hover {
                cursor: pointer;
                .Container-days-day-date {
                    background-color: rgba(255,255,255,.25);
                }
                .Container-days-day-ico {
                    background-color: rgba(255,255,255,.25);
                }
                .Container-days-day-temp {
                    background-color: rgba(255,255,255,.25);
                }
            }

            &-date {
                height: 30%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all .5s ease-in-out;
            }
            &-ico {
                height: 40%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 5rem;
                transition: all .5s ease-in-out;
            }
            &-temp {
                height: 30%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all .5s ease-in-out;
            }
        }
    }
}

@media(max-width: 81.25em) {

.Charts {
    height: 80vh;
}

.Container {
    height: auto;
    &-top {
        width: 100%;
        display: flex;
        &-general {
            width: 35%;
            &-place {
                & > h1 {
                    margin: .5rem;
                    font-size: 2.5rem;
                }
                &>h2 {
                    margin-left: .75rem;
                }
            }

            &-data {
                &-mostimportant {
                    &-ico {
                        font-size: 10rem;
                    }
                    &-degrees {
                        font-size: 2.5rem;
                    }

                }

                &-desc {
                    font-size: 1.2rem;
                    margin-left: 2rem;
                }
            }
        }

        &-additional {
            & > div > div > .icon {
                font-size: 4rem;
                margin: 0;
                height: 4rem;
            }
            & > div > div > .info {
                font-size: 1rem;
                margin: 0;
                height: auto;
            }
            & > div > div > .desc {
                font-size: 1rem;
                margin: 0;
                height: auto;
            }
        }
    }

    &-timeline {
        margin-top: 1.25rem;
        & > button {
            & > div {
                width: 1.2rem;
                height: 1.2rem;
                border: .2rem solid white;
                & > span {
                    width: .9rem;
                    height: .9rem;
                }
            }
            & > span {
                margin-top:.5rem;
                font-size: 1rem;
            }
        }
    }

    &-days {
        margin-top: 1rem;

        &-day {
            width: 9rem;
            height: 9rem;
            font-size: 1rem;
            margin: .75rem;
            &-ico {
                font-size: 4.5rem;
            }
        }
    }
}
}

@media(max-width: 56.25em) {
.Container {
    &-top {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        &-general {
            width: 90%;
            margin-bottom: 1rem;
        }

        &-additional {
            width: 95%;
            margin: 1rem 0rem;

            & > div > div {
                padding: .5rem;
            }

            & > div > div > .icon {
                font-size: 5rem;
                margin: 0;
                height: 5rem;
            }
            & > div > div > .info {
                font-size: 1.2rem;
                margin: 0;
                height: auto;
            }
            & > div > div > .desc {
                text-align: center;
            }
            &-top {
                height: 50%;
                display: flex;
                width: 100%;

                & > div {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transition: all .5s ease-in-out;

                    &:hover {
                        cursor: pointer;
                        background-color: rgba(255,255,255,.25)
                    }
                }
            }
            &-bottom {
                display: flex;
                width: 100%;
                height: 50%;
                & > div {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transition: all .5s ease-in-out;
                    &:hover {
                        cursor: pointer;
                        background-color: rgba(255,255,255,.25)
                    }
                }
            }
        }
    }

    &-timeline {
        margin-top: 1.5rem;
        display: flex;
        justify-content: space-evenly;
        & > button {
            background: none;
            border: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            & > div {
                width: 1.5rem;
                height: 1.5rem;
                border: .25rem solid white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                & > span {
                    background-color: white;
                    width: 1.2rem;
                    height: 1.2rem;
                    border-radius: 50%;
                }

                &:hover {
                    cursor: pointer;
                }
            }

            & > span {
                color: white;
                height: 1rem;
                font-size: 1.2rem;
            }
        }
    }

    &-days {
        margin-top: 1.5rem;
        width: 100%;
        text-align: center;

        &-day {
            background-color: rgba(0,0,0,.7);
            width: 10rem;
            height: 10rem;
            display: flex;
            flex-direction: column;
            font-size: 1.5rem;
            border-radius: 15px;
            overflow: hidden;
            transition: all .5s ease-in-out;
            display: inline-block;
            margin: 1rem;

            &:hover {
                cursor: pointer;
                .Container-days-day-date {
                    background-color: rgba(255,255,255,.25);
                }
                .Container-days-day-ico {
                    background-color: rgba(255,255,255,.25);
                }
                .Container-days-day-temp {
                    background-color: rgba(255,255,255,.25);
                }
            }

            &-date {
                height: 30%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all .5s ease-in-out;
            }
            &-ico {
                height: 40%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 5rem;
                transition: all .5s ease-in-out;
            }
            &-temp {
                height: 30%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all .5s ease-in-out;
            }
        }
    }
}
}

@media(max-width: 37.5em) {
.Container {
    width: 100%;
    &-top {
        width: 100%;
        display: flex;
        &-general {
            &-place {
                display: flex;
                flex-direction: column;
                align-items: baseline;
                & > h1 {
                    margin: .5rem;
                    font-size: 2rem;
                }
                &>h2 {
                    margin-left: .75rem;
                }
            }
        }

        &-additional {
            width: 100%;
            flex-direction: row;
            background-color: rgba(0,0,0,.7);
            border-radius: 0px;
            overflow: hidden;

            & > div {
                display: flex;
                flex-direction: column;
            }
        }
    }

    &-timeline {
        margin-top: 1.5rem;
        display: initial;
        text-align: center;
        & > button {
            display: inline-block;
            margin: 1rem;
            position: relative;
            & > div {
                position: relative;
                left: 50%;
                transform: translate(-50%, 0%);
                width: 1.5rem;
                height: 1.5rem;
                & > span {
                   position: absolute;
                }
            }

            & > span {
                color: white;
                height: 1rem;
                font-size: 1.2rem;
            }
        }
    }

    &-days {
        margin-top: 1.5rem;
        width: 100%;
        text-align: center;

        &-day {
            background-color: rgba(0,0,0,.7);
            width: 8rem;
            height: 8rem;
            font-size: 1.2rem;
        }
    }
}
}
`;

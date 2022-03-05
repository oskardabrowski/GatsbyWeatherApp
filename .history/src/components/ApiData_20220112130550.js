import React, {useEffect} from 'react';
import styled from 'styled-components';

const apiday = 'http://api.openweathermap.org/data/2.5/weather';
const api7 = 'http://api.openweathermap.org/data/2.5/forecast';
const lang = 'pl';
const key = 'faf68383b7364b3650fc15f93c575c50';
const key7 = '1e273549948a637fecb6b6a41947883f';

const ApiData = () => {
    useEffect(() => {
        const city = "Golub-Dobrzyń";
        const data = await fetch(`${api.apiday}?q=${city}&lang=${api.lang}&appid=${api.key}`);
        const parsedData = await data.json();
        const data7 = await fetch(`${api.api7}?q=${city}&lang=${api.lang}&appid=${api.key}`);
        const parsedData7 = await data7.json();
    })
    return (
        <DataContainer>
            Something is here
        </DataContainer>
    )
}

export default ApiData


const DataContainer = styled.div`
width: 100%;
height: 100vh;
position: absolute;
top: 0;
left: 0;


`;
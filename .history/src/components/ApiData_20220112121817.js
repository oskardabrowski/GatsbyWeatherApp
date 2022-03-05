import React from 'react';
import styled from 'styled-components';


const apiday = 'http://api.openweathermap.org/data/2.5/weather';
const api7 = 'http://api.openweathermap.org/data/2.5/forecast';
const lang = 'pl';
const key = 'faf68383b7364b3650fc15f93c575c50';
const key7 = '1e273549948a637fecb6b6a41947883f';



const ApiData = () => {
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
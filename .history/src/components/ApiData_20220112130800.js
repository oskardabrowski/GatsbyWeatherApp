import React, {useEffect} from 'react';
import styled from 'styled-components';

import api from './api';

const ApiData = () => {
    useEffect( async () => {
        const city = "Golub-Dobrzyń";
        const data = await fetch(`${api.apiday}?q=${city}&lang=${api.lang}&appid=${api.key}`);
        const parsedData = await data.json();
        const data7 = await fetch(`${api.api7}?q=${city}&lang=${api.lang}&appid=${api.key}`);
        const parsedData7 = await data7.json();
    }, [])
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
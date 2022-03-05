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


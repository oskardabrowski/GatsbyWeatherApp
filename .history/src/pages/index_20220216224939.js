import React, {useRef, useEffect} from "react";
import styled from 'styled-components';
import '../components/index.css'
import ApiData from "../components/ApiData";
import { Helmet } from "react-helmet";
import { GlobalContextProvider } from "../components/GlobalContext";
import Sliders from "../components/Sliders";
import Icon from '../images/gatsby-icon.png';
import Cookie from "../images/cookie.svg";

export default function Home() {
  const CookieBarRef = useRef();
  useEffect(() => {
    setTimeout(() => {CookieBarRef.current.style.bottom = '0%'}, 500);
  }, []);
  const AllowCookies = () => {
    CookieBarRef.current.style.bottom = '-100%';
  }
  return (
    <GlobalContextProvider>
      <CookieBar ref={CookieBarRef} className="CookieBar">
        <div>
          <img src={Cookie} alt={Cookie} />
          <p>Ta strona wykorzystuje pliki Cookies w celu poprawnego funcjonowania</p>
        </div>
        <button onClick={() => AllowCookies()}>Akceptuję</button>
      </CookieBar>
      <Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Gatsby WeatherApp</title>
            <link rel="icon" type="image/png" href={Icon} />
        </Helmet>
        <div className="backgroundSlider">
          <Sliders />
        </div>
        <ApiData />
      </Layout>
    </GlobalContextProvider>
  )
}

const CookieBar = styled.div`
position: fixed;
bottom: -100%;
left: 0;
width: 100%;
z-index: 100;
background-color: white;
display: flex;
align-items: center;
justify-content: space-between;
transition: all .5s ease-in-out;
& > div {
  & > img {
    width: 2.5rem;
  }
  & > p {
    margin-left: .75rem;
    font-family: 'Work Sans';
  }
  display: flex;
  align-items: center;
}
& > button {
  justify-self: end;
  padding: .5rem;
  background: #663399;
  border: none;
  border-radius: 15px;
  font-family: 'Work Sans';
  color: white;
  transition: all .25s ease-in-out;
  &:hover {
    background: black;
    cursor: pointer;
  }
}
& > * {
  margin: 0.75rem;
}

@media(max-width: 37.5em) {
flex-direction: column;
}

`;




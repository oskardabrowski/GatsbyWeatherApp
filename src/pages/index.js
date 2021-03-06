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

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
  @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Work+Sans:ital,wght@0,200;0,300;0,400;0,500;0,700;1,200;1,400;1,500;1,600&display=swap');

  .backgroundSlider {
    width: 100%;
    height: 100vh;
    overflow: hidden;

    & > ul {
      width: 100%;
      height: 100%;
      position: relative;

      & > li {
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0;
        transition: opacity 4s ease-in-out;

        & > img {
          width: 100%;
          filter: grayscale(65%);
        }
        & > .image {
          width: 100%;
          height: 100%;
          filter: grayscale(65%);
        }
      }
    }
  }
  .applicationContainer {
    position:absolute;
    top: 0;
    left: 0;
  }


  @media(max-width: 81.25em) {
      .backgroundSlider {
      position: fixed;
      & > ul {
        & > li {
          &>div {
            width: 100%;
            height: 100%;
          }
          & > .image {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
    @media(max-width: 50em) {
      .backgroundSlider {
      & > ul {
        & > li {
          & > .image {
            width: auto;
            height: 100%;
          }
          & > div {
            width: auto;
            height: 100%;
          }
        }
      }
    }
  }
`;
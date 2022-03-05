import React, {useState, useEffect, useContext} from "react";
import styled from 'styled-components';
import '../components/index.css'
import ApiData from "../components/ApiData";
import { Helmet } from "react-helmet";
import { GlobalContextProvider } from "../components/GlobalContext";
import Sliders from "../components/Sliders";
import Icon from '../images/gatsby-icon.png';

export default function Home() {
  return (
    <GlobalContextProvider>
      <Curtain className="SliderCurtain" />
      <Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Gatsby WeatherApp</title>
            <link rel="icon" type="image/png" href="../images/gatsby-icon.png" />
        </Helmet>
        <div className="backgroundSlider">
          <Sliders />
        </div>
        <ApiData />
      </Layout>
    </GlobalContextProvider>
  )
}

const Curtain = styled.span`
position: fixed;
width: 100%;
height: 100%;
left: 0;
top: 0;
background-color: #663399;
clip-path: circle(0.0% at 0 0);
transition: all .5s ease-in-out;
z-index: 10000;
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
          & > img {
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
          & > img {
            width: auto;
            height: 100%;
          }
        }
      }
    }
  }
`;
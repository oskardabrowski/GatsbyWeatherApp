import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import '../components/index.css'
import ApiData from "../components/ApiData";

// * Importing images
import Clouds from '../images/Clouds.png';
import FeatherCloudsSky from '../images/FeatherCloudsSky.png';
import SunnySea from '../images/SunnySea.png';
import SunsetInsideTree from '../images/SunsetInsideTree.png';
import Forest from '../images/Forest.png';


const images = [Clouds, FeatherCloudsSky, SunnySea, SunsetInsideTree, Forest];

export default function Home() {
  const [slider, setSlider] = useState(0);
  const [sliderSet, setSliderSet] = useState();
  useEffect(() => {
    const sliders = document.querySelector(".SliderInitialList").querySelectorAll('li');
    setSlider(1);
    sliders[slider].style.opacity = 1;
  }, []);

  useEffect(async () => {
    const sliders = document.querySelector(".SliderInitialList").querySelectorAll('li');
    await setTimeout(() => {
      if (slider < sliders.length-1) {
        const newSlider = slider + 1;
        setSlider(newSlider)
      } else {
        setSlider(0)
      }
      sliders.forEach((el) => {
        el.style.opacity = 0;
      });
      sliders[slider].style.opacity = 1;
    }, 30000)
  }, [slider])

  return (
    <Layout>
      <div className="backgroundSlider">
        <ul className="SliderInitialList">
          {images.map((el, index) => {
            return <li key={index}>
            <img src={el} alt={el} />
          </li>
          })}
        </ul>
      </div>
      <ApiData />
    </Layout>
  )
}

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

  @media(max-width: 37.5em) {
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
  @media(max-width: 81.25em) {
      .backgroundSlider {
      position: fixed;
    }
  }

`;
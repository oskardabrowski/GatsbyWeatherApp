import React, {useState, useEffect, useContext} from "react";
import { GlobalAppContext } from "../components/GlobalContext";
import styled from 'styled-components';

const Sliders = () => {
  const [slider, setSlider] = useState(0);
  const {state} = useContext(GlobalAppContext);
  const [slidersCollection, setSlidersCollection] = useState(state);

  useEffect(() => {
      const SliderCurtain = document.querySelector(".SliderCurtain");
      SliderCurtain.style.opacity = 1;
      setTimeout(() => {
          setSlidersCollection(state);
      }, 500);
      setTimeout(() => {
          SliderCurtain.style.opacity = 0;
      }, 750);
  }, [state]);

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
    }, 15000)
  }, [slider])
  return <ul className="SliderInitialList">
            {slidersCollection.map((el, index) => {
              return <li key={index}>
              <img src={el} alt={el} />
            </li>
            })}
            <Curtain className="SliderCurtain" />
          </ul>;
};

const Curtain = styled.span`
position: absolute;
width: 100%;
height: 100%;
left: 0;
top: 0;
background-color: white;
/* clip-path: circle(140.9% at 0 0); */
clip-path: circle(140.9% at 0 0);
transition: all .25s ease-in-out;
`;


export default Sliders;

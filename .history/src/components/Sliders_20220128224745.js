import React, {useState, useEffect, useContext} from "react";
import { GlobalAppContext } from "../components/GlobalContext";

const Sliders = () => {
  const [slider, setSlider] = useState(0);
  const {state} = useContext(GlobalAppContext);
  const [slidersCollection, setSlidersCollection] = useState(state);

  useEffect(() => {
      const sliders = document.querySelector(".SliderInitialList").querySelectorAll('li');
      sliders.forEach((el) => el.style.opacity = 0);
      setTimeout(() => {
          setSlidersCollection(state);
          slidersCollection.forEach((el) => el.style.opacity = 0);
      }, 500)
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
    }, 5000)
  }, [slider])
  return <ul className="SliderInitialList">
            {slidersCollection.map((el, index) => {
              return <li key={index}>
              <img src={el} alt={el} />
            </li>
            })}
          </ul>;
};

export default Sliders;

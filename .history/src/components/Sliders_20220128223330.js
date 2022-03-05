import React, {useState, useEffect, useContext} from "react";
import { GlobalAppContext } from "../components/GlobalContext";

const Sliders = () => {
  const [slider, setSlider] = useState(0);
  const {state} = useContext(GlobalAppContext);

  useEffect(() => {
      const sliders = document.querySelector(".SliderInitialList");
  }, []);


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
  return <ul className="SliderInitialList">
            {state.map((el, index) => {
              return <li key={index}>
              <img src={el} alt={el} />
            </li>
            })}
          </ul>;
};

export default Sliders;

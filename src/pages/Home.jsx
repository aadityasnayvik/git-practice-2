// import Banner from "../components/Banner";
import Slider from "../components/Slider.jsx";
import Cards from "../components/Cards.jsx";
import AboutSection from "../components/About-section.jsx";
import { useState } from "react";
import {creatRoot} from 'react-dom/client'

export default function Home() {
  return<>
   <Slider/>
   <Cards/>
   <AboutSection/>
  </>
}

function MyCar() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>

   
                                  <h1>The wrong commit- part- 2</h1>
   
   
    </>
  )
}

// createRoot(document.getElementById('root')).render(
//   <MyCar />
// );

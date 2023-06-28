import "./App.css";
import { TimeInput } from "./components/TimeInput";
import { Demo } from "./components/Demo";
import { Select } from "./components/Select";

import animalData from "./animalData.json";
import demoData from "./demoData.json";
import imageData from "./imageData.json";

const allDemos = demoData;
const allAnimals = animalData;
const allImages = imageData;

export default function App() {
  return (
    <>
      <header>
        <h1>Daily Animal Demos</h1>
      </header>

      <article>
        <Select />

        <button onClick="sortByTime()">Sort By Time</button>
        <button onClick="sortByExhibit()">Sort By Exhibit</button>

        <TimeInput label="Arrival" defaultValue="08:00" onChange="changeArrivalTime()" />
        <TimeInput label="Departure" defaultValue="18:00" onChange="changeArrivalTime()" />

        <section id="demo-grid">
          {allDemos.map((demo, index) => (
            <Demo key={index} demo={demo} />
          ))}
        </section>
      </article>
    </>
  );
}

function Swiper() { }

function Animal() { }

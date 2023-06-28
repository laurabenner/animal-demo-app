import "./App.css";
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

function TimeInput({ label, defaultValue, onChange }) {
  return (
    <>
      <label htmlFor={label}>{label + " Time:"}</label>
      <input type="time" id={label} name={label} defaultValue={defaultValue} onChange={onChange}></input>
    </>
  );
}

function Demo({ demo }) {
  return (
    <div
      className="demo"
      data-expand="false"
      data-time={transformTimeString(demo.Time)}
      data-exhibit={transformExhibitString(demo.Exhibit)}
    >
      <Time time={demo.Time} />
      <Exhibit exhibit={demo.Exhibit} />
      <Description description={demo.Demo} />
    </div>
  );
}

function Time({ time }) {
  return (
    <div className="time">
      <p>{time}</p>
    </div>
  );
}

function Exhibit({ exhibit }) {
  return (
    <div className="exhibit">
      <p>
        <a href={"https://nationalzoo.si.edu/animals.exhibits/" + transformExhibitString(exhibit).replace("africa-trail", "cheetah-conservation-station")} target="_blank" rel="noreferrer">
          {exhibit.toUpperCase()}
        </a>
      </p>
    </div>
  );
}

function Description({ description }) {
  return (
    <div className="description">
      <p>
        {description}
      </p>
    </div>
  );
}

function Swiper() { }

function Animal() { }

function Select() {
  return (
    <select name="exhibits" id="exhibit-select" onChange="changeExhibit()">
      <option value="all">All Exhibits</option>
      <option value="africa-trail">Africa Trail</option>
      <option value="amazonia">Amazonia</option>
      <option value="american-bison">American Bison</option>
      <option value="american-trail">American Trail</option>
      <option value="asia-trail">Asia Trail</option>
      <option value="bird-house">Bird House</option>
      <option value="claws-paws-pathway">Claws & Paws Pathway</option>
      <option value="elephant-trails">Elephant Trails</option>
      <option value="great-cats">Great Cats</option>
      <option value="kids-farm">Kids' Farm</option>
      <option value="primates">Primates</option>
      <option value="reptile-discovery-center">Reptile Discovery Center</option>
      <option value="small-mammal-house">Small Mammal House</option>
    </select>
  );
}

function transformTimeString(timeString) {
  return timeString.replace(
    /(\d+):(\d+) (AM|PM)/,
    (_, h, m, p) => `${String(p === "PM" ? +h + 12 : h).padStart(2, "0")}:${m}`
  );
}

function transformExhibitString(exhibitString) {
  return exhibitString
    .toLowerCase()
    .replaceAll(" (outdoor viewing)", "")
    .replaceAll(" &amp; ", "-")
    .replaceAll("&#039;", "")
    .replaceAll(" & ", "-")
    .replaceAll(" ", "-")
    .replaceAll("'", "");
}

function transformAnimalString(animalString) {
  return animalString
    .toUpperCase()
    .replaceAll("&amp;", "&")
    .replaceAll("&#039;", "'");
}

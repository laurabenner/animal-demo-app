import { useState } from "react";

import { TimeInput } from "../components/TimeInput";
import { DemoGrid } from "../components/DemoGrid";
import { Select } from "../components/Select";

import { sortByTime } from "../utils";
import { sortByExhibit } from "../utils";

export function Article() {
    const [filterExhibit, setFilterExhibit] = useState("all");
    const [filterArrivalTime, setFilterArrivalTime] = useState("08:00");
    const [filterDepartureTime, setFilterDepartureTime] = useState("18:00");

    const updateFilterExhibit = (newValue) => {
        setFilterExhibit(newValue);
    };

    const updateArrivalTime = (newValue) => {
        setFilterArrivalTime(newValue);
    };

    const updateDepartureTime = (newValue) => {
        setFilterDepartureTime(newValue);
    }

    return (
        <article>
            <Select updateFilterExhibit={updateFilterExhibit}/>

            <button onClick={() => sortByTime()}>Sort By Time</button>
            <button onClick={() => sortByExhibit()}>Sort By Exhibit</button>

            <TimeInput label="Arrival" defaultValue="08:00" onChange={updateArrivalTime} />
            <TimeInput label="Departure" defaultValue="18:00" onChange={updateDepartureTime} />

            <DemoGrid filterExhibit={filterExhibit} filterArrivalTime={filterArrivalTime} filterDepartureTime={filterDepartureTime} />


        </article>
    );
}
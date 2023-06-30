import { useState } from "react";

import { TimeInput } from "../components/TimeInput";
import { DemoGrid } from "../components/DemoGrid";
import { Select } from "../components/Select";

export function Article() {
    const [filterExhibit, setFilterExhibit] = useState("all");
    const [filterArrivalTime, setFilterArrivalTime] = useState("08:00");
    const [filterDepartureTime, setFilterDepartureTime] = useState("18:00");
    const [sort, setSort] = useState("time");

    const updateFilterExhibit = (newValue) => {
        setFilterExhibit(newValue);
    };

    const updateArrivalTime = (newValue) => {
        setFilterArrivalTime(newValue);
        console.log(newValue);
    };

    const updateDepartureTime = (newValue) => {
        setFilterDepartureTime(newValue);
    };

    const updateSort = (newValue) => {
        setSort(newValue);
    };

    return (
        <article>
            <Select updateFilterExhibit={updateFilterExhibit}/>

            <button onClick={() => updateSort("time")}>Sort By Time</button>
            <button onClick={() => updateSort("exhibit")}>Sort By Exhibit</button>

            <TimeInput label="Arrival" defaultValue="08:00" onChange={updateArrivalTime} />
            <TimeInput label="Departure" defaultValue="18:00" onChange={updateDepartureTime} />

            <DemoGrid filterExhibit={filterExhibit} filterArrivalTime={filterArrivalTime} filterDepartureTime={filterDepartureTime} sort={sort}/>


        </article>
    );
}
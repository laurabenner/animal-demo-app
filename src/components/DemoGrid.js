import demoData from "../demoData.json";
import { Demo } from "./Demo";
import { transformTimeString } from "../utils";
import { transformExhibitString } from "../utils";

export function DemoGrid({ filterExhibit, filterArrivalTime, filterDepartureTime }) {
    const demoFilter = (demo) => (transformExhibitString(demo.Exhibit) === filterExhibit || filterExhibit === "all") && (transformTimeString(demo.Time) >= filterArrivalTime) && (transformTimeString(demo.Time) < filterDepartureTime);
    console.log(filterArrivalTime);
    console.log(filterDepartureTime);

    return (
        <section className="demo-grid" >
            {
                demoData.filter(demoFilter).map((demo, index) => (
                    <Demo key={index} demo={demo} filterExhibit={filterExhibit} filterArrivalTime={filterArrivalTime} filterDepartureTime={filterDepartureTime} />
                ))
            }
        </section >
    );
}
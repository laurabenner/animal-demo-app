import demoData from "../demoData.json";
import { Demo } from "./Demo";
import { transformTimeString } from "../utils";

export function DemoGrid({ filterExhibit, filterArrivalTime, filterDepartureTime }) {
    //const demoFilter = (demo) => (demo.Exhibit === filterExhibit || filterExhibit === "all") && (transformTimeString(demo.Time) <= filterArrivalTime) && (transformTimeString(demo.Time) > filterDepartureTime);

    return (
        <section className="demo-grid" >
            {
                demoData.map((demo, index) => (
                    <Demo key={index} demo={demo} filterExhibit={filterExhibit} filterArrivalTime={filterArrivalTime} filterDepartureTime={filterDepartureTime} />
                ))
            }
        </section >
    );
}
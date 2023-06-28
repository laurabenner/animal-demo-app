import { transformTimeString } from "../utils";
import { transformExhibitString } from "../utils";
import { Time } from "./Time";
import { Exhibit } from "./Exhibit";
import { Description } from "./Description";
import { Collapsible } from "./Collapsible";

export function Demo({ demo }) {
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
            <Collapsible demo={demo} />
        </div>
    );
}
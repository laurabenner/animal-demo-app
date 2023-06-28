import { expandDemo } from "../utils";

export function Collapsible({ demo }) {
    function handleClick() {
        expandDemo(demo);
    }

    return (
        <button className="collapsible" onClick={handleClick}></button>
    );
}
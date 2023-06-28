export function transformTimeString(timeString) {
    return timeString.replace(
        /(\d+):(\d+) (AM|PM)/,
        (_, h, m, p) => `${String(p === "PM" ? +h + 12 : h).padStart(2, "0")}:${m}`
    );
}

export function transformExhibitString(exhibitString) {
    return exhibitString
        .toLowerCase()
        .replaceAll(" (outdoor viewing)", "")
        .replaceAll(" &amp; ", "-")
        .replaceAll("&#039;", "")
        .replaceAll(" & ", "-")
        .replaceAll(" ", "-")
        .replaceAll("'", "");
}

export function transformAnimalString(animalString) {
    return animalString
        .toUpperCase()
        .replaceAll("&amp;", "&")
        .replaceAll("&#039;", "'");
}

export function expandDemo(demo) {
    console.log("expandDemo");
}

export function sortByTime() {
    console.log("sortByTime");
}

export function sortByExhibit() {
    console.log("sortByExhibit");
}
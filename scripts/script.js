function year() {
    let day = new Date();
    let year = day.getFullYear();
    document.getElementById("currentyear").innerHTML = year;
}

function lastUpdated() {
    let a = document.lastModified;
    document.getElementById("lastmodified").innerHTML = a;
}
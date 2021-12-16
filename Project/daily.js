let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);
        let copyright = data["copyright"];
        let date = data["date"];
        let explanation = data["explanation"];
        let hdurl = data["hdurl"];
        let media_type = data["media_type"];
        let title = data["title"];
        let url = data["url"];
        document.getElementById("dailyimage").src = url;
        document.getElementById("tieude").innerHTML = title;
        document.getElementById("mieuta").innerHTML = explanation;
        document.getElementById("date").innerHTML += date;
        document.getElementById("banquyen").innerHTML += copyright;
    }
}
let queryUrl = "https://api.nasa.gov/planetary/apod?";
let queryKey =  "api_key=oFroTvWrMxThFauiQNxl5UvYKSk8la84DrrGpia3";
let queryFull = queryUrl + queryKey;
xmlhttp.open("GET", queryFull, true);
xmlhttp.send();
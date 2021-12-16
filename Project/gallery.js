let queryUrl = "https://images-api.nasa.gov?";
let queryKey =  "api_key=oFroTvWrMxThFauiQNxl5UvYKSk8la84DrrGpia3";
let queryFull = queryUrl + queryKey;

const searchInput = document.querySelector("#searchbar")

searchInput.addEventListener('change', function(event) {
    fetch(`https://images-api.nasa.gov/search?q=${event.target.value}`)
    .then(async function (res) {
        const data = await res.json();
        // console.log("searchInput", data);
        const change = document.querySelector("#changechange")
        let i = 0;
        document.getElementById("photocontainer").src = data["collection"]["items"][0]["links"][0]["href"];
        change.addEventListener ('click', function(){
            document.getElementById("photocontainer").src = data["collection"]["items"][i+1]["links"][0]["href"];
        })
        
    })

})
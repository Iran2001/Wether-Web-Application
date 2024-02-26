const appkey = "fc2ec1424b5e41068c813428242502";
document.getElementById("searchbtn").addEventListener("click", () => {
    let searchVal = document.getElementById("searchtxt").value;
    let reop = {
        method: "GET"  // Fixed typo here
    };
    fetch(`http://api.weatherapi.com/v1/current.json?key=${appkey}&q=${searchVal}`, reop)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        document.getElementById("temp").innerHTML = data["current"]["temp_c"] + "C";
        document.getElementById("cloud").innerHTML = data["current"]["condition"]["text"];
        document.getElementById("country").innerHTML = data["location"]["country"];
        document.getElementById("img").src = data["current"]["condition"]["icon"];
    })
    .catch(error => console.error('Error:', error));
});

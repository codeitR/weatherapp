// parts of an api
// Base URL
// endpoints
// query
// authentication -> public, bearer token[most secure], API key[least secure]

const city = document.getElementById("city");

city.innerHTML = "RAMESHHHHHHHHHHHHH !!!!!!";

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=london&appid=b3528849799fc69ab2e46bdd46794f25&units=metric",
  requestOptions
)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));

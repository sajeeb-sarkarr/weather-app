setInterval(clock, 1000);
function clock() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();

  let currentTime = hour + ":" + min 

  document.getElementById("time").innerHTML = currentTime;
}
clock();

function currentDay(){
  let time  = new Date();
  let day = time.getDay()
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  console.log(day)

  let finalDay = (dayNames[day]);
  console.log(finalDay)
}
currentDay()

let inputValue = "";

function getEverything() {
  inputElement.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      inputValue = inputElement.value;
      console.log(inputValue);
      event.preventDefault();
      fetchData()
    }
  });
}
const inputElement = document.getElementById("myInput");
getEverything();

function fetchData() {
  let city = inputValue;
  const apiKey = "05c5583da555edbbfa170c1cb3fd98b8"; // Replace with your actual API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


  fetch(url, { "method": "GET", "headers": {} })
    .then(response => { return response.json() })
    .then(data => {
      let temperature = data.main.temp
      let humidity = data.main.humidity
      let clouds = data.weather[0].description
      let wind = data.wind.speed

      console.log(data)
      console.log("temperature : " + temperature);
      document.getElementById("temperature").innerHTML = temperature
      console.log("clouds : " + clouds)
      document.getElementById("clouds").innerHTML = clouds
      console.log("wind Speed: " + wind)
      let windSpeed = wind * 3600 / 1000
      document.getElementById("wind").innerHTML = `${windSpeed} km/h`;
      console.log("humidity : " + humidity + "%")
      document.getElementById("humidity").innerHTML = `${humidity} %`;


    })
    .catch(err => {
      console.error(err);
    });

}
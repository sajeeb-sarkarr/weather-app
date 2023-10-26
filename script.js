setInterval(clock, 1000);
function clock() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();

  let currentTime = hour + ":" + min 

  document.getElementById("time").innerHTML = currentTime;
}
clock();
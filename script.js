function setDateAndTime() {
  const today = dayjs();
  const formattedDate = today.format("MMMM DD YYYY");

  document.getElementById("js date-today").innerHTML = formattedDate;
  let hours = document.getElementById("hrs");
  let minutes = document.getElementById("min");
  let seconds = document.getElementById("sec");

  setInterval(() => {
    let currentTime = new Date();

    hours.innerHTML = String(currentTime.getHours()).padStart(2, "0");
    minutes.innerHTML = String(currentTime.getMinutes()).padStart(2, "0");
    seconds.innerHTML = String(currentTime.getSeconds()).padStart(2, "0");
  }, 1000);
}
setDateAndTime();

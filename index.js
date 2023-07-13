const day = window.document.getElementById("days")
const hour = window.document.getElementById("hours")
const minute = window.document.getElementById("minutes")
const seconds = window.document.getElementById("seconds")

const ccxp = "01 dec 2023"

function countDown () {
    const ccxpParty = new Date(ccxp)
    const now = new Date()

    totalSeconds = (ccxpParty - now) / 1000;

    const finalDays = Math.floor(totalSeconds / 60 / 60 / 24);
    const finalHours = Math.floor(totalSeconds / 60 / 60) % 24;
    const finalMinutes = Math.floor(totalSeconds / 60 ) % 60;
    const finalSeconds = Math.floor(totalSeconds) % 60;

    day.innerHTML = finalDays
    hour.innerHTML = finalHours
    minute.innerHTML = finalMinutes
    seconds.innerHTML = finalSeconds

}

countDown();
setInterval(countDown, 1000);
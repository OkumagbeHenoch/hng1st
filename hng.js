document.addEventListener("DOMContentLoaded", function () {
    // Get the current date
    const d = new Date();
    
    // Array of days of the week
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Display the current day of the week
    let day = days[d.getDay()];
    document.getElementById("current-DayOfTheWeek").innerHTML = day;

    // Display the current UTC time in milliseconds
    let currentUTCTime = d.getTime();
    document.getElementById("currentUTCTime").innerHTML = currentUTCTime;
});




